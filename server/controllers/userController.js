const UserOtp = require("../models/userOtp")
const nodemailer = require('nodemailer')
require('dotenv').config()

// email config
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})


exports.userOtpSend = async(req,res)=>{
    const {email} = req.body;
    if(!email){
        res.status(400).json({error:"please Enter Your Email"})
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
                subject:"Sending Email for OTP verification",
                text:`OTP: ${OTP}`
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
                email,otp:OTP
            })
            await saveOtpData.save()
            const mailOptions ={
                from:process.env.EMAIL,
                to:email,
                subject:"Sending Email for OTP verification",
                text:`OTP: ${OTP}`
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
    try {
        const otpverification =  await UserOtp.findOne({email:email})
        if(otpverification.otp === otp){
            const preuser = await User
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