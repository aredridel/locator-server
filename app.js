var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();
var P = require('bluebird');
var Kapow = require('kapow');
var Account = require('./model/account');
var AccountPublic = require('./model/accountPublic');

var openDb = require('./db');

app.use(openDb('db'));
app.use(bodyParser.json());

app.put('/account/:id', function(req, res, next) {
  Account.fromSignup(req.body).catch(function(err) {
    throw Kapow(err, 400);
  }).then(assertAccountOwnsItself(req.params)).then(function(account) {
    return req.db.get(account.username).then(function(existing) {
      throw Kapow(409, 'Account already exists');
    }).catch(function(err) {
      if (err.name == 'NotFoundError') {
        return account;
      } else {
        throw err;
      }
    });
  }).then(function(account) {
    return new AccountPublic(account);
  }).then(function(account) {
    res.json(account);
  }).catch(next);
});

app.use(function handleErrors(err, req, res, next) {
  if (err.httpStatus) {
    res.status(err.httpStatus).json(err);
  } else {
    next(err);
  }
});

function assertAccountOwnsItself(resource) {
  return function(account) {
    if (account.username != resource.id) {
      throw Kapow(401, "username doesn't match");
    }

    return account;
  };
}
