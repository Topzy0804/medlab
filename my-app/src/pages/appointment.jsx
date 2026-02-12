import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { createRows } from '../utils/db'
import { tablesDB, ID } from '../lib/appwrite'


import { Mail, PhoneCall, Stethoscope, Calendar, UserRound, Notebook, User, VenusAndMars } from 'lucide-react'

import img3 from '../assets/img3.png'


const appointment = () => {

  const [appointmentDetails, setAppointmentDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    department: "",
    doctor: "",
    appointmentDate: "",
    message: "",
    age: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!appointmentDetails.fullName || !appointmentDetails.email || !appointmentDetails.phoneNumber || !appointmentDetails.department || !appointmentDetails.doctor || !appointmentDetails.appointmentDate) {
      alert("Please fill in all required fields.");
      return;
    }

    try {

      const appointmentData = {
        fullName: appointmentDetails.fullName,
        email: appointmentDetails.email,
        phoneNumber: appointmentDetails.phoneNumber,
        department: appointmentDetails.department,
        doctor: appointmentDetails.doctor,
        $createdAt: appointmentDetails.appointmentDate,
        message: appointmentDetails.message,
        age: appointmentDetails.age,
        gender: appointmentDetails.gender
      }

      await tablesDB.createRow({
        databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
        tableId: import.meta.env.VITE_APPWRITE_APPOINTMENTS_TABLE_ID,
        rowId: ID.unique(),
        data: appointmentData
      })
      console.log("Appointment booked successfully!");
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  }
  return (
    <div>
       <div className='relative h-120 mb-20'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
          </div>
      
            <div className='absolute bg-green-900/90  opacity-100 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4'>
              <h1 className='font-serif text-4xl font-bold text-white'>Appointment</h1>
              <div className='flex gap-2 text-white font-sans'>
                <p><Link to="/">Home</Link></p>
                <span> - </span>
                <p>Appointment</p>
              </div>
            </div>
          </div>


          <div className='max-w-4xl mx-auto my-20 p-10 shadow-lg border-t-4 border-green-600 flex flex-col gap-10'>
            <div className='flex flex-col items-start jutsify-center'>
              <h1 className='font-serif text-3xl font-bold mb-4'>
                Book An Appointment
              </h1>
              <p className='font-sans '>
                please fill out the form below to book an appointment with our healthcare professionals.
              </p>
            </div>

            <div>
              <form action="submit" onSubmit={handleSubmit}>

              <div className='grid grid-cols-2 gap-6 items-start'>

                <div className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'>
                  <input 
                  type="text" 
                  placeholder='Full Name'
                  name='fullName'
                  onChange={handleChange}
                  value={appointmentDetails.fullName}
                  className='border-none w-full outline-none p-0 focus:ring-0 h-full text-lg'
                  />
                  <UserRound size={16} className="absolute right-3 text-gray-400" />
                </div>

                <div className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'>
                  <input 
                  type="text" 
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}
                  value={appointmentDetails.email}
                  className='border-none focus:ring-0 outline-none p-0 w-full h-full text-lg'
                  />
                  <Mail size={16} className="absolute right-3 text-gray-400" />
                </div>

                <div className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'>
                  <input 
                  type="number" 
                  placeholder='Age'
                  name='age'
                  onChange={handleChange}
                  value={appointmentDetails.age}
                  className='border-none focus:ring-0 outline-none p-0 w-full h-full text-lg'
                  />
                  <User size={16} className="absolute right-3 text-gray-400" />
                </div>

                <div className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'>
                  <input 
                  type="text" 
                  placeholder='Gender'
                  name='gender'
                  onChange={handleChange}
                  value={appointmentDetails.gender}
                  className='border-none focus:ring-0 outline-none p-0 w-full h-full text-lg'
                  />
                  <VenusAndMars size={16} className="absolute right-3 text-gray-400" />
                </div>
                
                <div className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'>
                  <input 
                  type="text" 
                  placeholder='Phone Number'
                  name='phoneNumber'
                  onChange={handleChange}
                  value={appointmentDetails.phoneNumber}
                  className='border-none w-full outline-none p-0 focus:ring-0 h-full text-lg'
                  />
                  <PhoneCall size={16} className="absolute right-3 text-gray-400" />
                </div>

                <div className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'>
                  <input 
                  type="text" 
                  placeholder='Department'
                  name='department'
                  onChange={handleChange}
                  value={appointmentDetails.department}
                  className='border-none outline-none p-0 w-full focus:ring-0 h-full text-lg'
                  />
                  <Notebook size={16} className="absolute right-3 text-gray-400" />
                </div>

                <div className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'>
                  <input 
                  type="text" 
                  placeholder='Doctor'
                  name='doctor'
                  onChange={handleChange}
                  value={appointmentDetails.doctor}
                  className='border-none w-full outline-none p-0 focus:ring-0 h-full text-lg'
                  />

                  <Stethoscope size={16} className="absolute right-3 text-gray-400" />
                </div>

                <div className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'>
                  <input 
                  type="date" 
                  placeholder='dd/mm/yyyy'
                  name='appointmentDate'
                  onChange={handleChange}
                  value={appointmentDetails.appointmentDate}
                  className='border-none w-full outline-none p-0 focus:ring-0 h-full text-lg'
                  />
                  {/* <Calendar size={16} className="absolute right-3 text-gray-400" /> */}
                </div>
              </div>

              <div className='flex flex-col item-start gap-6'>

              <div>
                <textarea 
                name="message" 
                id="" 
                placeholder='Your Message' 
                onChange={handleChange}
                value={appointmentDetails.message}
                className='w-full focus:ring-0 outline-none text-lg h-50 mt-6 border border-gray-300 px-2 py-1 text-gray-600'>
                </textarea>
              </div>

              <button type='submit' className='bg-green-600 text-white px-6 py-3 mt-6 font-sans font-bold hover:bg-green-700 transition duration-300 ease-in-out w-50 h-15'>
                Get Appointment
              </button>
              </div>

              </form>
            </div>
          </div>
    </div>
  )
}

export default appointment