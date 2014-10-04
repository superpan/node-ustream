'use strict';

var channel = {

  // get channel detail in json
  getDetail: function getChannelDetail(channelId, callback) {
    var self = this;
    var opts = {
      url: self.buildApiUrl('/channels/' + channelId + '.json')
    };

    return self.get(opts, callback);
  },

  createChannel: function createChannel(opts, callback) {
    if (typeof callback === 'undefined') {
      callback = opts;
      opts = {};
    }

    return callback(new Error('method not supported'));
  }
};

module.exports = channel;
