const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    profilePic:{
        type:File
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
        type:File
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

const User = new mongoose.model("User",userSchema)
module.exports = User 