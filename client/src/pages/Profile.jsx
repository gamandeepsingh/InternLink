import React, { useState } from "react";
import "../styles/profile.css";
import toast, { Toaster } from 'react-hot-toast';
import { sendProfile } from "../services/Apis";
function Profile() {

  const [inputData , setInputData]=useState({
    name:"",
    mobile:"",
    profilePic:"",
    linkedinLink:"",
    githubLink:"",
    resume:"",
    typeOfSchool:"School",
    schoolName:"",
    eduStartDate:"",
    eduEndDate:"",
    projectName:"",
    projectDescription:"",
    typeOfProject:"Solo",
    pastExperiencedType:"Internship",
    companyName:"",
    companyWebsiteLink:"",
    role:"",
    expStartDate:"",
    expEndDate:"",
    coverLetter:""
  })

  function handleChange(e){
    const {name,value} = e.target;
    setInputData({...inputData,[name]:value})
    // console.log(inputData);
  }

 async function handleSubmit(e){
    e.preventDefault()
    const {
      name,mobile,profilePic,linkedinLink,githubLink,resume,typeOfSchool,schoolName,eduStartDate,eduEndDate,projectName,projectDescription,typeOfProject,paseexperiencedType,compantName,companyWebsiteLink,role,expStartDate, expEndDate,cover 
    } = inputData
    if(name===""){
      toast.error("Enter the Name Please")
    }else{
      toast.success("profile Saved suuccessfully")
      const response = await sendProfile(inputData)
      if(response)
      console.log(response);
    }

  }
  return (
    <div className="w-[90vw] max-w-[1200px] justify-center mx-auto px-5">
      <form id="ft-form"   onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center font-extrabold m-3 underline">Profile Application</h1>
        <fieldset>
          <legend>Personal Details</legend>
          <div className="two-cols">
            <label>
              Name:
              <input type="text" name="name" onChange={(e)=>handleChange(e)} placeholder="Enter Your Name" />
            </label>
            <label>
              Mobile:
              <input  type="text" name="mobile" onChange={(e)=>handleChange(e)} placeholder="Enter Your Mobile No." />
            </label>
          </div>
          <div className="two-cols">
            <label>
              Profile Pic:
              <input type="file" name="profilePic" onChange={(e)=>handleChange(e)} />
            </label>
            <label>
              LinkedIn Profile:
              <input type="text" name="linkedinLink" onChange={(e)=>handleChange(e)} placeholder="Enter Link"/>
            </label>
          </div>
          <div className="two-cols">
            <label>
              GitHub Profile:
              <input type="text" name="githubLink" onChange={(e)=>handleChange(e)} placeholder="Enter Link" />
            </label>
            <label>
              Resume:
              <input type="file" name="resume" onChange={(e)=>handleChange(e)} accept=".doc,.docx,.pdf"/>
            </label>

          </div>
          <legend>Education Details</legend>
          <label htmlFor="typeOfSchool">Type (School/College):</label>
            <select name="typeOfSchool" onChange={(e)=>handleChange(e)}>
              <option id="typeOfSchool">School</option>
              <option id="typeOfSchool">College</option>
            </select>
          <label>
            School/College Name:
            <input type="text" name="schoolName" onChange={(e)=>handleChange(e)} placeholder="Enter Your School/College Name"/>
          </label>
          <div className="two-cols">
            <label>
              Start Data:
              <input type="date" name="eduStartDate" onChange={(e)=>handleChange(e)}/>
            </label>
            <label>
              End Date:
              <input type="date" name="eduEndDate" onChange={(e)=>handleChange(e)}/>
            </label>
          </div>
          <legend>Project Details</legend>
          <div className="two-cols">
            <label>
              Project Name:
              <input type="text" name="projectName" onChange={(e)=>handleChange(e)} placeholder="Enter Your Project Name"/>
            </label>
            <label>
              Project Description <span className="text-xs">(max 200 words)</span> :
              <input type="text" name="projectDescription" onChange={(e)=>handleChange(e)} placeholder="Enter Your Project Description"  />
            </label>
          </div>
          <div className="two-cols">
            <label>
            Solo Project / Group Project:
            <select name="typeOfProject" onChange={(e)=>handleChange(e)}>
              <option id="typeOfProject">Solo</option>
              <option id="typeOfProject">Group</option>
            </select>
            </label>
          </div>
        </fieldset>
          

        <fieldset>
          <legend>Past Experienced</legend>
          <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
          <div className="two-cols">
            <label htmlFor="pastExperiencedType">
              Type (Internship/Job):
              <select name="pastExperiencedType" onChange={(e)=>handleChange(e)}>
              <option id="pastExperiencedType">Internship</option>
              <option id="pastExperiencedType">Job</option>
            </select>
            </label>
            <label>
            Company Name:
              <input
                type="text"
                name="companyName"
                placeholder="Enter Your Company Name"
                onChange={(e)=>handleChange(e)}
              />
            </label>
          </div>
          <div className="two-cols">
            <label htmlFor="companyWebsiteLink">
              Company Website Link:
              <input
                type="text"
                name="companyWebsiteLink"
                placeholder="Enter Your Link"
                onChange={(e)=>handleChange(e)}
              />
            </label>
            <label>
            Role:
              <input
                type="text"
                name="role"
                placeholder="Enter Your Role"
                onChange={(e)=>handleChange(e)}
              />
            </label>
          </div>
          <div className="two-cols">
            <label htmlFor="expStartDate">
              Start Date:
              <input
                type="Date"
                name="expStartDate"
                onChange={(e)=>handleChange(e)}
              />
            </label>
            <label htmlFor="expEndDate">
              End Date:
              <input
                type="date"
                name="expEndDate"
                onChange={(e)=>handleChange(e)}
              />
            </label>
          </div>
          <label htmlFor="coverLetter">
              Cover Letter:
              <input
                type="file"
                name="coverLetter"
                onChange={(e)=>handleChange(e)}
                accept=".doc,.docx,.pdf"
              />
            </label>
        </fieldset>
        <div className="btns">
          <button className="flex justify-center mx-auto bg-blue-500 text-white text-2xl py-2 px-4 mb-10 rounded-xl hover:scale-110 transition-scale duration-100">Submit</button>
        </div> 
      <Toaster/>
      </form>
    </div>
  );
}

export default Profile;
