import React from 'react'
import { Link } from 'react-router-dom'
import img3 from '../assets/img3.png'
import { Calendar, Clock } from 'lucide-react'
import BlogList from './blogList'

const Blog = () => {
  return (
    <div className="overflow-x-hidden">
        {/* Hero Section: Height scales from 300px on mobile to 480px on desktop */}
        <div className='relative h-[300px] md:h-120 mb-10 md:mb-20'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img 
              src={img3} 
              alt="Doctor Team" 
              className='object-cover w-full h-full'
            />
          </div>
      
          <div className='absolute bg-green-900/90 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4 px-4 text-center'>
            <h1 className='font-serif text-3xl md:text-5xl font-bold text-white'>Blog</h1>
            <div className='flex gap-2 text-white font-sans text-sm md:text-base'>
              <p className="hover:text-green-300 transition-colors"><Link to="/">Home</Link></p>
              <span> - </span>
              <p className="text-green-200">Blog</p>
            </div>
          </div>
        </div>

        {/* Blog Content Container: Padding scales with screen size */}
        <div className='px-4 sm:px-6 md:px-10 py-10 md:py-20 bg-gray-50 rounded-none md:rounded-xl shadow-sm max-w-7xl mx-auto mb-20'>
          <BlogList />
        </div>
    </div>
  )
}

export default Blog