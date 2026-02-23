import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { account, ID, tablesDB} from '../lib/appwrite'

import { Facebook, Linkedin, Mail, Instagram } from 'lucide-react'

import imgReg from '../assets/img1.png'

const registration = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  }



  const handleUserRegistration = async (e) => {
    e.preventDefault();

    if (userDetails.password !== userDetails.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!userDetails.fullName || !userDetails.email || !userDetails.phoneNumber || !userDetails.password) {
      alert("Please fill in all required fields.");
      return;
    }

    if (userDetails.password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d{11}$/.test(userDetails.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }


    try {
      const user = await account.create(
        ID.unique(),
        userDetails.email,
        userDetails.password,
        userDetails.fullName
      );

      const rowData = {
        fullName: userDetails.fullName,
        email: userDetails.email,
        phoneNumber: userDetails.phoneNumber
      };

      await tablesDB.createRow({
        databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
        tableId: import.meta.env.VITE_APPWRITE_USERS_TABLE_ID,
        rowId: ID.unique(),
        data: rowData
      })

      console.log("User registered successfully:", user);
      setUserDetails({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
      });

      navigate('/login');
    }
     catch (error) {
      console.error("Registration error:", error);
    }

  }

  return (
    <div>
    <div className='relative md:h-140 mb-20'>
      <div className='w-full h-full overflow-hidden'>
        <img src={imgReg} alt="Registration Banner" className='w-full h-full object-cover'/>
      </div>

    <div className='bg-green-900/90 py-30 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
      <h1 className='text-white font-serif text-6xl py-4'>Sign Up</h1>
      <nav>
        <ul className='flex justify-center item-center gap-4 p-4 text-white'>
          <li>Home</li>
          -
          <li>Sign up</li>
        </ul>
      </nav>
    </div>
    </div>

  
        <div className='shadow-lg md:p-6 p-3 md:m-10 m-3 mb-5 border-t-4 border-green-600 mt-15 md:w-1/2 md:mx-auto'>
      <h2>Sign Up</h2>
      
      <div>
        <form action="submit" className='flex flex-col gap-4 md:px-10 md:py-10 p-6' onSubmit={handleUserRegistration}>

        <div className='flex flex-col font-sans gap-3 justify-center items-start'>
        <label htmlFor="name">FullName</label>
        <input 
        type="text"  
        name='fullName' 
        onChange={handleChange}
        value={userDetails.fullName}
        className='px-2 w-full h-15 border border-gray-300'/>
        </div>
        
        <div className='flex flex-col font-sans gap-3 justify-center items-start'>
        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        placeholder='Email' 
        onChange={handleChange}
        name="email" 
        value={userDetails.email}
        className='px-2 w-full h-15 border border-gray-300'/>
        </div>

          <div className='flex flex-col gap-3 justify-center items-start'>
            <label htmlFor="role">Phone Number</label>
            <input 
            type='number' 
            id='role'
            name='phoneNumber'
            onChange={handleChange}
            value={userDetails.phoneNumber}
            placeholder='123456899' 
            className='px-2 w-full h-15 border border-gray-300'/>
          </div>

          <div className='flex flex-col font-sans gap-3 justify-center items-start'>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          placeholder='' 
          onChange={handleChange}
          value={userDetails.password}
          name="password" 
          id="" 
          className='px-2 w-full h-15 border border-gray-300'/>
          </div>

          <div className='flex flex-col font-sans gap-3 justify-center items-start'>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input 
            type="password" 
            placeholder='Confirm Password' 
            onChange={handleChange}
            value={userDetails.confirmPassword}
            name="confirmPassword" 
            id="" 
            className='px-2 w-full h-15 border border-gray-300'/>
          </div>

          <div className='flex gap-4'>
          <input type="checkbox" name="terms" id="" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <button 
          type='submit' 
          className='border border-gray-300 w-full h-15 bg-green-600 font-bold'>Sign Up</button>

        </form>
      </div>
      <p>or</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:px-10 md:py-10 p-6 text-justify-center items-center'>
        <p className='flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-blue-400 p-5'><Facebook size={20}/> import from facebook</p>
        <p className='flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-red-700 p-5 '> <Mail size={20}/> import from google</p>
        <p className='flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-pink-400 p-5 '><Instagram size={20}/> import from instagram</p>
        <p className='flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-blue-700  p-5'><Linkedin size={20}/> import from linkedin</p>
      </div>
          <p>Already have an account? <Link to="/login" className='text-green-500 hover:text-green-300'>Login</Link></p>
    </div>
      
    </div>
  )
}

export default registration
