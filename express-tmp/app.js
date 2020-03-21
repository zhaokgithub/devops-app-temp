let express = require('express')
let app =express()
let router = require('./router/index');
var bodyParser = require('body-parser');
let auth = require('./lib/auth')

app.use(bodyParser.json({limit: '1mb'}));

app.use('/api/v1',(req,res,next)=>{auth.validateAuth(req,res,next)})
app.use('/api/v1',router)

app.use('*',function(req,res,next){
    res.json({code:404,data:null,msg:"路径不存在"})
})
app.listen(3000,function(){
    console.log('serve is running:3000')
})