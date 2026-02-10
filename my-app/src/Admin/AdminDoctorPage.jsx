import React from 'react'

import { Link } from 'react-router-dom'

const AdminDoctorPage = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-8'>
        <h1 className='font-bold font-serif text-2xl '>Doctors</h1>
        

        <Link to="/admin/add-doctor">
          <button className='w-40 h-14 bg-green-600 hover:bg-white font-sans hover:border hover:border-green-600 text-lg hover:text-green-500 text-gray-100 rounded-2xl'>Add Doctors</button>
        </Link>
      </div>

      <div></div>
    </div>
  )
}

export default AdminDoctorPage