import React from 'react'
import { Link } from 'react-router-dom'

import UserDoctorList from './userDoctorList'

import img3 from '../assets/img3.png'

const doctorPage = () => {
  return (
    <div className='min-h-screen'>
    <div className='relative h-120 mb-20'>
    <div className='absolute top-0 left-0 w-full h-full'>
      <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
    </div>

      <div className='absolute bg-green-900/90  opacity-100 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4'>
        <h1 className='font-serif text-4xl font-bold text-white'>Doctors</h1>
        <div className='flex gap-2 text-white font-sans'>
          <p><Link to="/">Home</Link></p>
          <span> - </span>
          <p>Doctors</p>
        </div>
      </div>
    </div>

        <section className=''>
          <div>
            <div className='flex justify-center items-center flex-col gap-6 max-w-7xl mx-auto text-center px-4 mb-20'>
              <h1 className='text-4xl font-serif font-bold'>
                Our Outstanding Team is available 24/7 to Provide You with the Best Medical Care
              </h1>
              <p>
                Our dedicated team of healthcare professionals is committed to delivering exceptional medical care around the clock. With a focus on patient well-being and cutting-edge treatments, we ensure that you receive the highest quality care whenever you need it.
              </p>

              <div className='w-full mt-15'>
                <UserDoctorList />

              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default doctorPage