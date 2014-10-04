'use strict';

var _ = require('underscore');
var request = require('request');

function Ustream(opts) {
  var self = this;
  self.opts = opts;

  // Mixin the individual apis
  ['authentication', 'channel', 'socialstream'].forEach(function(api) {
    var mixin = require('./' + api);

    // clone self and merge in api methods
    self[api] = Object.create(self);
    _.extend(self[api], mixin);
  });

  return self;
}

Ustream.prototype.buildApiUrl = function(resource) {
  return 'https://api.ustream.tv' + resource;
};

Ustream.prototype.req = function req(opts) {
  var defaults = {
    json: true
  };

  opts = _.defaults(opts, defaults);
  return request.defaults(opts);
};

Ustream.prototype.get = function get(opts, callback) {
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }

  var req = this.req(opts);
  req.get(opts, function(err, res, body) {
    if (err) {
      return callback(err);
    }

    if (res.statusCode !== 200) {
      return callback('Problem with request');
    }

    return callback(null, body);
  });
};

Ustream.prototype.post = function post(opts, callback) {
  var req = this.req(opts);

  req.post(opts, function(err, res, body) {
    if (err) {
      return callback(err);
    }
    if (res.statusCode !== 201 && res.statusCode !== 200) {
      return callback('Problem with request', body);
    }

    return callback(null, body);
  });
};

Ustream.prototype.put = function put(opts, callback) {
  var req = this.req(opts);

  req.put(opts, function(err, res, body) {
    if (err) {
      return callback(err);
    }
    if (res.statusCode !== 201 && res.statusCode !== 200) {
      return callback('Problem with request', body);
    }

    return callback(null, body);
  });
};

module.exports = Ustream;
