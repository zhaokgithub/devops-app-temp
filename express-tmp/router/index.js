let express = require('express')
let router = express.Router()

router.use('/',function(req,res,next){
    let jwt = require('jsonwebtoken'); //用来生成token
})

module.exports = router