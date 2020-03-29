let config = require('../config/config')
let jwt = require('jsonwebtoken')
let validateAuth = function (req, res, next) {
    let token = req.get('token')
    let isValidRoute = config.validRoutes.includes(req.originalUrl)
    if (isValidRoute) {
        next()
    } else if (token) {
        jwt.verify(token, config.jwtsecret, function (err, decoded) {
            if (err) {
                res.status(401)
                res.json({ code: 401, msg: "not authority!" })
                return
            }
            req.userId = decoded ? JSON.parse(decoded.data)._id : ''
            next()
        })
    } else {
        res.status(401)
        res.json({ code: 401, msg: "not authority!" })
    }
}

let signJwtToken = function (data) {
    let token = jwt.sign({
        data: JSON.stringify(data)
    }, config.jwtsecret, { expiresIn: '1h' })
    return token
}

module.exports = {
    validateAuth,
    signJwtToken
}