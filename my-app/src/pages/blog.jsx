import React from 'react'
import { Link } from 'react-router-dom'
import img3 from '../assets/img3.png'
import { Calendar, Clock } from 'lucide-react'
import BlogList from './blogList'

import imgReg from '../assets/img1.png';


const Blog = () => {
  return (
    <div className="overflow-x-hidden">
        <div className="relative md:h-140 mb-20">
                <div className="w-full h-full overflow-hidden">
                  <img src={imgReg} alt="Login Banner" className="w-full h-full object-cover" />
                </div>
        
                <div className="bg-green-900/90 py-30 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                  <h1 className="text-white font-serif text-6xl py-4">Blog</h1>
                  <nav>
                    <ul className="flex justify-center items-center gap-4 p-4 text-white">
                    <Link to="/">Home</Link>
                      
                      -
                      <li>Blog</li>
                    </ul>
                  </nav>
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