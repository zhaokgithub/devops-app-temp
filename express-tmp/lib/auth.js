let config = require('../config/config')
// let jwt = require('express-jwt')
let validateAuth = function (req, res, next) {
    let token = req.get('token')
    let isValidRoute = config.validRoutes.includes(req.originUrl)
    if (isValidRoute || token) {
        next()
    } else {
        return token ? { isValid: true } : { isValid: false, data: { code: 401, mst: "not authority!", success: -1 } }
    }
}

module.exports = {
    validateAuth: validateAuth
}