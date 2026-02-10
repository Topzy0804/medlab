import React from 'react'
import { FileHeart, BetweenHorizontalStart, Ambulance, BriefcaseMedical } from 'lucide-react'


const adminDashboard = () => {
  return (
    <div>
      <div className='flex justify-start items-center p-5'>
      <h1 className='font-serif text-2xl'>
        Dashboard
      </h1>
    </div>

      <div className='grid grid-cols-6 gap-5 bg-green-50 p-5'>

        <div className='flex gap-3 bg-white p-5 rounded-lg'>
          <div>
             {/* <Wheelchair /> */}
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <p className='font-sans '></p>
            <p className='font-sans'>Patients</p>
          </div>
        </div>

         <div className='flex gap-3 bg-white p-5 rounded-lg'>
          <div>
             <FileHeart size={20}/>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <p className='font-sans '></p>
            <p className='font-sans'>Patients</p>
          </div>
        </div>

         <div className='flex gap-3 bg-white p-5 rounded-lg'>
          <div>
             <BetweenHorizontalStart size={20}/>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <p className='font-sans '></p>
            <p className='font-sans'>Patients</p>
          </div>
        </div>

         <div className='flex gap-3 bg-white p-5 rounded-lg'>
          <div>
             <Ambulance size={20}/>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <p className='font-sans '></p>
            <p className='font-sans'>Patients</p>
          </div>
        </div>

         <div className='flex gap-3 bg-white p-5 rounded-lg'>
          <div>
             <BriefcaseMedical size={20}/>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <p className='font-sans '></p>
            <p className='font-sans'>Patients</p>
          </div>
        </div>

         <div className='flex gap-3 bg-white p-5 rounded-lg'>
          <div>
             {/* <Saline size={20}/> */}
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <p className='font-sans '></p>
            <p className='font-sans'>Operation</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default adminDashboard