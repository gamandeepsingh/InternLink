import React, { useEffect, useState } from 'react'
import Hero from '../components/hero/Hero'
import JobLists from '../components/JobDetails/JobLists';
import About from '../components/about/About';
import Loader from '../components/loader/Loader';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import login from"../assests/login.jpg"
function Homepage() {

  return (
    <div className='w-screen flex flex-col items-center overflow-x-hidden'>
      <div className='w-fit justify-center min-h-[90vh] h-full '>
      <Hero/>
      </div>
      <div className='w-screen  min-h-[100vh] h-full flex justify-center items-center'>
        <About/>
      </div>
      <div className='w-screen  min-h-[100vh] h-full flex flex-col justify-center items-center'>
        <h1 id='job' className='text-center text-6xl text-blue-500 font-bold font-mono mb-4 mt-4'>Job Details</h1>
        <p>Login Please to see the Job Applications</p>
        <img src={login} alt="" />
      </div>
      <div className='w-screen overflow-x-hidden px-5'>
        <Contact/>
      </div>
      <div className='w-screen'>
      <Footer/>
      </div>
    </div>
  )
}

export default Homepage