import React, { useEffect, useState } from 'react'
import Hero from '../components/hero/Hero'
import JobLists from '../components/JobDetails/JobLists';
import About from '../components/about/About';
import Loader from '../components/loader/Loader';

function Homepage() {
 const [jobData, setJobData] = useState([])
 const [loading, setLoading] = useState(false)
 const [page,setPage] =useState(0)

 const url = `https://jobs-api14.p.rapidapi.com/list?query=developer&location=india&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=${page}`;
 const options = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Key': '6006852822mshd20bfa0a121c1eep1dde28jsna8a0d305960d',
     'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
   }
 };
 
 
 
 
async function callApi(){
  setLoading(true)
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if(result && result.jobs.length>0){
      setJobData(result.jobs)
      console.log(jobData);
    }
    setLoading(false)
  } catch (error) {
    console.error(error);
    setLoading(false)
  }
}

useEffect(()=>{
  callApi()  
  console.log(jobData);
},[])

if(loading){
  return <Loader/>
}
  return (
    <div className='w-screen flex flex-col items-center overflow-x-hidden'>
      <div className='w-fit justify-center min-h-[90vh] h-full'>
      <Hero/>
      </div>
      <div className='w-screen  min-h-[100vh] h-full flex justify-center items-center'>
        <About/>
      </div>
      <div className='w-screen  min-h-[100vh] h-full flex flex-col justify-center items-center'>
        <h1 id='job' className='text-center text-6xl text-blue-500 font-bold font-mono mb-4 mt-4'>Job Details</h1>
        <JobLists data={jobData}/>
      </div>
    </div>
  )
}

export default Homepage