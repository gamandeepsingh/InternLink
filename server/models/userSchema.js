const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email:{
        type:mongoose.Schema.Types.ObjectId, // store the reference of something
        ref: "UserOtp"  // referenct to the post model
    },
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
    
})



const User = new mongoose.model("User",userSchema)
module.exports = User 