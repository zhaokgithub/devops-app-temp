let mongoose = require('../db');
let Schema = mongoose.Schema;

let schema = new Schema({
    name:{type:String},
    password:{type:String},
    phone:{type:String},
    //1 admin 2 employee 3 user
    role:{type:Number},
    sex:{type:Number},
    create_time:{type:Date},
    email:{type:String}
})

const userModel = mongoose.model('user', schema);
module.exports = userModel