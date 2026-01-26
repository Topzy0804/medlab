import React from 'react'

const navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-lg shadow-green-200">
      <div>
        <h1 className='font-bold text-5xl text-green-500'>MedLab</h1>
      </div>
      <div>
        <nav>
          <ul className='flex gap-8 cursor-pointer'>
            <li className=' hover:text-green-500 hover:border-b-2 hover:border-green-500'>Pages</li>
            <li className=' hover:text-green-500 hover:border-b-2 hover:border-green-500'>Services</li>
            <li className=' hover:text-green-500 hover:border-b-2 hover:border-green-500'>Doctors</li>
            <li className=' hover:text-green-500 hover:border-b-2 hover:border-green-500'>Home</li>
            <li className=' hover:text-green-500 hover:border-b-2 hover:border-green-500'>Blog</li>
            <li className=' hover:text-green-500 hover:border-b-2 hover:border-green-500'>Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <button className='border border-green-600 p-2 rounded-2xl text-green-600 hover:bg-green-600 hover:text-white hover:transition duration-300 ease-in-out'>Book Appointment</button>
      </div>
    </div>
  )
}

export default navbar
