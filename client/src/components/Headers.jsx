import React from "react";
import { Link, useLocation } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
function Headers() {
  const location = useLocation()
  // console.log(location);
  return (
    <div className="w-screen  bg-blue-500 text-white flex justify-center h-[10vh] px-6">
      <div className="max-w-[1080px] flex justify-between w-screen items-center">
        <div className="">
          <Link to="/" className="text-3xl font-mono font-medium italic ">InternLink</Link>
        </div>
        <div className="">
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
        </div>
      </div>
    </div>
  );
}

export default Headers;
