import { Fullscreen } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const addDoctorPage = () => {

  const [doctorDetails, setDoctorDetails] = useState({

    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Department: "",
    Gender: "",
    facebookLink: "",
    instagramLink: "",
    LinkedIn: "",
    Twitter: ""
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setDoctorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));

  }


  return (
    <div>
    <div>
      <h1>Add Doctor</h1>
    </div>

    <div className='grid grid-cols-3 bg-green-50 min-h-screen '>

    <div className='col-span-2 p-8 bg-white min-h-screen shadow-sm border border-gray-200 rounded-xl '>
      <form action="submit">
        <div></div>
        <div>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input 
            type="text"
            placeholder='first name'
            name="FirstName"
            onChange={handleOnchange}
            value={doctorDetails.FirstName}
            className='border border-gray-300 text-gray-600 px-2 py-1 w-full h-15 flex items-center justify-between relative'
             />
          </div>
        </div>
      </form>
    </div>
    </div>


    </div>
  )
}

export default addDoctorPage