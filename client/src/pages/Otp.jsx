import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { userVerify } from '../services/Apis'

function Otp() {
  const [otp, setOtp] = useState("")

  const location = useLocation()
  const navigate = useNavigate()

  // console.log(location);

  async function checkOTP(e){
    e.preventDefault();
    if(otp===""){
      toast.error("Fill the OTP")
    }
    else if(!/[^a-zA-Z]/.test(otp)){
      toast.error("Enter the valid OTP")
    }
    else if(!(otp.length === 6)){
      toast.error("Length of the OTP must be 6.")
    }
    else{
      const data = {
        otp,
        email:location.state
      }

      const response = await userVerify(data)
    }
  }
  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md  h-s">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            {/* <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt="InterLink"
            /> */}
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
           Enter Your OTP here
          </h3>

          <p className="mt-1 text-center text-gray-500 ">
            OTP is sent on your Email
          </p>

          <form onSubmit={checkOTP}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                name="otp"
                type="text"
                value={otp}
                placeholder="OTP"
                onChange={(e) => setOtp(e.target.value)}
                aria-label="OTP"
              />
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Otp