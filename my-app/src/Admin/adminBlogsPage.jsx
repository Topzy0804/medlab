import React from 'react'
import { Link } from 'react-router-dom'

const adminBlogsPage = () => {
  return (
    <div>
      <div>
        <div>
          <h1></h1>
        </div>

        <div>
          <Link to="/admin/add-blog">
           <button className='w-40 h-14 bg-green-600 hover:bg-white font-sans hover:border hover:border-green-600 text-lg hover:text-green-500 text-gray-100 rounded-2xl'>Add Blog</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default adminBlogsPage