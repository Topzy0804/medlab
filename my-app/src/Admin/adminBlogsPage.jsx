import React from 'react'
import { useState } from 'react'

import Modal from './modal'
import AddBlog from './addBlog'

import BlogDetails from './blogDetails'


const adminBlogsPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center p-10'>
        <div>
          <h1 className='font-bold font-serif text-2xl'>Blogs</h1>
        </div>

        <div>
          <button onClick={() => setIsModalOpen(true)} className='w-40 h-14 bg-green-600 hover:bg-white font-sans hover:border hover:border-green-600 text-lg hover:text-green-500 text-gray-100 rounded-2xl'>Add Blog</button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <AddBlog />
          </Modal>
        </div>
      </div>

      <div>
        <BlogDetails />
      </div>
    </div>
  )
}

export default adminBlogsPage