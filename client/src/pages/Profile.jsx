import React from "react";
import "../styles/profile.css";
function Profile() {
  return (
    <div className="w-[90vw] max-w-[1200px] justify-center mx-auto px-5">
      <form id="ft-form" accept-charset="UTF-8" enctype="multipart/form-data">
        <h1 className="text-4xl text-center font-extrabold m-3 underline">Profile Application</h1>
        <fieldset>
          <legend>Personal Details</legend>
          <div class="two-cols">
            <label>
              Name:
              <input type="text" name="name" placeholder="Enter Your Name" />
            </label>
            <label>
              Mobile:
              <input  type="text" name="mobile" placeholder="Enter Your Mobile No." />
            </label>
          </div>
          <div class="two-cols">
            <label>
              Profile Pic:
              <input type="file" name="profilePic" accept=".doc,.docx,.pdf"/>
            </label>
            <label>
              LinkedIn Profile:
              <input type="text" name="linkedinLink" placeholder="Enter Link"/>
            </label>
          </div>
          <div class="two-cols">
            <label>
              GitHub Profile:
              <input type="text" name="githubLink" placeholder="Enter Link" />
            </label>
            <label>
              Resume:
              <input type="file" name="Date of birth" />
            </label>

          </div>
          <legend>Education Details</legend>
          <label htmlFor="typeOfSchool">Type (School/College):</label>
            <select name="typeOfSchool" >
              <option id="typeOfSchool">School</option>
              <option id="typeOfSchool">College</option>
            </select>
          <label>
            School/College Name:
            <input type="text" name="schoolName" placeholder="Enter Your School/College Name"/>
          </label>
          <div class="two-cols">
            <label>
              Start Data:
              <input type="date" name="eduStartDate" />
            </label>
            <label>
              End Date:
              <input type="date" name="eduEndDate" />
            </label>
          </div>
          <legend>Project Details</legend>
          <div class="two-cols">
            <label>
              Project Name:
              <input type="text" name="projectName" placeholder="Enter Your Project Name"/>
            </label>
            <label>
              Project Description <span className="text-xs">(max 200 words)</span> :
              <input type="email" name="projectDescription" placeholder="Enter Your Project Description"  />
            </label>
          </div>
          <div class="two-cols">
            <label>
            Solo Project / Group Project:
            <select name="typeOfProject" >
              <option id="typeOfProject">Solo</option>
              <option id="typeOfProject">Group</option>
            </select>
            </label>
          </div>
        </fieldset>
          

        <fieldset>
          <legend>Past Experienced</legend>
          <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
          <div class="two-cols">
            <label htmlFor="pastExperiencedType">
              Type (Internship/Job):
              <select name="pastExperiencedType">
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
              />
            </label>
          </div>
          <div class="two-cols">
            <label htmlFor="companyWebsiteLink">
              Company Website Link:
              <input
                type="text"
                name="companyWebsiteLink"
                placeholder="Enter Your Link"
              />
            </label>
            <label>
            Role:
              <input
                type="text"
                name="role"
                placeholder="Enter Your Role"
              />
            </label>
          </div>
          <div class="two-cols">
            <label htmlFor="expStartDate">
              Start Date:
              <input
                type="Date"
                name="expStartDate"
              />
            </label>
            <label htmlFor="expEndDate">
              End Date:
              <input
                type="date"
                name="expEndDate"
              />
            </label>
          </div>
          <label htmlFor="coverLetter">
              Cover Letter:
              <input
                type="file"
                name="coverLetter"
              />
            </label>
        </fieldset>
        <div class="btns">
          <button className="flex justify-center mx-auto bg-blue-500 text-white text-2xl py-2 px-4 mb-10 rounded-xl hover:scale-110 transition-scale duration-100">Submit</button>
        </div> 
      </form>
    </div>
  );
}

export default Profile;
