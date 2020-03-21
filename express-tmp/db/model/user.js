let mongoose = require('../db');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name:{type:String},
    password:{type:String},
    phone:{type:String},
})

const User = mongoose.model('Cat', userSchema);
