import React from 'react'
import { Link } from 'react-router-dom'

import { Facebook, Linkedin, Mail, Instagram } from 'lucide-react'

import imgReg from '../assets/img1.png'

const login = () => {

  return (
    <div>
    <div className='relative h-140 mb-20'>
      <div className='w-full h-full overflow-hidden'>
        <img src={imgReg} alt="Login Banner" className='w-full h-full object-cover'/>
      </div>

    <div className='bg-green-900/90 py-30 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
      <h1 className='text-white font-serif text-6xl py-4'>Log in</h1>
      <nav>
        <ul className='flex justify-center item-center gap-4 p-4 text-white'>
          <li>Home</li>
          -
          <li>Log in</li>
        </ul>
      </nav>
    </div>
    </div>

  
        <div className='shadow-lg p-6 m-10 border-t-4 border-green-600 mt-15 w-1/2 mx-auto'>
      <h2>Log in</h2>
      
      <div>
        <form action="submit" className='flex flex-col gap-4 px-10 py-10'>


        <div className='flex flex-col font-sans gap-3 justify-center items-start'>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Email' name="email" id="" className='px-2 w-full h-15 border border-gray-300'/>
        </div>


          <div className='flex flex-col font-sans gap-3 justify-center items-start'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' name="password" id="" className='px-2 w-full h-15 border border-gray-300'/>
          </div>

          <div className='flex gap-4'>
          <input type="checkbox" name="terms" id="" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <button type='submit' className='border border-gray-300 w-full h-15 bg-green-600 font-bold'>Log in</button>

        </form>
      </div>
      <p>or</p>
      <div className='grid grid-cols-2 gap-6 px-10 py-10'>
        <p className='flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-blue-400 p-5'><Facebook size={20}/> import from facebook</p>
        <p className='flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-red-700 p-5 '> <Mail size={20}/> import from google</p>
        <p className='flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-pink-400 p-5 '><Instagram size={20}/> import from instagram</p>
        <p className='flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-blue-700  p-5'><Linkedin size={20}/> import from linkedin</p>
      </div>
          <p>don't have an account? <Link to="/registration">Sign up</Link></p>
    </div>
      
    </div>
  )
}

export default login
