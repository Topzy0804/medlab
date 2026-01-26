import React from 'react'

const registration = () => {
  return (
    <div>
    <div className='bg-green-700 py-30'>
      <h1 className='text-white text-6xl py-4'>Registration</h1>
      <nav>
        <ul className='flex justify-center item-center gap-4 p-4 text-white'>
          <li>Home</li>
          >
          <li>Register</li>
        </ul>
      </nav>
    </div>

    <div className='shadow-lg p-6 m-10 border-t-4 border-green-600 mt-15 w-1/2 mx-auto'>
      <h2>Registration</h2>
      <div className='grid grid-cols-2 gap-6 px-10 py-10'>
        <p className='border border-gray-300 hover:bg-blue-400 p-5 '>import from facebook</p>
        <p className='border border-gray-300 hover:bg-red-700 p-5 '>import from google plus</p>
        <p className='border border-gray-300 hover:bg-pink-400 p-5 '>import from instagram</p>
        <p className='border border-gray-300 hover:bg-blue-700  p-5'>import from linkedin</p>
      </div>
      <p>or</p>
      <div>
        <form action="submit" className='flex flex-col gap-4 px-10 py-10'>
          <input type="text" placeholder='Name' name='Name' className='px-2 w-full h-15 border border-gray-300'/>
          <input type="email" placeholder='Email' name="email" id="" className='px-2 w-full h-15 border border-gray-300'/>
          <input type="password" placeholder='Password' name="password" id="" className='px-2 w-full h-15 border border-gray-300'/>
          <input type="password" placeholder='Confirm Password' name="confirm-password" id="" className='px-2 w-full h-15 border border-gray-300'/>
          <div className='flex gap-4'>
          <input type="checkbox" name="terms" id="" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <button type='submit' className='border border-gray-300 w-full h-15 bg-green-600 font-bold'>Register</button>

          <p>already have an account? Login</p>
        </form>
      </div>
    </div>
      
    </div>
  )
}

export default registration
