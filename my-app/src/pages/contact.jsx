import React from 'react'
import { Link } from 'react-router-dom'

import { MapPin } from 'lucide-react'

import img3 from '../assets/img3.png'


const contact = () => {
  return (
    <div>
       <div className='relative h-120 mb-20'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
          </div>
      
            <div className='absolute bg-green-900/90  opacity-100 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4'>
              <h1 className='font-serif text-4xl font-bold text-white'>Contact Us</h1>
              <div className='flex gap-2 text-white font-sans'>
                <p><Link to="/">Home</Link></p>
                <span> - </span>
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          <div>
            <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center px-4 my-20 gap-5'>
              <h1 className='text-4xl font-serif font-bold'>
                We Are Connected All Time To Help Our Patients
              </h1>
              <p className='font-sans text-gray-500 mt-5'>
                If you have any questions or need assistance, please don't hesitate to reach out to us. Our dedicated team is here to provide you with the support and information you need.
              </p>
            </div>

            <div className='grid grid-cols-3 mx-auto max-w-7xl gap-10 my-20 px-4'>
              <div className='col-span-2 flex flex-col gap-5 justify-center shadow-lg p-10 border-t-4 border-green-600'>
                <h3 className='text-2xl font-serif font-bold '>Feel free to contact us for inquiry</h3>
                <form action="" className=''>
                <div className='grid grid-cols-2 gap-5 max-w-7xl'>
                  <input type="text" placeholder='Your Name' className='h-15 p-5 border border-gray-200'/>

                  <input type="text" placeholder='Your Subject' className='h-15 p-5 border border-gray-200'/>

                  <input type="email" placeholder='Email' className='h-15 p-5 border border-gray-200'/>

                  <input type="text" placeholder='Your Phone' className='h-15 p-5 border border-gray-200'/>
                </div>

                  <textarea name="message" id="" placeholder="Your Message" className='border border-gray-200 h-50 w-full mt-5'></textarea>
                  <button className='bg-green-600 text-white w-full px-5 py-2 mt-5'>Send Message</button>
                </form>
              </div>

              <div>
                <h4>Contact Information</h4>
                <div>
                  <div className='flex items-center gap-3 mt-5 text-gray-700'>
                  <div className='border hover:bg-green-600 text-green-600 hover:text-white p-5 flex justify-center items-center border-gray-200'>
                    <MapPin size={20} className='inline-block '/>
                  </div>
                  <div className='flex flex-col gap-3 justify-center items-start'>
                  <p className='font-sans font-bold text-sm'>Medical Adress</p>
                  <span>1234 Street Name, City, State, 12345</span>
                  </div>
                  </div>

                  <div className='flex items-center gap-3 mt-5 text-gray-700'>
                  <div className='border hover:bg-green-600 hover:text-white text-green-600 p-5 flex justify-center items-center border-gray-200'>
                    <MapPin size={20} className='inline-block'/>
                  </div>
                  <div className='flex flex-col gap-3 justify-center items-start'>
                  <p className='font-sans font-bold text-sm'>Opening Hour</p>
                  <span>1234 Street Name, City, State, 12345</span>
                  </div>
                  </div>

                  <div className='flex items-center gap-3 mt-5 text-gray-700'>
                  <div className='border p-5 flex justify-center items-center border-gray-200'>
                    <MapPin size={20} className='inline-block text-green-600'/>
                  </div>
                  <div className='flex flex-col gap-3 justify-center items-start'>
                  <p className='font-sans font-bold text-sm'>Opening Hour</p>
                  <span>1234 Street Name, City, State, 12345</span>
                  </div>
                  </div>

                  <div className='flex items-center gap-3 mt-5 text-gray-700'>
                  <div className='border p-5 flex justify-center items-center border-gray-200'>
                    <MapPin size={20} className='inline-block text-green-600'/>
                  </div>
                  <div className='flex flex-col gap-3 justify-center items-start'>
                  <p className='font-sans font-bold text-sm'>Opening Hour</p>
                  <span>1234 Street Name, City, State, 12345</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default contact