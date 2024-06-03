const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    nationalId: {type: Number, required: true},
    balance: {type: Number, required: false,default:550},
    password: {type: String, required: true},
    
},
{timestamps:true})

const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel;