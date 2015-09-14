function AccountPublic(account) {
  this.account = account;
}

AccountPublic.prototype.toJSON = function() {
  return {
    username: this.account.username
  };
};

module.exports = AccountPublic;
