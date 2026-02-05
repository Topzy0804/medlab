import React from 'react'

import { Link } from 'react-router-dom'

import img3 from '../assets/img3.png'
import com1 from '../assets/testi1.jpg'

import { Quote } from 'lucide-react'

const testimonies = () => {
  return (
    <div>
       <div className='relative h-120 mb-20'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
          </div>
      
            <div className='absolute bg-green-900/90  opacity-100 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4'>
              <h1 className='font-serif text-4xl font-bold text-white'>Testimonies</h1>
              <div className='flex gap-2 text-white font-sans'>
                <p><Link to="/">Home</Link></p>
                <span> - </span>
                <p>Testimonies</p>
              </div>
            </div>
          </div>

          <div>
            <section className='bg-[#F9F9F9] pb-25'>
      <div className='my-30 px-4'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className="font-serif text-4xl max-w-2xl font-bold">What People Say</h1>
          <p className="font-sans text-sm max-w-2xl text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>

        <div className='max-w-7xl mx-auto mt-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='relative group'>
          <div className='flex flex-col gap-6 bg-white group-hover:bg-green-600 group-hover:text-white py-15 px-10 rounded-sm h-full justify-center items-center border border-gray-100'>
          <div className='text-green-600 group-hover:text-white'>
            <Quote size={30}/>
          </div>
            <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
          </div>
          <div className='flex flex-col gap-3 absolute top-52 left-35 justify-center items-center'>
            <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
            <h3 className='font-serif text-2xl text-green-800'>John Doe</h3>
            <p className='font-sans text-sm text-green-300'>Patient</p>
          </div>

          </div>

          <div className='relative group'>
          <div className='flex flex-col gap-6 bg-white group-hover:bg-green-600 group-hover:text-white p-10 rounded-sm h-full justify-center items-center border border-gray-100'>
            <div className='text-green-600 group-hover:text-white'>
            <Quote size={30}/>
            </div>
            <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
          </div>
          <div className='flex flex-col gap-3 absolute top-52 left-26 justify-center items-center'>
            <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
            <h3 className='font-serif text-2xl text-green-800'>Aphanso james</h3>
            <p className='font-sans text-sm text-green-300'>cancer Patient</p>
          </div>

          </div>

          <div className='relative group'>
          <div className='flex flex-col gap-6 bg-white group-hover:bg-green-600 group-hover:text-white p-10 rounded-sm h-full justify-center items-center border border-gray-100'>
            <div className='text-green-600 group-hover:text-white'>
            <Quote size={30}/>
            </div>
            <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
          </div>
          <div className='flex flex-col gap-3 absolute top-52 left-35 justify-center items-center'>
            <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
            <h3 className='font-serif text-2xl text-green-800'>John Doe</h3>
            <p className='font-sans text-sm text-green-300'>Patient</p>
          </div>

          </div>
        </div>
      </div>
    </section>
          </div>
    </div>
  )
}

export default testimonies