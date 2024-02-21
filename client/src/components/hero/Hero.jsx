import React from "react";
import { ReactTyped } from "react-typed";
import "./hero.css";
import hero from "./assets/hero.png";

function Hero() {
  return (
    <div className="w-screen h-full mt-10 max-w-[1080px]  flex flex-wrap justify-center items-center relative">
        <div className="clip-path1"></div>
        <div className="clip-path2"></div>
      {/* left */}
      <div className="w-1/2  h-4/5 max-md:w-screen">
        <div className="flex flex-col items-start justify-center px-5 h-full space-y-4 gap-5">
          <h1 className="font-bold font-mono text-blue-500 text-[4rem] max-mlg:text-[3rem] max-sm:text-[2.5rem]">InternLink</h1>
          <ReactTyped
            strings={[
              "Your Insightful Internship Hub",
              "Navigating Your Internship Journey",
              "Broadening Your Internship Horizons",
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
            style={{ color: "black" }}
            className="text-black"
          >
            <input
              type="text"
              className="bg-transparent outline-none cursor-default text-black text-2xl w-[400px] px-1"
              disabled
              style={{ color: "black" }}
            />
          </ReactTyped>
        <div className="mt-4">
          <ul className="list-disc px-6">
            <li>Connecting You to Internship Success</li>
            <li>Unlocking Internship Insights</li>
            <li>Empowering Your Internship Experience</li>
          </ul>
        </div>
        </div>
      </div>
      {/* right */}
      <div className="w-1/2  h-4/5 max-md:w-screen">
        <img className="hero-img" src={hero} alt="hero_img" />
      </div>
    </div>
  );
}

export default Hero;
