import React from 'react'

import { Search, Menu } from 'lucide-react'

const adminNavbar = ({ onToggle}) => { 

  return (
    <div className='md:py-5 md:px-10 py-3 px-6'>
      <div className='flex justify-between items-center md:gap-5'>
        <div className='border flex justify-between  items-center md:p-4 p-3 bg-green-600 hover:bg-green-200 text-white hover:text-green-600 rounded-full transition-colors duration-300 ' onClick={onToggle}>
          <Menu size={20} />
        </div>
        <div className='border border-green-700 text-gray-500 flex justify-between md:w-80 lg:96 w-48 items-center md:px-5 md:py-3 py-1 px-3 rounded-full'>
          <p className='text-sm md:text-base font-sans truncate'>
            Search Keywords
          </p>
          <Search size={18} className='ml-2' />

        </div>
      </div>
    </div>
  )
}

export default adminNavbar