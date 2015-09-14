var level = require('level');
var sublevel = require('sublevel');
var levelPromise = require('level-promise');

module.exports = function(dbPath) {
  var db = sublevel(level(dbPath), 'users');
  return function(req, res, next) {
    req.db = levelPromise(db);
    next();
  };
};
