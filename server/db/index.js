var low = require('lowdb')
var config = require('../config')
var db = low(config.db, { storage: require('lowdb/lib/storages/file-async') })
var ready = false
db.defaults({ files: [], users: [] }).write()
/* var ready = db.read().then(function(){
  ready = true
  db.write()
}, function(err){
  console.error('Read '+config.db+' failed!')
}) */
module.exports = {
  read: db.read.bind(db),
  write: db.write.bind(db),
  get: db.get.bind(db),
  ready: ready
}
