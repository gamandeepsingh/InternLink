import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from "../../assests/logo.png"
function Footer() {
  return (
    

<footer className=" rounded-lg shadow bg-blue-500 text-white font-mono m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-[90px]" alt="InternLink Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">InternLink</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 gap-4">
                <li>
                    <HashLink to="#about" className="hover:underline me-4 md:me-6">About</HashLink>
                </li>
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">© 2024 <Link to="#" className="hover:underline">InternLink™</Link>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer