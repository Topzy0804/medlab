import React from 'react'
import { Link } from 'react-router-dom'

import img3 from '../assets/img3.png'

const service = () => {
  return (
    <div>
    <div className='relative h-120 mb-20'>
    <div className='absolute top-0 left-0 w-full h-full'>
      <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
    </div>

      <div className='absolute bg-green-900/90  opacity-100 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4'>
        <h1 className='font-serif text-4xl font-bold text-white'>Services</h1>
        <div className='flex gap-2 text-white font-sans'>
          <p><Link to="/">Home</Link></p>
          <span> - </span>
          <p>Services</p>
        </div>
      </div>
    </div>

        <section>
          <div>
            <div className='flex justify-center items-center flex-col gap-3 max-w-4xl mx-auto text-center px-4 mb-20'>
              <h1 className='text-4xl font-serif font-bold'>
                Services offered to You with Professionalism and Care
              </h1>
              <p>
                These are the exceptional services we provide to ensure your health and well-being are prioritized. Our team of dedicated professionals is committed to delivering top-notch medical care with compassion and expertise.
              </p>

              <div className='grid grid-cols-3 gap-5'>

              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default service