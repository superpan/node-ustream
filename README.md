node-ustream (wip) [![Circle CI](https://circleci.com/gh/superpan/node-ustream.png?style=badge)](https://circleci.com/gh/superpan/node-ustream)
============

node wrapper around ustream apis [Ustream](https://ustream.github.io/api-docs/)

## Install
```
npm install -g node-ustream
```

## Usage

```
var Ustream = require('node-ustream');

var ustream = new Ustream();

ustream.channel.getDetail(1234567, function(err, res) {
  ...
});

```
