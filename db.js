var level = require('level');
var sublevel = require('sublevel');
var levelPromise = require('level-promise');

module.exports = function(dbPath) {
  var db = sublevel(level(dbPath, {
    valueEncoding: 'json'
  }));
  return function(req, res, next) {
    req.db = levelPromise(db);
    next();
  };
};

function promiseSublevels(db) {
  var sublevel = db.sublevel;
  db.sublevel = function(name, options) {
    return levelPromise(sublevel.call(this, name, options));
  };
}
