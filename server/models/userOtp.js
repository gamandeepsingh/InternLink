const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require("jsonwebtoken")
const SECRET_KEY = "abcd"

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
    },

},{timestamps:true})

// token generate
// userOtpSchema.methods.generateAuthToken = async ()=>{
//     try {
//         let newToken = jwt.sign({_id:this._id},SECRET_KEY,{
//             expiresIn:"1d"
//         })

//         this.tokens = this.tokens.concat({token:newToken});
//         await this.save()
//         return newToken

//     } catch (error) {
//         resizeBy.status(400).json(error)
//     }
// }
const UserOtp = new mongoose.model("UserOtp",userOtpSchema)
module.exports = UserOtp
