let express = require('express')
let app =express()
let router = require('./router/index');
let auth = require('./lib/auth')

app.use('/',auth.validateAuth)
app.listen(3000,function(){
    console.log('serve is running:3000')
})