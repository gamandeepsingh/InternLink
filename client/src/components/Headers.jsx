import React, { useEffect, useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
import logo from "../assests/logo.png"


function Headers() {
  const location = useLocation()
  const navigate = useNavigate()
  const [width, setWidth] = useState(window.innerWidth)
  // console.log(location);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="w-screen sticky top-0 right-0 left-0 z-50 bg-blue-500 text-white flex justify-center h-[10vh] max-md:h-full px-6">
      <div className="max-w-[1080px] flex justify-between w-screen items-center flex-wrap max-md:justify-center">
        <div className="h-full max-md:h-fit">
          <Link to="/" className="text-3xl font-mono font-medium italic ">
            <img className="h-full max-md:h-[90px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="">
          
            <ul className="flex gap-3 text-xl font-mono font-medium flex-wrap max-md:justify-center">
            <HashLink smooth to="/"><li className="hover:underline transition-underline duration-150">Home</li></HashLink>
            <HashLink smooth to="#job"><li className="hover:underline transition-underline duration-150">Job</li></HashLink>
            <HashLink smooth to="#about"><li className="hover:underline transition-underline duration-150">About</li></HashLink>
            <HashLink smooth to="#contact"><li className="hover:underline transition-underline duration-150">Contact</li></HashLink>
            <Link to="/profile"><li className="hover:underline transition-underline duration-150">Profile</li></Link>
            {
              location.pathname === "/login" || location.pathname === "/user/otp" || location.pathname==="/dashboard" ? <div></div> : <li className="hover:underline transition-underline duration-150"><Link to="/login">Login</Link></li>
            }
            {
              location.pathname==="/dashboard" &&
              <li className="hover:underline transition-underline duration-150"><Link to="/">Logout</Link></li>
            }
            
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Headers;
