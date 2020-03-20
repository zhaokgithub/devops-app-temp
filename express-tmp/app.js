let express = require('express')
let app =express()
let router = require('./router/index');

app.use('/',router)

app.listen(3000,function(){
    console.log('serve is running:3000')
})