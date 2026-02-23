import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, User, Calendar, Stethoscope, ShoppingCart, FileText } from 'lucide-react'

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${isOpen ? 'w-72' : 'w-0 overflow-hidden'}`}>
      <div className='p-6 min-w-[288px]'> 
          <h1 className='font-bold text-4xl text-green-800'>
          <span className="bg-green-700 text-white p-1 rounded">+</span>Med<span className='text-black'>Lab</span>
        </h1>
      </div>

      <nav className='flex-1 min-w-[288px]'>
        <ul className='space-y-2 px-4'>
          <SidebarLink to="/admin/dashboard" icon={<LayoutDashboard size={22}/>} label="Dashboard" active />
          <SidebarLink to="/admin/appointments" icon={<Stethoscope size={22}/>} label="Appointment" />
          <SidebarLink to="/admin/doctors" icon={<User size={22}/>} label="Doctors" />
          <SidebarLink to="/admin/patients" icon={<User size={22}/>} label="Patients" />
          <SidebarLink to="/admin/blogs" icon={<FileText size={22}/>} label="Blogs" />
        </ul>
      </nav>
    </div>
  )
}

// Small helper component for cleaner links
const SidebarLink = ({ to, icon, label, active = false }) => (
  <li>
    <Link 
      to={to} 
      className={`flex gap-4 items-center px-4 py-3 rounded-lg text-lg font-medium transition-colors ${active ? 'text-green-600 bg-green-50' : 'text-gray-500 hover:text-green-600 hover:bg-gray-50'}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
)

export default Sidebar