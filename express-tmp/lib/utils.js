
/**
 * @param {Object} data
 * @param {Object} err
 * @param {Object} options
 * @description format the data of response
 */
let formatReturnData = function (data, err = null, options = {}) {
    let code = options.code ? options.code : 200
    let message = options.message ? options.message : 'success!'
    return !err ? { data, code, message } : { data, err, message: 'failed!' }
}
/**
 * @param {number} code
 * @param {String} errMsg
 * @param {Object} options
 * @description format the data of exception response
 */
let formatReturnWarning = function (code, errMsg, options = {}) {
    return { code, message:errMsg }
}
module.exports = {
    formatReturnData,
    formatReturnWarning
}