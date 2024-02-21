import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
import logo from "../assests/logo.png"
function Headers() {
  const location = useLocation()
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
    <div className="w-screen sticky top-0 right-0 left-0 z-50 bg-blue-500 text-white flex justify-center h-[10vh] px-6">
      <div className="max-w-[1080px] flex justify-between w-screen items-center">
        <div className="">
          <Link to="/" className="text-3xl font-mono font-medium italic ">
            <img className="h-[90px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="">
          {
            width > 1000 ? 
            <ul className="flex gap-3 text-xl font-mono font-medium">
            <HashLink smooth to="/"><li>Home</li></HashLink>
            <HashLink smooth to="#job"><li>Job</li></HashLink>
            <HashLink smooth to="#about"><li>About</li></HashLink>
            <HashLink smooth to="#contact"><li>Contact</li></HashLink>
            <Link to="/profile"><li>Profile</li></Link>
            {
              location.pathname === "/login" || location.pathname === "/user/otp" ? <div></div> : <li><Link to="/login">Login</Link></li>
            }
            
          </ul>
          :
          <div>g</div>
          }
        </div>
      </div>
    </div>
  );
}

export default Headers;
