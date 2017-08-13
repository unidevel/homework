var _path = require('path')
var mkdirp = require('mkdirp')
var base = '..'
var path = function() {
  var args = Array.prototype.slice.call(arguments)
  var newArgs = [__dirname, base].concat(args)
  return _path.join.apply(_path, newArgs)
}
var config = {
  db: path('db/db.json'),
  tmpDir: path('tmp'),
  uploadDir: path('uploads'),
}

config.init = function(){
  var fs = require('fs');
  mkdirp(config.tmpDir);
  mkdirp(config.uploadDir);
}

module.exports = config;
