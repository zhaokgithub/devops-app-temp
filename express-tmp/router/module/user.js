let express = require('express')
let router = express.Router()
let userApi = require('../../api/user/user')

router.post('/login',function(req,res,next){
    console.log('user')
    
})
router.post('/logout',function(req,res,next){})
//create user
router.post('/info',function(req,res,next){

})
router.put('/info',function(req,res,next){})

module.exports =  router