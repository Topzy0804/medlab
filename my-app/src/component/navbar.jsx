import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Menu, X, ChevronDown } from 'lucide-react' // Using lucide-react for icons



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm shadow-gray-200 w-full font-serif">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20 md:h-24">

          

          {/* Logo */}

          <div className="flex-shrink-0">

            <h1 className='font-bold text-2xl md:text-4xl text-green-800'>

              <span className="bg-green-700 text-white p-1 rounded">+</span>Med<span className='text-black'>Lab</span>

            </h1>

          </div>



          {/* Desktop Navigation */}

          <div className='hidden lg:flex items-center space-x-8 font-sans'>

            <ul className='flex gap-8 cursor-pointer items-center'>

              <li className='hover:text-green-500 transition-colors py-4'><Link to="/">Home</Link></li>

              

              {/* Pages Dropdown */}

              <li className='group relative py-4 hover:text-green-500'>

                <div className='flex items-center gap-1 cursor-pointer'>

                  <Link to="/pages">Pages</Link>

                  <ChevronDown size={16} />

                </div>

                

                <ul className="absolute top-full left-0 w-48 bg-white shadow-xl border-t-2 border-green-500 

                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 py-2">

                  <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm"><Link to="/about-us">About Us</Link></li>

                  <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm"><Link to="/appointment">Appointment</Link></li>

                  <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm"><Link to="/time-table">Time Table</Link></li>

                  <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm"><Link to="/testimonies">Testimonials</Link></li>

                  <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm"><Link to="/project-details">Project Details</Link></li>

                  <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm"><Link to="/registration">Sign Up</Link></li>

                  <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm"><Link to="/login">Login</Link></li>

                </ul>

              </li>



              <li className='hover:text-green-500 py-4'><Link to="/service">Services</Link></li>

              <li className='hover:text-green-500 py-4'><Link to="/doctorPage">Doctors</Link></li>

              <li className='hover:text-green-500 py-4'><Link to="/blog">Blog</Link></li>

              <li className='hover:text-green-500 py-4'><Link to="/contact">Contact</Link></li>

            </ul>



            <Link to="/appointment">

              <button className='border border-green-600 p-2 px-6 rounded-2xl text-green-600 hover:bg-green-600 hover:text-white transition duration-300 font-sans'>

                Book Appointment

              </button>

            </Link>

          </div>



          {/* Mobile Button */}

          <div className="lg:hidden flex items-center">

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-green-600">

              {isOpen ? <X size={28} /> : <Menu size={28} />}

            </button>

          </div>

        </div>

      </div>



      {/* Mobile Menu Content */}

      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen border-b' : 'max-h-0 overflow-hidden'}`}>

        <div className="px-4 pt-2 pb-6 space-y-1 bg-white font-sans text-left">

          <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-green-500 hover:text-white rounded-md">Home</Link>

          

          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full text-left flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-green-500 hover:text-white rounded-md">

            Pages <ChevronDown size={16} />

          </button>

          

          {isDropdownOpen && (

            <div className="pl-6 space-y-1 text-left">

               <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm">

                <Link to="/about-us">About Us</Link></li>

                <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm">

                <Link to="/appointment">Appointment</Link></li>

                <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm">

                <Link to="/time-table">Time Table</Link></li>

                <li className="px-4 py-2 hover:bg-green-500 hover:text-white text-gray-600 text-sm">

                <Link to="/testimonies">Testimonials</Link></li>

               

                <li className="px-4 py-3 hover:bg-green-500 hover:text-white text-gray-600 text-sm">

                <Link to="/registration">Sign Up</Link></li>

                <li className="px-4 py-3 hover:bg-green-500 hover:text-white  text-gray-600 text-sm">

                <Link to="/login">Login</Link></li>

            </div>

          )}



          <Link to="/service" className="block px-3 py-2 text-gray-600 hover:bg-green-500 hover:text-white rounded-md">Services</Link>

          <Link to="/doctorPage" className="block px-3 py-2 text-gray-600 hover:bg-green-500 hover:text-white rounded-md">Doctors</Link>

          <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:bg-green-500 hover:text-white rounded-md">Blog</Link>

          <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-green-500 hover:text-white rounded-md">Contact</Link>

          

          <div className="pt-4 px-3">

            <Link to="/appointment">

              <button className="w-full bg-green-600 text-white p-3 rounded-lg font-bold">Book Appointment</button>

            </Link>

          </div>

        </div>

      </div>

    </nav>

  )

}



export default Navbar  