import React from 'react'

import { Link } from 'react-router-dom'

import DoctorFullList from './doctorFullList'

const AdminDoctorPage = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center p-5 md:p-8'>
        <h1 className='font-bold font-serif text-2xl '>Doctors</h1>
        

        <Link to="/admin/add-doctor">
          <button className='w-40 h-14 bg-green-600 hover:bg-white font-sans hover:border hover:border-green-600 text-lg hover:text-green-500 text-gray-100 rounded-2xl'>Add Doctors</button>
        </Link>
      </div>

      <div>
        <DoctorFullList />
      </div>
    </div>
  )
}

export default AdminDoctorPage