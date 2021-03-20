const Cipher = function() {
    this.encrypt = require('./src/encrypt');
    this.decrypt = require('./src/decrypt');
};

module.exports = new Cipher();
