import { useState } from 'react'

import { createRows } from '../utils/db'
import { uploadFile } from '../utils/storage'

import DoctorList from './doctorList'

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const AddDoctorPage = () => {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  

  const [doctorDetails, setDoctorDetails] = useState({

    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Department: "",
    Gender: "",
    facebookLink: "",
    instagramLink: "",
    linkedInLink: "",
    twitterLink: "",
    bio: "",
    Image: ""
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setDoctorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
        setPreview(URL.createObjectURL(file));
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let imageUrl = doctorDetails.Image;

        if (image) 
          {

            const uploadImage = await uploadFile(import.meta.env.VITE_APPWRITE_BUCKET_ID, image);

            console.log(uploadImage);
          
            const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
            const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
            const bucketId = import.meta.env.VITE_APPWRITE_BUCKET_ID;
            const fileId = uploadImage.$id;

            imageUrl = `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/view?project=${projectId}`;
        }

        const doctorData = {
          ...doctorDetails, Image: imageUrl
        };

        await createRows(import.meta.env.VITE_APPWRITE_DOCTORS_TABLE_ID, doctorData);
        alert("Doctor added successfully");
      } catch (error) {
        console.error("Error adding doctor:", error);
      }
    };



  return (
    <div className='md:p-8 p-5 bg-green-50 min-h-screen '>
    <div className='mb-8 flex flex-col md:flex-row items-start justify-start md:items-center gap-3'>
      <h1 className='font-serif text-xl md:text-2xl font-bold'>Add Doctor</h1>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-12 bg-green-50 min-h-screen '>

    <div className='md:col-span-2 p-5 md:p-8 bg-white min-h-screen shadow-sm border border-green-200 '>
      <form action="submit" onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row items-start justify-between md:items-center'>
          <label htmlFor="image" className='text-md md:text-lg'>Upload Image</label>
          <input 
          type="file" 
          id="image" 
          name="Image" 
          onChange={handleImageChange}
          accept='image/*'
          className='border border-green-200 font-sans rounded-xl  px-2 py-2 w-32 md:w-48 bg-green-600 text-white  h-15 flex flex-col md:flex-row items-center justify-center md:text-lg text-md'
           />
        </div>

        {preview &&  (
          <div className='w-24 h-24 mt-4'>
            <img src={preview} alt="Preview" className='w-full h-full object-cover rounded-full' />
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-8 md:py-5 py-3 font-sans'>
          <div className='text-left gap-2'>
            <label htmlFor="FirstName" className='text-lg'>First Name</label>
            <input 
            type="text"
            placeholder='first name'
            name="FirstName"
            onChange={handleOnchange}
            value={doctorDetails.FirstName}
            className='border border-green-200 text-gray-600 w-full p-3 items-center justify-between relative'
             />
          </div>

          <div className='text-left flex flex-col gap-2'>
            <label htmlFor="LastName" className='text-lg'>Last Name</label>
            <input 
            type="text"
            placeholder='last name'
            name="LastName"
            onChange={handleOnchange}
            value={doctorDetails.LastName}
            className='border border-green-200 text-gray-600 w-full p-3 flex flex-col md:flex-row items-center justify-between relative'
             />
          </div>

          <div className='text-left flex flex-col gap-2'>
            <label htmlFor="Email" className='text-lg'>Email</label>
            <input 
            type="email"
            placeholder='email'
            name="Email"
            onChange={handleOnchange}
            value={doctorDetails.Email}
            className='border border-green-200 text-gray-600 w-full p-3 flex flex-col md:flex-row items-center justify-between relative'
             />
          </div>

          <div className='text-left flex flex-col gap-2'>
            <label htmlFor="PhoneNumber" className='text-lg'>Phone No.</label>
            <input 
            type="number"
            placeholder='phone number'
            name="PhoneNumber"
            onChange={handleOnchange}
            value={doctorDetails.PhoneNumber}
            className='border border-green-200 text-gray-600 w-full p-3 flex flex-col md:flex-row items-center justify-between relative'
             />
          </div>

          <div className='text-left flex flex-col gap-2'>
            <label htmlFor="Department" className='text-lg'>Department</label>
            <select 
            name="Department" 
            id=""
            onChange={handleOnchange}
            value={doctorDetails.Department}
            className='border border-green-200 text-gray-600 w-full p-3 flex flex-col md:flex-row items-center justify-between relative'
            >
              <option value="department">Department</option>
              <option value="General Physician">General Physician</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Eye care">Eye care</option>
            </select>
          </div>

           <div className='text-left flex flex-col gap-2'>
            <label htmlFor="Gender" className='text-lg'>Gender</label>
            <select 
            name="Gender" 
            id=""
            onChange={handleOnchange}
            value={doctorDetails.Gender}
            className='border border-green-200 text-gray-600 w-full p-3 flex flex-col md:flex-row items-center justify-between relative'
            >
              <option value="gender">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className='text-left flex flex-col gap-2 relative'>
            <label htmlFor="facebookLink" className='text-lg'>Facebook Link</label>
            <div className=' px-2 py-2 w-15 h-15 flex items-center justify-center absolute left-0 top-9 bg-gray-100'>
            <Facebook size={20} className=' text-green-400' />
            </div>
            <input
              type="text"
              placeholder='facebook link'
              name="facebookLink"
              onChange={handleOnchange}
              value={doctorDetails.facebookLink}
              className='border border-green-200 text-gray-600 pl-20 py-1 w-full p-3 flex items-center justify-between relative'
            />
          </div>

          <div className='text-left flex flex-col gap-2 relative'>
            <label htmlFor="instagramLink" className='text-lg'>Instagram</label>
            <div className=' px-2 py-2 w-15 h-15 flex items-center justify-center absolute left-0 top-9 bg-gray-100'>
            <Instagram size={20} className=' text-green-400' />
            </div>
            <input
              type="text"
              placeholder='instagram link'
              name="instagramLink"
              onChange={handleOnchange}
              value={doctorDetails.instagramLink}
              className='border border-green-200 text-gray-600 pl-20 py-1 w-full p-3 flex items-center justify-between relative'
            />
          </div>

          <div className='text-left flex flex-col gap-2 relative'>
            <label htmlFor="linkedInLink" className='text-lg'>LinkedIn</label>
            <div className=' px-2 py-2 w-15 h-15 flex items-center justify-center absolute left-0 top-9 bg-gray-100'>
            <Linkedin size={20} className=' text-green-400' />
            </div>
            <input
              type="text"
              placeholder='linkedInLink'
              name="linkedInLink"
              onChange={handleOnchange}
              value={doctorDetails.linkedInLink}
              className='border border-green-200 text-gray-600 pl-20 py-1 w-full p-3 flex items-center justify-between relative'
            />
          </div>

          <div className='text-left flex flex-col gap-2 relative'>
            <label htmlFor="twitterLink" className='text-lg'>Twitter</label>
            <div className=' px-2 py-2 w-15 h-15 flex items-center justify-center absolute left-0 top-9 bg-gray-100'>
            <Twitter size={20} className=' text-green-400' />
            </div>
            <input
              type="text"
              placeholder='twitter link'
              name="twitterLink"
              onChange={handleOnchange}
              value={doctorDetails.twitterLink}
              className='border border-green-200 text-gray-600 pl-20 py-1 w-full p-3 flex items-center justify-between relative'
            />
          </div>

          <div className='md:col-span-2 row-span-4 text-left flex flex-col gap-2'>
          <label htmlFor="bio" className=' text-lg'>Bio</label>
            <textarea 
            name="bio" 
            id="bio"
            value={doctorDetails.bio}
            onChange={handleOnchange}
            className='h-30 border border-gray-300 px-2 py-1 flex items-center justify-center text-left text-lg w-full '
            />
          </div>

          <div className='flex justify-start mt-6'>
            <button type="submit" className='md:w-48 w-full h-15 bg-green-600 text-lg font-sans rounded-md font-bold text-white'>Add Doctor</button>
          </div>

        </div>
      </form>
    </div>


    <div className='bg-white shadow-sm border border-green-200 p-8 min-h-screen '>
      <h1 className='text-2xl font-bold text-green-700 font-serif'>Doctor List</h1>

      <div className=''>
        <DoctorList />
      </div>
    </div>
    </div>


    </div>
  )
}

export default AddDoctorPage