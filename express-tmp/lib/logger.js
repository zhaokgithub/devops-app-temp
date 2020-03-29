
let log4js = require('log4js');


log4js.configure({
    appenders: {
        console:{
            type:'console'
        },
        log:{
            type:'dateFile',
            filename:'./log/record.log',
            alwaysIncludePattern:true,
            alwaysIncludePattern:true
        }
    },
    categories:{
        default:{appenders:['log','console'],level:'info'}
    },
    // replaceConsole: true

})
let logger = log4js.getLogger();

module.exports = logger
