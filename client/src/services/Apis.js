import { commonRequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";

export const sendProfile = async(data)=>{
    return await commonRequest("POST",`${BACKEND_URL}/user/profile`,data)
}

export const sendOtpFunction = async(data)=>{
    return await commonRequest("POST",`${BACKEND_URL}/user/sendotp `,data)
}

export const userVerify = async(data) =>{
    return await commonRequest("POST",`${BACKEND_URL}/user/verify`,data)
}


