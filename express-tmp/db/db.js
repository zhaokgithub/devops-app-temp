let mongoose = require('mongoose');
let config = require('../config/config');

let dbUrl = config.db.host+config.db.port+'/'+config.db.db_name
mongoose.connect(dbUrl);

let connection = mongoose.connection;
connection.on('error', function(err){
   console.log( 'connection error:')
});

connection.on('connecting',function(){
   console.log('mongodb is connecting!')
})

connection.on('opened',function(){
   console.log('mongodb is connecting!')
})

connection.on('disconnected',function(){
   console.log('mongodb is disconnected!')
})

connection.on('connected',function(){
   console.log('the connection of mongodb is success! ')
})
module.exports = mongoose