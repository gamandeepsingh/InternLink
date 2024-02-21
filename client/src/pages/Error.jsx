import React from 'react'
import error from "../assests/error404.jpg"
function Error() {
  return (
    <div className='w-screen flex justify-center'>
      <img src={error} alt="" />
    </div>
  )
}

export default Error