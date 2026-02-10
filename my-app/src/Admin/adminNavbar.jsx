import React from 'react'

import { Search, Menu } from 'lucide-react'

const adminNavbar = ({ onToggle}) => { 

  return (
    <div className='py-5 px-10 flex justify-between items-center '>
      <div className='flex justify-center items-center gap-5'>
        <div className='border flex justify-between  items-center p-4 bg-green-600 hover:bg-green-200 text-white hover:text-green-600 rounded-full transition-colors duration-300' onClick={onToggle}>
          <Menu size={20} />
        </div>
        <div className='border border-green-700 text-gray-500 flex justify-between w-100 items-center px-5 py-3 rounded-full'>
          <p>
            Search Keywords
          </p>
          <Search size={20} />

        </div>
      </div>
    </div>
  )
}

export default adminNavbar