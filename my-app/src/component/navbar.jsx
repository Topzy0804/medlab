import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50  px-60 bg-white shadow-sm shadow-gray-200 w-full font-serif">
      <div>
        <h1 className='font-bold text-4xl text-green-800'>
          <span className="bg-green-700 text-white p-1 rounded">+</span>Med<span className='text-black'>Lab</span>
        </h1>
      </div>

      <div className='font-sans'>
        <nav>
          <ul className='flex gap-8 cursor-pointer items-center'>
            <li className='hover:text-green-500 hover:border-b-3 py-11  hover:border-green-500'>
            <Link to="/">Home</Link></li>

            <li className='group relative py-11 hover:text-green-500 hover:border-b-3 hover:border-green-500'>
              <span className=''>
              <Link to="/pages">Pages</Link></span>
              
              <ul className="absolute top-full flex flex-col gap-3 text-left left-0 mt-4 w-48 bg-white shadow-xl border-t-2 border-green-500 
               opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 py-2">
                <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm">
                <Link to="/about-us">About Us</Link></li>
                <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm">
                <Link to="/appointment">Appointment</Link></li>
                <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm">
                <Link to="/time-table">Time Table</Link></li>
                <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm">
                <Link to="/testimonies">Testimonials</Link></li>
                <li className="px-4 py-3 hover:bg-green-500 hover:text-white text-gray-600 text-sm">
                <Link to="/project-details">Project Details</Link></li>
                <li className="px-4 py-3 hover:bg-green-500 hover:text-white text-gray-600 text-sm">
                <Link to="/registration">Sign Up</Link></li>
                <li className="px-4 py-3 hover:bg-green-500 hover:text-white  text-gray-600 text-sm">
                <Link to="/login">Login</Link></li>
              </ul>
            </li>

            <li className='hover:text-green-500 hover:border-b-3 py-11 hover:border-green-500'>
            <Link to="/service">Services</Link></li>
            <li className='hover:text-green-500 hover:border-b-3 py-11 hover:border-green-500'>
            <Link to="/doctorPage">Doctors</Link></li>
            <li className='hover:text-green-500 hover:border-b-3 py-11 hover:border-green-500'>
            <Link to="/blog">Blog</Link></li>
            <li className='hover:text-green-500 hover:border-b-3 py-11 hover:border-green-500'>
            <Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div>
        <button className='border hover:border-white border-green-600 p-2 px-4 rounded-2xl text-green-600 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out font-sans'>
        <Link to="/appointment"> Book Appointment </Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar