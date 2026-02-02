import React from 'react'

const aboutUs = () => {
  return (
    <div>
       <div className='relative h-140 mb-20'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
          </div>
      
            <div className='absolute bg-green-900/90  opacity-100 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4'>
              <h1 className='font-serif text-4xl font-bold text-white'>About Us</h1>
              <div className='flex gap-2 text-white font-sans'>
                <p>Home</p>
                <span> - </span>
                <p>About Us</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default aboutUs