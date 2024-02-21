import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify'
import { sendOtpFunction } from '../services/Apis';

function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
  const navigate = useNavigate()
  //validation
async function sendOTP(e) {
    e.preventDefault();
    if (email === "") {
        toast.error("enter your Email")
    }else if(!email.includes("@")){
        toast.error("Enter valid Email")
    }else{
      const data = {
        name:name,
        email:email
      }
      const response = await sendOtpFunction(data)
      console.log(response);
    if(response.status === 200){
        toast.success("Login Successfully")
        navigate("/user/otp",{state:email})
      }
    else{
      toast.error(response.response.data.error)
    }  
    }
  }

  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md  h-s">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt="InterLink"
            />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">
            Login to see your account
          </p>

          <form onSubmit={sendOTP}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                name="name"
                type="text"
                value={name}
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                aria-label="Enter Your Name"
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                name="email"
                type="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email Address"
              />
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                type="submit"
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Register