import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { User, Users, Mail, SquareCheckBig, Building2, NotebookTabs, Ambulance, Microscope, Hand, Hotel, Smile, Medal, PhoneCall, Heart, Syringe, BriefcaseMedical, Activity, Stethoscope, House, Quote, Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import AboutImg from '../assets/about.png'
import image from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import gallery1 from '../assets/pf1.jpg'
import gallery2 from '../assets/pf2.jpg'
import gallery3 from '../assets/pf3.jpg'
import gallery4 from '../assets/pf4.jpg'
import gallery5 from '../assets/pf5.jpg'
import gallery6 from '../assets/pf6.jpg'
import com1 from '../assets/testi1.jpg'
import doctor1 from '../assets/doctor1.jpg'
import comment from '../assets/comment1.jpg'
import blog1 from '../assets/blog1.jpg'
import blog3 from '../assets/blog3.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const home = () => {
  const slides = [
    { title: "Superior solulotion that help you live healthier",
      img: img1,
    },

    {
      title: "Find a doctor and book appointment",
      img: img2,
    },

    {
      title: "We only give the best care",
      img: img3,
    }

  ];

  const deptData = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: <Heart size={20} className="text-green-500" />,
      title: 'Cardiology',
      image: image,
      points: ["Heart Checkup, ECG, Stress Test", "Echocardiography", "Cardiac Catheterization"]
    },

    {
      id: 'stomatology',
      name: 'Stomatology',
      icon: <Syringe size={20} className="text-green-500" />,
      title: 'Stomatology',
      image: image2,
      points: ["Modern Dental Care, Teeth Cleaning, Fillings, Root Canals", "Orthodontics, Braces, Invisalign", "Cosmetic Dentistry, Veneers, Whitening"]
    },

    {
      id: 'radiology',
      name: 'Radiology',
      icon: <BriefcaseMedical size={20} className="text-green-500" />,
      title: 'Radiology',
      image: image3,
      points: ["High Resolultion imaging", "X-rays, MRI, CT Scans", "Ultrasound, Mammography"]
    },

    {
      id: 'Neurology',
      name: 'Neurology',
      icon: <Activity size={20} className="text-green-500" />,
      title: 'Neurology',
      image: image4,
      points: ["Brain and Nervous System Care, EEG, EMG", "Stroke Management", "Neurodegenerative Disease Treatment"]
    },

    {
      id: 'Opthalmology',
      name: 'Opthalmology',
      icon: <Stethoscope size={20} className="text-green-500" />,
      title: 'Opthalmology',
      image: image5,
      points: ["Eye Exams, Vision Testing", "Cataract Surgery", "Glaucoma Treatment"]
    }

  ];

  const getGallery = [

    {
      id: 1,
      category: 'Cardiology',
      image: gallery4,
    },

    {
      id: 2,
      category: 'Diabetes',
      image: gallery1,
    },

    {
      id: 3,
      category: 'Diabetes',
      image: gallery2,
    },

    {
      id: 4,
      category: 'Pediatrics',
      image: gallery3,
    },

    {
      id: 5,
      category: 'Pediatrics',
      image: gallery5,
    },

    {
      id: 6,
      category: 'Neurosurgery',
      image: gallery6,
    }
  ];

  const [filter, setFilter] = useState('All');
  

  const filterImages = filter === 'All' ? getGallery : getGallery.filter(img => img.category === filter);

  const [activeDept, setActiveDept] = useState(deptData[0]);

  return (
    <div>
    <section className='bg-[#F9F9F9] w-full'>
      <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop={true}
      className='mySwiper h-[500px] md:h-[600px]'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
          <div className='max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center px-1 gap-5'>
            <div className='space-y-6 z-10'>
              <h1 className='font-serif text-left text-4xl md:text-5xl font-bold text-[#000000] leading-tight'>{slide.title}</h1>
              <p className='font-sans text-left text-grey-500 max-w-md'>
                since the first days of our practice, we have been dedicated to providing good heallthcare
              </p>
              <div className='flex gap-4'>
                <button className='bg-[#064e3b] text-white px-8 py-3 rounded-sm font-semibold hover:bg-black transition-all'>Book Appointment</button>
                <button className='bg-[#a3e635] text-[#064e3b] px-8 py-3 rounded-sm font-semibold hover:bg-[#84cc16] transition all'>About us</button>
              </div>
            </div>

            <div className='hidden md:flex justify-end h-full items-end'>
              <img 
              src={slide.img}
              alt=""
              className='h-[130%] object-contain'
               />
            </div>

          </div>

          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>

    <section className=''>
    <div className='p-25'>

    <div className='flex flex-col justify-start items-start max-w-7xl mx-auto my-5 px-6 md:px-0 space-y-6'>
      <h1 className='font-serif text-3xl md:text-4xl font-bold text-[#060707]'>
        Book An Appointment
      </h1>
      <p className='font-sans text-left text-grey-500 max-w-2xl text-xs md:text-sm'>
        please feel welcome to contact us to book an appointment with one of our healthcare professionals. our doctors will be happy to assist you and provide the care you need.
      </p>
    </div>
      <div>
        <form action="submit" className='flex gap-7 justify-center items-center mx-auto max-w-7xl py-7'>
        <div className='relative flex-1'>
          <input
           type="text" 
           placeholder='Full Name' 
           className='font-sans text-xs p-4 w-full h-12 border border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600'/>
           <User className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400'
            size={15}
           />
        </div>

        <div className='relative flex-1'>
          <input
           type="text" 
           placeholder='Email Address' 
           className='font-sans text-xs p-4 w-full h-12 border border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600'/>
           <Mail className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400'
            size={15}
           />
        </div>

        <div className='relative flex-1'>
          <input
           type="tel" 
           placeholder='Phone Number' 
           className='font-sans text-xs p-4 w-full h-12 border border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600'/>
           <PhoneCall className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400'
            size={15}
           />
        </div>

        <div className='flex-1'>

          <button className='font-sans p-4 w-full h-12 border bg-green-600 text-white text-xs'>Get Appointment</button>
        </div>
        
        
        </form>
      </div>
    </div>
      
    </section>

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

    <section className='py-25'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <h1 className='font-serif text-4xl '>
          Specialties Available at MedLab
        </h1>
        <p className='font-sans max-w-3xl'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
      </div>
      <div className='max-w-7xl mx-auto py-20 px-4'>
      <div className='flex flex-wrap border-b border-gray-100 bg-[#f8f9fa] '>
      {deptData.map((dept) => (
        <button
          key={dept.id}
          onClick={() => setActiveDept(dept)}
          className={`flex items-center gap-2 px-6 py-4 text-sm font-sans transition-all border-r border-gray-100 flex-1 ${activeDept.id === dept.id ? 'bg-white font-semibold text-green-600' : 'text-gray-600 hover:bg-white hover:text-green-600'}`}
        >
        <div className={`p-2 rounded-full ${activeDept.id === dept.id ? 'bg-green-600' : 'bg-transparent'}`}>
          {dept.icon}
        </div>
        <span className='font-semibold text-sm'>{dept.name}</span>

        </button>
      ))}

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center'>
        <div className='h-[600px] overflow-hidden rounded-sm'>
          <img 
          src={activeDept.image} 
          alt="" 
          className='w-full h-full object-cover animate-fade-In'
          key={activeDept.id}
          />
        </div>

        <div className='space-y-6 flex flex-col justify-start items-start gap-5'>
          <h2 className='font-serif text-3xl font-bold text-[#060707]'>{activeDept.title}</h2>

          <div className='space-y-3'>
            {activeDept.points.map((point, index) => (
              <div key={index} className='flex gap-3 items-start'>
                <SquareCheckBig className='text-green-500 mt-1' size={20}/>{point}
              </div>
            ))}
          </div>
          <p className='text-gray-400 leading-relaxed text-sm text-left'>
            for those of you who want to know more about our department and services, please feel free to contact us. our team of healthcare professionals is here to assist you with any questions or concerns you may have.
          </p>
          <p className='text-gray-400 leading-relaxed text-sm text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo nunc. Vivamus lacinia massa nec sem sagittis.
          </p>
          <button className='bg-green-600 text-white px-6 py-3 rounded-sm font-semibold hover:bg-white hover:text-green-600 transition-all'>View Specialties</button>
      </div>

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
      <div className='my-30'>
        <div className='m-20'>
          <h1 className='font-serif text-4xl text-center'>
            Services Provided by MedLab
          </h1>
          <p className='font-sans text-center max-w-3xl mx-auto mt-4 text-gray-500'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className='grid grid-cols-3 border-none max-w-7xl mx-auto px-10 py-10'>

        <div className='group flex flex-col justify-start items-start gap-10 p-10 border border-gray-100 bg-[#f9f9f9] hover:bg-green-600 transition-all duration-300 ease-in-out hover:text-white'>
        <span className='border group-hover:bg-white group-hover:text-green-600 border-green-600 bg-green-600 p-5 text-white'>
        <Ambulance size={35} />
        </span>
          <h2 className='font-serif text-2xl '>
            Fast Ambulance
          </h2>
          <p className='font-sans text-md text-left'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className='group flex flex-col justify-start items-start gap-10 p-10 border border-gray-100 bg-[#f9f9f9] hover:bg-green-600 transition-all duration-300 ease-in-out hover:text-white'>
        <span className='border group-hover:bg-white group-hover:text-green-600 border-green-600 bg-green-600 p-5 text-white'>
        <Stethoscope size={35} />
        </span>
          <h2 className='font-serif text-2xl '>
            Dental Specialist
          </h2>
          <p className='font-sans text-md text-left'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className='group flex flex-col justify-start items-start gap-10 p-10 border border-gray-100 bg-[#f9f9f9] hover:bg-green-600 transition-all duration-300 ease-in-out hover:text-white'>
        <span className='border group-hover:bg-white group-hover:text-green-600 border-green-600 bg-green-600 p-5 text-white'>
        <Microscope size={35} />
        </span>
          <h2 className='font-serif text-2xl '>
            Mordern Laboratory
          </h2>
          <p className='font-sans text-md text-left'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className='group flex flex-col justify-start items-start gap-10 p-10 border border-gray-100 bg-[#f9f9f9] hover:bg-green-600 transition-all duration-300 ease-in-out hover:text-white'>
        <span className='border group-hover:bg-white group-hover:text-green-600 border-green-600 bg-green-600 p-5 text-white'>
        <Users size={35} />
        </span>
          <h2 className='font-serif text-2xl '>
            Children center
          </h2>
          <p className='font-sans text-md text-left'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className='group flex flex-col justify-start items-start gap-10 p-10 border border-gray-100 bg-[#f9f9f9] hover:bg-green-600 transition-all duration-300 ease-in-out hover:text-white'>
        <span className='border group-hover:bg-white group-hover:text-green-600 border-green-600 bg-green-600 p-5 text-white'>
        <Heart size={35} />
        </span>
          <h2 className='font-serif text-2xl '>
            Heart Surgery
          </h2>
          <p className='font-sans text-md text-left'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className='group flex flex-col justify-start items-start gap-10 p-10 border border-gray-100 bg-[#f9f9f9] hover:bg-green-600 transition-all duration-300 ease-in-out hover:text-white'>
        <span className='border group-hover:bg-white group-hover:text-green-600 border-green-600 bg-green-600 p-5 text-white'>
        <Hand size={35} />
        </span>
          <h2 className='font-serif text-2xl '> 
            Care Advice
          </h2>
          <p className='font-sans text-md text-left'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>
        </div>
      </div>
    </section>


    <section className='bg-[#F9F9F9] py-25'>
    <div>
      <div className='flex flex-col justify-center items-center gap-6 mb-20'>
        <h1 className='font-serif text-4xl max-w-2xl font-bold'>
          Here is some of our latest cases
        </h1>
        <p className='max-w-2xl font-sans text-center text-gray-500'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
      </div>

      <div>
      <div className='flex justify-center gap-4 mb-12'>
    {['All', 'Cardiology', 'Diabetes', 'Pediatrics', 'Neurosurgery'].map((category) => (
      <button
      onClick={() => setFilter(category)}
      className={`px-4 py-2 text-sm font-sans border ${filter === category ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-green-600 hover:text-white hover:border-green-600'} rounded-sm transition-all`}
      >{category}</button>
    ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4'>
        {filterImages.map(item => (
          <div 
          key={item.id} 
          className='relative group overflow-hidden cursor-pointer animate-fade-In'>
          <img 
          src={item.image} 
          alt={item.category} 
          className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110' />

          <div className='absolute inset-0 bg-green-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-6'>
          <p className='text-sm uppercase tracking-widest mb-2 opacity-80 font-sans'>Cloud services</p>
          <h3 className='text-xl font-bold font-serif text-center mb-4'>Personalized Meditation</h3>

          <div className='border border-white/40 p-2 hover:bg-white hover:text-green-900 transition-colors'>
            <BriefcaseMedical size={20} />
          </div>
          </div>

          </div>
        )

        )}
      </div>

      </div>
    </div>

    </section>

    <section className='bg-[#F9F9F9] py-25'>
      <div className='my-30 px-4'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className="font-serif text-4xl max-w-2xl font-bold">What People Say</h1>
          <p className="font-sans text-sm max-w-2xl text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>

        <div className='max-w-7xl mx-auto mt-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='relative group'>
          <div className='flex flex-col gap-6 bg-white group-hover:bg-green-600 group-hover:text-white py-15 px-10 rounded-sm h-full justify-center items-center border border-gray-100'>
          <div className='text-green-600 group-hover:text-white'>
            <Quote size={30}/>
          </div>
            <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
          </div>
          <div className='flex flex-col gap-3 absolute top-52 left-35 justify-center items-center'>
            <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
            <h3 className='font-serif text-2xl text-green-800'>John Doe</h3>
            <p className='font-sans text-sm text-green-300'>Patient</p>
          </div>

          </div>

          <div className='relative group'>
          <div className='flex flex-col gap-6 bg-white group-hover:bg-green-600 group-hover:text-white p-10 rounded-sm h-full justify-center items-center border border-gray-100'>
            <div className='text-green-600 group-hover:text-white'>
            <Quote size={30}/>
            </div>
            <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
          </div>
          <div className='flex flex-col gap-3 absolute top-52 left-26 justify-center items-center'>
            <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
            <h3 className='font-serif text-2xl text-green-800'>Aphanso james</h3>
            <p className='font-sans text-sm text-green-300'>cancer Patient</p>
          </div>

          </div>

          <div className='relative group'>
          <div className='flex flex-col gap-6 bg-white group-hover:bg-green-600 group-hover:text-white p-10 rounded-sm h-full justify-center items-center border border-gray-100'>
            <div className='text-green-600 group-hover:text-white'>
            <Quote size={30}/>
            </div>
            <p>it amazing how much easier it has been to meet new people and connect with others who share my interests.</p>
          </div>
          <div className='flex flex-col gap-3 absolute top-52 left-35 justify-center items-center'>
            <img src={com1} alt="" className='rounded-full w-[70px] group-hover:border-5 group-hover:border-green-600'/>
            <h3 className='font-serif text-2xl text-green-800'>John Doe</h3>
            <p className='font-sans text-sm text-green-300'>Patient</p>
          </div>

          </div>
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

    <section className='my-25'>
    <div className='grid grid-cols-3'>
      <div className='flex flex-col justify-center items-center gap-6 py-20 px-10 bg-green-600 text-white' >
      <div className='bg-green-300 flex justify-center items-center p-6 rounded-full'>
      <NotebookTabs size={30} className=""/>
      </div>
        <h3 className='font-serif text-3xl'>Best  Monitoring System</h3>
        <p className='text-center font-sans text-sm'>Despite advancement in technology and understanding of biological system, drug discovery is still a lengthy and expensive process.</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-6 py-20 px-10 bg-gray-900 text-white' >
      <div className='bg-gray-300 flex justify-center items-center p-6 rounded-full'>
      <House size={30} className=""/>
      </div>
        <h3 className='font-serif text-3xl'>Best  Monitoring System</h3>
        <p className='text-center font-sans text-sm'>Despite advancement in technology and understanding of biological system, drug discovery is still a lengthy and expensive process.</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-6 py-20 px-10 bg-lime-700 text-white' >
      <div className='bg-lime-300 flex justify-center items-center p-6 rounded-full'>
      <Stethoscope size={30} className=""/>
      </div>
        <h3 className='font-serif text-3xl'>Best  Monitoring System</h3>
        <p className='text-center font-sans text-sm'>Despite advancement in technology and understanding of biological system, drug discovery is still a lengthy and expensive process.</p>
      </div>
    </div>
    </section>

    <section className='my-25'>
      <div>
        <div className='flex flex-col gap-4 justify-center items-center mb-20'>
          <h1 className='font-serif text-4xl'>Latest News</h1>
          <p className='text-center text-gray-500 text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>

        <div className='grid grid-cols-2 max-w-7xl mx-auto px-4 gap-10'>
          <div className='flex gap-6 border border-gray-100 pr-3'>
            <img src={blog1} alt="" className='max-w-2xs transition-transform duration-300 ease-in-out hover:scale-105'/>
            <div className='flex flex-col gap-4 justify-start items-start py-10'>
              <h3 className='font-serif font-bold text-left'>These blood maker may higher risk of diseases</h3>
              <p className='font-sans text-gray-500 text-xs text-left'>The price is something not defined as financial. it could be time</p>
              <div className='flex gap-3 justify-center items-center text-xs text-gray-400 text-left'>
                <img src={comment} alt="" className='rounded-full w-10'/>
                <span><p>Alice Williams</p></span>
                <p>29 January, 2026</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col  row-span-2 '>
            <img src={blog3} alt="" className='w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105'/>
            <div className='flex flex-col bg-green-900 gap-7 text-white justify-start items-start py-10 px-5'>
              <h3 className='font-serif font-bold text-lg text-left'>These blood maker may higher risk of diseases</h3>
              <p className='font-sans font-bold text-sm text-left'>The price is something not defined as financial. it could be time</p>
              <div className='flex gap-3 justify-center items-center text-xs text-gray-400 text-left'>
                <img src={comment} alt="" className='rounded-full w-10'/>
                <span><p>Alice Williams</p></span>
                <p>29 January, 2026</p>
              </div>
            </div>
          </div>

          <div className='flex gap-6 border border-gray-100 pr-3'>
            <img src={blog1} alt="" className='max-w-2xs transition-transform duration-300 ease-in-out hover:scale-105'/>
            <div className='flex flex-col gap-4 justify-start items-start py-10'>
              <h3 className='font-serif font-bold text-left'>These blood maker may higher risk of diseases</h3>
              <p className='font-sans text-gray-500 text-xs text-left'>The price is something not defined as financial. it could be time</p>
              <div className='flex gap-3 justify-center items-center text-xs text-gray-400 text-left'>
                <img src={comment} alt="" className='rounded-full w-10'/>
                <span><p>Alice Williams</p></span>
                <p>29 January, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )

}

export default home
