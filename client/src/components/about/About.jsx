import React from "react";
import aboutImg from "./assets/about.png";
import "./about.css";
function About() {
  return (
    <div id="about" className="flex flex-col items-center w-screen max-w-[1080px] px-8">
      <img className="" src={aboutImg} alt="" />
      <ul className="text-gray-600 text-lg font-light font-mono list-disc mt-4">
        <li>
          Welcome to <span className="text-blue-500">InternLink</span>, your gateway to exciting job and internship
          opportunities! At InternLink, we provide a curated list of diverse job
          openings where users can apply and land their dream positions. With a
          wide range of companies and industries represented, users have the
          chance to explore various career paths and gain valuable experience.
        </li>

        <li>
          Our platform connects talented individuals with reputable companies,
          offering both job seekers and employers a streamlined process for
          recruitment. Whether you're a recent graduate seeking your first
          internship or an experienced professional looking for a career change,
          InternLink caters to individuals at every stage of their career
          journey.
        </li>
        <li>
          We believe in empowering candidates by providing access to meaningful
          opportunities that align with their skills and interests. By
          leveraging our platform, users can network with industry leaders,
          showcase their talents, and secure employment or internship positions
          that propel their careers forward.
        </li>
      </ul>
    </div>
  );
}

export default About;
