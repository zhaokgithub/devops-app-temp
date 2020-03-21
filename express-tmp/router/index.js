let express = require('express')
let router = express.Router()
let userRoutes = require('./module/user')

router.use('/user',userRoutes)

module.exports = router