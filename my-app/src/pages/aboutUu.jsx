import React from 'react'
import { Link } from 'react-router-dom'
import { SquareCheckBig, Hotel, Stethoscope, Smile, Medal, Quote } from 'lucide-react'

import img3 from '../assets/img3.png'
import AboutImg from '../assets/about.png'
import com1 from '../assets/testi1.jpg'
import UserDoctorList from './userDoctorList';

const AboutUs = () => {
  return (
    <div className="overflow-x-hidden">
      <div className='relative h-[300px] md:h-120 mb-10 md:mb-20'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
        </div>
        <div className='absolute bg-green-900/90 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4 px-4'>
          <h1 className='font-serif text-3xl md:text-5xl font-bold text-white text-center'>About Us</h1>
          <div className='flex gap-2 text-white font-sans text-sm md:text-base'>
            <Link to="/" className="hover:text-green-400">Home</Link>
            <span> - </span>
            <p>About Us</p>
          </div>
        </div>
      </div>

      <section className='bg-[#F9F9F9]'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-6 py-12 md:px-15 md:py-25 max-w-7xl mx-auto gap-10 md:gap-15 items-center'>
          <div className='order-2 md:order-1'>
            <img src={AboutImg} alt="Clinic" className='w-full object-cover rounded-lg shadow-md'/>
          </div>
          
          <div className='flex flex-col gap-6 md:gap-8 order-1 md:order-2'>
            <p className='inline-block w-fit px-4 py-1 text-white bg-green-400 font-sans text-xs font-bold rounded-sm uppercase tracking-wider'>
              About
            </p>
            <h2 className='font-serif text-2xl md:text-4xl leading-tight'>
              Thousands of specialists for all your healthcare needs
            </h2>
            <p className='font-sans text-gray-500 text-sm md:text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4'>
              {[
                "Conduct Eye health checkup", "Best lasic treatment", 
                "Treat minor illnesses", "Special Eye exams",
                "Contact lens services", "Special Retinal exams"
              ].map((item, index) => (
                <li key={index} className='flex gap-3 items-center text-sm md:text-base'>
                  <SquareCheckBig className='text-green-500 shrink-0' size={18}/> {item}
                </li>
              ))}
            </ul>
            
            <button className='bg-green-500 text-white font-sans text-sm font-bold h-12 w-44 hover:bg-green-600 transition-colors'>
              More About US
            </button>
          </div>
        </div>
      </section>

      <section className='bg-green-800 py-12 md:py-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-8 px-6'>
          {[
            { icon: <Hotel />, count: "400", label: "Hospital Rooms" },
            { icon: <Stethoscope />, count: "150", label: "Special Doctors" },
            { icon: <Smile />, count: "600", label: "Happy Patients" },
            { icon: <Medal />, count: "20", label: "Years Experience" }
          ].map((stat, i) => (
            <div key={i} className='flex flex-col gap-3 justify-center items-center text-center'>
              <div className="text-green-600 bg-white p-4 md:p-6 rounded-sm shadow-sm">
                {React.cloneElement(stat.icon, { size: 28 })}
              </div>
              <h4 className='font-serif text-2xl md:text-3xl font-semibold text-white'>{stat.count}</h4>
              <p className='font-sans text-xs md:text-sm font-medium text-green-100 uppercase tracking-wide'>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='py-16 md:py-25'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='font-serif text-3xl md:text-4xl font-bold mb-4'>Our Outstanding Team</h2>
          <p className='font-sans text-sm text-gray-400 max-w-2xl mx-auto mb-12'>
            There are many variations of the passage of the Lorem Ipsum available, but the majority have suffered alteration.
          </p>
          <UserDoctorList />
        </div>
      </section>

      <section className='bg-green-900 relative py-20 md:py-25 overflow-hidden'>
        <h1 className="text-white opacity-5 font-serif absolute text-center text-5xl md:text-8xl font-bold top-10 w-full pointer-events-none">
          TESTIMONIES
        </h1>
        
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center mb-16 md:mb-20'>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">What People Say</h2>
            <p className="font-sans text-sm text-green-100 max-w-xl mx-auto">
              Real stories from our patients who have experienced our professional healthcare services.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10'>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className='relative group pt-10'>
                <div className='flex flex-col gap-6 bg-green-800 group-hover:bg-white transition-all duration-300 group-hover:text-green-900 text-white py-12 px-8 rounded-lg border border-green-700/50 shadow-xl'>
                  <Quote size={40} className="text-green-400/30 group-hover:text-green-500 mx-auto" />
                  <p className="text-center italic text-sm md:text-base leading-relaxed">
                    "It's amazing how much easier it has been to meet new people and connect with others who share my interests."
                  </p>
                </div>
                
                <div className='absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center w-full'>
                  <img 
                    src={com1} 
                    alt="Patient" 
                    className='rounded-full w-16 h-16 md:w-20 md:h-20 object-cover border-4 border-green-900 group-hover:border-green-600 transition-all shadow-lg'
                  />
                  <div className="text-center mt-2">
                    <h3 className='font-serif text-lg md:text-xl text-white'>John Doe</h3>
                    <p className='font-sans text-xs text-green-300 uppercase'>Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs