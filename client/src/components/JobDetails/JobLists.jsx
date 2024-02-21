import React from 'react'
import JobCard from './JobCard'

function JobLists({data}) {
  return (
    <div className='w-screen max-w-[1080px] flex flex-wrap justify-center items-center'>
        {
            data.map((item,index)=>{
                return (
                    <JobCard key={index} data={item}></JobCard>
                )
            })
        }
    </div>
  )
}

export default JobLists