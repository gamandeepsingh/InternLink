import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <div className="w-screen  bg-blue-500 text-white flex justify-center h-[10vh] px-6">
      <div className="max-w-[1080px] flex justify-between w-screen items-center">
        <div className="">
          <Link to="/">InternLink</Link>
        </div>
        <div className="">
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>About</li>
            <li>Contack</li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Headers;
