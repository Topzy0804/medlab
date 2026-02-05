import React from 'react'
import { Link } from 'react-router-dom'

import img3 from '../assets/img3.png'
import AboutImg from '../assets/about.png'
import doctor1 from '../assets/doctor1.jpg'
import com1 from '../assets/testi1.jpg'



import { SquareCheckBig,Hotel, Stethoscope, Smile, Medal, Instagram, Linkedin, Twitter, Facebook, Quote } from 'lucide-react'


const aboutUs = () => {
  return (
    <div>
       <div className='relative h-120 mb-20'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src={img3} alt="Doctor Team" className='object-cover w-full h-full'/>
          </div>
      
            <div className='absolute bg-green-900/90  opacity-100 h-full w-full top-0 left-0 flex flex-col justify-center items-center gap-4'>
              <h1 className='font-serif text-4xl font-bold text-white'>About Us</h1>
              <div className='flex gap-2 text-white font-sans'>
                <p><Link to="/">Home</Link></p>
                <span> - </span>
                <p>About Us</p>
              </div>
            </div>
          </div>

           <section className=' bg-[#F9F9F9]'>
              <div className='grid grid-cols-2 px-15 py-25 max-w-7xl mx-auto gap-15'>
                <div>
                <img 
                src={AboutImg} 
                alt="" 
                className='w-full object-cover'
                />
          
                </div>
                <div className='flex flex-col gap-10'>
                  <p className='border h-7 w-17 text-white bg-green-400 font-sans text-sm flex justify-center items-center rounded-sm'>About</p>
                  <h2 className='font-serif text-left text-4xl'>Thousands of specialist for all your healthcare needs</h2>
                  <p className='font-sans text-left text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.</p>
                  <div>
                  <ul className='grid grid-cols-2 gap-4'>
                    <li className='flex gap-3 items-center'>
                      <SquareCheckBig className='text-green-300' size={20}/> Conduct Eye health checkup
                    </li>
                    <li className='flex gap-3 items-center'>
                      <SquareCheckBig className='text-green-300' size={20}/> Best lasic treatment
                    </li>
                    <li className='flex gap-3 items-center'>
                      <SquareCheckBig className='text-green-300' size={20}/> Treat minor illnesses 
                    </li>
                    <li className='flex gap-3 items-center'>
                      <SquareCheckBig className='text-green-300' size={20}/> Special Eye exams
                    </li>
                    <li className='flex gap-3 items-center'>
                      <SquareCheckBig className='text-green-300' size={20}/> Contact lens services
                    </li>
                    <li className='flex gap-3 items-center'>
                      <SquareCheckBig className='text-green-300' size={20}/> Special Retinal exams
                    </li>
                  </ul>
                  </div>
                  <p className='border bg-green-500 text-white font-sans text-sm h-10 w-40 justify-center items-center flex'>More About US</p>
                </div>
              </div>
              </section>

              <section className=' bg-green-800 mb-15'>
                  <div className='grid grid-cols-4 border border-green-800 py-30 px-25 max-w-7xl mx-auto gap-10'>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                      <Hotel size={20} className="text-green-600 border h-20 w-20 bg-white p-6"/>
                      <h4 className='font-serif text-3xl font-semibold text-white'>400</h4>
                      <p className='font-sans font-semibold text-white'>Hospital Rooms</p>
                    </div>
              
                    <div className='flex flex-col gap-3 justify-center items-center'>
                      <Stethoscope size={20} className="text-green-600 border h-20 w-20 bg-white p-6"/>
                      <h4 className='font-serif text-3xl font-semibold text-white'>150</h4>
                      <p className='font-sans font-semibold text-white'>Special Doctors</p>
                    </div>
              
                    <div className='flex flex-col gap-3 justify-center items-center'>
                      <Smile size={20} className="text-green-600 border h-20 w-20 bg-white p-6"/>
                      <h4 className='font-serif text-3xl font-semibold text-white'>600</h4>
                      <p className='font-sans font-semibold text-white'>Happy Patients</p>
                    </div>
              
                    <div className='flex flex-col gap-3 justify-center items-center'>
                      <Medal size={20} className="text-green-600 border h-20 w-20 bg-white p-6"/>
                      <h4 className='font-serif text-3xl font-semibold text-white'>20</h4>
                      <p className='font-sans font-semibold text-white'>Years of Experience</p>
                    </div>
                  </div>
                  </section>

                   <section>
                        <div className='max-w-7xl mx-auto py-25 px-4'>
                          <div className='flex flex-col gap-5 justify-center items-center'>
                            <h1 className='font-serif text-4xl font-bold'>Our Outstanding Team is Active To Help You</h1>
                            <p className='font-sans text-sm text-gray-400 max-w-2xl text-center'>There are many variation of the passage of the Lorem ipsium available, but the majority have suffered alteration in some form.</p>
                          </div>
                  
                          <div className='grid grid-cols-4 gap-10'>
                            <div className='group flex flex-col justify-center items-center gap-4 mt-10 border border-gray-100 bg-[#F9F9F9] transition-all pb-5'>
                            <div className='relative'>
                              <img src={doctor1} alt="" className='relative'/>
                              <div className='flex gap-2 px-14 py-5  bg-green-800 text-white absolute bottom-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all'>
                                <Facebook size={20} className=" mx-2"/>
                                <Twitter size={20} className="mx-2"/>
                                <Instagram size={20} className=" mx-2"/>
                                <Linkedin size={20} className=" mx-2"/>
                              </div>
                            </div>
                              <div className='flex flex-col gap-1'>
                              <p className='font-sans text-sm text-green-400'>Cardiologist</p>
                              <h3 className='font-serif text-2xl text-green-800'>Dr Janet Dan</h3>
                              </div>
                            </div>
                  
                            <div className='group flex flex-col justify-center items-center gap-4 mt-10 border border-gray-100 bg-[#F9F9F9] transition-all pb-5'>
                            <div className='relative'>
                              <img src={doctor1} alt="" className='relative'/>
                              <div className='flex gap-2 px-14 py-5  bg-green-800 text-white absolute bottom-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all'>
                                <Facebook size={20} className=" mx-2"/>
                                <Twitter size={20} className="mx-2"/>
                                <Instagram size={20} className=" mx-2"/>
                                <Linkedin size={20} className=" mx-2"/>
                              </div>
                            </div>
                              <div className='flex flex-col gap-1'>
                              <p className='font-sans text-sm text-green-400'>Cardiologist</p>
                              <h3 className='font-serif text-2xl text-green-800'>Dr Janet Dan</h3>
                              </div>
                            </div>
                  
                            <div className='group flex flex-col justify-center items-center gap-4 mt-10 border border-gray-100 bg-[#F9F9F9] transition-all pb-5'>
                            <div className='relative'>
                              <img src={doctor1} alt="" className='relative'/>
                              <div className='flex gap-2 px-14 py-5  bg-green-800 text-white absolute bottom-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all'>
                                <Facebook size={20} className=" mx-2"/>
                                <Twitter size={20} className="mx-2"/>
                                <Instagram size={20} className=" mx-2"/>
                                <Linkedin size={20} className=" mx-2"/>
                              </div>
                            </div>
                              <div className='flex flex-col gap-1'>
                              <p className='font-sans text-sm text-green-400'>Cardiologist</p>
                              <h3 className='font-serif text-2xl text-green-800'>Dr Janet Dan</h3>
                              </div>
                            </div>
                  
                            <div className='group flex flex-col justify-center items-center gap-4 mt-10 border border-gray-100 bg-[#F9F9F9] transition-all pb-5'>
                            <div className='relative'>
                              <img src={doctor1} alt="" className='relative'/>
                              <div className='flex gap-2 px-14 py-5  bg-green-800 text-white absolute bottom-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-200 ease-in-out'>
                                <Facebook size={20} className=" mx-2"/>
                                <Twitter size={20} className="mx-2"/>
                                <Instagram size={20} className=" mx-2"/>
                                <Linkedin size={20} className=" mx-2"/>
                              </div>
                            </div>
                              <div className='flex flex-col gap-1'>
                              <p className='font-sans text-sm text-green-400'>Cardiologist</p>
                              <h3 className='font-serif text-2xl text-green-800'>Dr Janet Dan</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                       <section className='bg-green-900 relative py-25'>
                       <h1 className="text-white opacity-10 font-serif absolute text-center text-7xl font-bold top-15 w-full">TESTIMONIES</h1>
                            <div className='mb-30  px-4'>
                              <div className='flex flex-col gap-4 justify-center items-center'>
                                <h1 className="font-serif text-4xl max-w-2xl font-bold text-white">What People Say</h1>
                                <p className="font-sans text-sm max-w-2xl text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                              </div>
                      
                              <div className='max-w-7xl mx-auto mt-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-10'>
                                <div className='relative group'>
                                <div className='flex flex-col gap-6 bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white py-15 px-10 rounded-sm h-full justify-center items-center border border-gray-50'>
                                <div className='text-white group-hover:text-green-300'>
                                  <Quote size={30}/>
                                </div>
                                  <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
                                </div>
                                <div className='flex flex-col gap-3 absolute top-52 left-35 justify-center items-center'>
                                  <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
                                  <h3 className='font-serif text-2xl text-white'>John Doe</h3>
                                  <p className='font-sans text-sm text-white'>Patient</p>
                                </div>
                      
                                </div>
                      
                                 <div className='relative group'>
                                <div className='flex flex-col gap-6 bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white py-15 px-10 rounded-sm h-full justify-center items-center border border-gray-50'>
                                <div className='text-white group-hover:text-green-300'>
                                  <Quote size={30}/>
                                </div>
                                  <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
                                </div>
                                <div className='flex flex-col gap-3 absolute top-52 left-35 justify-center items-center'>
                                  <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
                                  <h3 className='font-serif text-2xl text-white'>John Doe</h3>
                                  <p className='font-sans text-sm text-white'>Patient</p>
                                </div>
                      
                                </div>
                          
                      
                                 <div className='relative group'>
                                <div className='flex flex-col gap-6 bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white py-15 px-10 rounded-sm h-full justify-center items-center border border-gray-50'>
                                <div className='text-white group-hover:text-green-300'>
                                  <Quote size={30}/>
                                </div>
                                  <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
                                </div>
                                <div className='flex flex-col gap-3 absolute top-52 left-35 justify-center items-center'>
                                  <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
                                  <h3 className='font-serif text-2xl text-white'>John Doe</h3>
                                  <p className='font-sans text-sm text-white'>Patient</p>
                                </div>
                      
                                </div>
                              </div>
                            </div>
                          </section>
                      
          
    </div>
  )
}

export default aboutUs