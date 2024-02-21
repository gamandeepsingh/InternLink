const mongoose = require('mongoose')
const validator = require('validator')

const userOtpSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email")
            }
        }
    },
    otp:{
        type:String,
        required:true
    }

},{timestamps:true})

const UserOtp = new mongoose.model("UserOtp",userOtpSchema)
module.exports = UserOtp
