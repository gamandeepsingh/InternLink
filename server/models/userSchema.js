const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require("jsonwebtoken")
const SECRET_KEY = "abcd"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
    },
    profilePic:{
        type:String
    },
    linkedinLink:{
        type:String
    },
    githubLink:{
        type:String
    },
    resume:{
        type:String
    },
    // Education Details
    typeOfSchool:{
        type : String
    },
    schoolName:{
        type:String
    },
    eduStartDate:{
        type:Date
    },
    eduEndDate:{
        type:Date
    },
    // Project details
    projectName:{
        type:String
    },
    projectDescription:{
        type:String
    },
    typeOfProject:{
        type:String
    },
    // Past Experienced
    pastExperiencedType:{
        type:String
    },
    companyName:{
        type:String
    },
    companyWebsiteLink:{
        type:String
    },
    role:{
        type:String
    },
    expStartDate:{
        type:String
    },
    expEndDate:{
        type:String
    },
    coverLetter:{
        type:String
    },
    coin:{
        type:Number,
        default:50
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

// token generate
userSchema.methods.generateAuthToken = async ()=>{
    try {
        let newToken = jwt.sign({_id:this._id},SECRET_KEY,{
            expiresIn:"1d"
        })

        this.tokens = this.tokens.concat({token:newToken});
        await this.save()
        return newToken

    } catch (error) {
        resizeBy.status(400).json(error)
    }
}

const User = new mongoose.model("User",userSchema)
module.exports = User 