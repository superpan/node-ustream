'use strict';
var assert = require('chai').assert;
var Ustream = require('../');

describe('Ustream', function() {
  var ustream = null;

  before(function(next) {
    ustream = new Ustream();
    next();
  });

  it('should get channel data back', function(done) {
    var channelId = 19037772;

    ustream.channel.getDetail(channelId, function(err, res) {
      assert.isNull(err);
      assert.equal(res.channel.id, channelId);
      assert.equal(res.channel.title, 'Superpan Test Channel');
      assert.equal(res.channel.url, 'superpan-test-channel');
      return done();
    });
  });
});
