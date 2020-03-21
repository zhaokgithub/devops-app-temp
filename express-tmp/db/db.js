let mongoose = require('mongoose');
let config = require('../config/config');

mongoose.connect(config.db.host+config.db.port);

let connection = mongoose.connection;
connection.on('error', function(err){
   console.log( 'connection error:')
    logger.error(err)
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