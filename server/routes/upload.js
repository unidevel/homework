var express = require('express');
var router = express.Router();
var config = require('../config');
var multer = require('multer');
var upload = multer({ dest: config.tmpDir });
var fs = require('fs');
var path = require('path');

function uploadFile(name){
  return path.join(config.uploadDir, name);
}

function uploadTmpFile(name){
  return path.join(config.tmpDir, name);
}

router.post('/', upload.single('file'), function(req, res, next) {
  var file = req.file
  if ( !file ) {
    res.json({err: "没有上传任何文件！"});
    return;
  }
  fs.renameSync(uploadTmpFile(file.filename), uploadFile(file.originalname));
  res.json({
    file: {
      field: file && file.fieldname,
      filename : file && file.filename,
      path: file && file.path,
      originalname: file && file.originalname,
      mimetype: file && file.mimetype,
      size: file && file.size
    }
  })
});

module.exports = router;
