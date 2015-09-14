var P = require('bluebird');
var bcrypt = P.promisifyAll(require('bcrypt'));

function Account(fields) {
  this.username = fields.username;
  this.hash = fields.hash;
}

Account.fromSignup = function(json) {
  if (!json.password) {
    return P.reject(new Error("No password given"));
  }

  if (!json.username) {
    return P.reject(new Error("no username"));
  }

  return bcrypt.genSaltAsync(10).then(function(salt) {
    return bcrypt.hashAsync(json.password, salt);
  }).then(function(hash) {
    return new Account({
      username: json.username,
      hash: hash
    });
  });
};

Account.prototype.toJSON = function() {
  return {
    username: this.username
  };
};

module.exports = Account;
