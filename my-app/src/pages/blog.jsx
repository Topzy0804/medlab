import React from 'react'
import { Link } from 'react-router-dom'
import img3 from '../assets/img3.png'
import { Calendar, Clock } from 'lucide-react'
import BlogList from './blogList'
const Blog = () => {
  return (
    <div>
        <div className='relative h-120 mb-20'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
          </div>
      
            <div className='absolute bg-green-900/90  opacity-100 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4'>
              <h1 className='font-serif text-4xl font-bold text-white'>Blog</h1>
              <div className='flex gap-2 text-white font-sans'>
                <p><Link to="/">Home</Link></p>
                <span> - </span>
                <p>Blog</p>
              </div>
            </div>
          </div>

          <div className='px-10 py-20 bg-gray-50 rounded-xl shadow-sm max-w-7xl mx-auto mb-20'>

            <BlogList />
          </div>
    </div>
  )
}

export default Blog