import React from 'react'

function JobCard({data}) {
  return (
    <div className='w-[320px] h-[530px] max-md:h-full p-4 flex flex-col justify-between items-start gap-3 m-5 border-2 border-blue-500 group rounded-xl'>
        <div className='w-[150px] h-[100px] flex justify-center group-hover:scale-125 transition-scale duration-100 mx-auto'>
            <img src={data.image} className='w-[100px]  mt-3' alt="" />
        </div>
        <h1 className='text-2xl font-bold '>{data.company}</h1>
        <p><span className='text-black font-semibold'>Description:</span> {data.description.slice(0,120)}...</p>
        <p><span className='text-black font-semibold'>Role:</span> {data.title}</p>
        <p><span className='text-black font-semibold'>Location:</span> {data.location}</p>
        <p><span className='text-black font-semibold'>Type:</span> {data.employmentType}</p>
        <p><span className='text-black font-semibold'>Posted Date:</span> {data.datePosted}</p>
        <button className='w-full py-3 text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 relative hover:text-white text-xl transition-all duration-200 ease-in group'>Apply<span className='text-xs absolute -top-4 right-4 group-hover:text-blue-500'>50 Coin required</span></button>
    </div>
  )
}

export default JobCard