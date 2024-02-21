const UserOtp = require("../models/userOtp")
const nodemailer = require('nodemailer')
const User = require('../models/userSchema')
require('dotenv').config()

// email config
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

exports.userData = async (req,res)=>{
    const {
      name,mobile,profilePic,linkedinLink,githubLink,resume,typeOfSchool,schoolName,eduStartDate,eduEndDate,projectName,projectDescription,typeOfProject,pastExperiencedType,companyName,companyWebsiteLink,role,expStartDate, expEndDate,coverLetter
    } = req.body

    if(!name){
        res.status(400).json({message:"Enter Your Name Please"})
        console.log("b");
    }
    // console.log("c");

    try {
        const preuser = await User.findOne({name:name})
        // console.log(preuser);
        if(preuser){
            const data = await User.findByIdAndUpdate(
                {_id:preuser._id},
                {mobile,profilePic,linkedinLink,githubLink,resume,typeOfSchool,schoolName,eduStartDate,eduEndDate,projectName,projectDescription,typeOfProject,pastExperiencedType,companyName,companyWebsiteLink,role,expStartDate, expEndDate,coverLetter},{new:true}
            )

            res.status(200).json({message:"Succesfully updated Database",data:data})
        }
        else{
            // console.log("d");

            const newUser = new User({
                name, mobile, profilePic, linkedinLink, githubLink, resume, typeOfSchool, schoolName, eduStartDate, eduEndDate, projectName, projectDescription, typeOfProject, pastExperiencedType, companyName, companyWebsiteLink, role, expStartDate, expEndDate, coverLetter
            });
            
            const data = await newUser.save();
            console.log("e");
            res.status(200).json({message:"User Added Succesfully",data:data})
            console.log("f");
        }
    } catch (err) {
        res.status(400).json({
            error:"Error in loading data in database",
            error:err
        })
    }
}


exports.userOtpSend = async(req,res)=>{
    const {email,name} = req.body;
    if(!email || !name){
        res.status(400).json({error:"please Enter Your Email and Name"})
    }
    try {
        const OTP = Math.floor(100000 + Math.random()*90000)
        const existEmail = await UserOtp.findOne({email});
        if(existEmail){
            const updateData = await UserOtp.findByIdAndUpdate({_id:existEmail._id},{
                otp:OTP
            },{new:true}
            )
            await updateData.save()
            const mailOptions ={
                from:process.env.EMAIL,
                to:email,
                subject:"OTP verification From Team-INTERNLINK",
                text:`Hello ${name}! <br/> here is the OTP: ${OTP}`
            }
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("ERROR:",error);
                    res.status(400).json({error:"EMAIL NOT SEND"})
                }
                else{
                    console.log("Email sent",info.messageId);
                    res.status(200).json({message:"Email Sent successfully"})
                }
            })
        }else{
            const saveOtpData = new UserOtp({
               name,email,otp:OTP
            })
            await saveOtpData.save()
            const mailOptions ={
                from:process.env.EMAIL,
                to:email,
                subject:"Sending Email for OTP verification",
                text:`Hello ${name}! <br/> Here is the OTP: ${OTP}`
            }
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("ERROR:",error);
                    res.status(400).json({error:"EMAIL NOT SEND"})
                }
                else{
                    console.log("Email sent",info.message);
                    res.status(200).json({message:"Email Sent successfully"})
                }
            })
        }
    } catch (err) {
        res.status(400).json({
            error:"Invalid Details",
            err
        })
    }
}

exports.userLogin = async (req,res) =>{
    const {email,otp} = req.body;
    if(!otp || !email){
        res.status(400).json({error:"please Enter Your OTP and Email"})
    }
    try{
        const otpverification =  await UserOtp.findOne({email:email})
        
        if(otpverification.otp === otp){

            res.status(200).json({message:"User Login Successfully"})
        }else{
            res.status(400).json({error:"Invalid OTP"})
        }
    } catch (err) {
        res.status(400).json({
            error:"Invalid Details",
            err
        })
    }
}