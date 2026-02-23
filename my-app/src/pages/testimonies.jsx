import React from 'react'
import { Link } from 'react-router-dom'
import img3 from '../assets/img3.png'
import com1 from '../assets/testi1.jpg'
import { Quote } from 'lucide-react'

const Testimonies = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[30rem] mb-20">
        <img
          src={img3}
          alt="Doctor Team"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-green-900/90 flex flex-col justify-center items-center gap-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Testimonies
          </h1>
          <div className="flex gap-2 text-white font-sans text-sm md:text-base">
            <p><Link to="/">Home</Link></p>
            <span>-</span>
            <p>Testimonies</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-[#F9F9F9] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <h1 className="font-serif text-2xl md:text-4xl font-bold">
              What People Say
            </h1>
            <p className="font-sans text-sm md:text-base max-w-2xl text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Grid of Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {[ 
              { name: "John Doe", role: "Patient" },
              { name: "Aphanso James", role: "Cancer Patient" },
              { name: "Jane Smith", role: "Patient" }
            ].map((person, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="flex flex-col gap-6 bg-white group-hover:bg-green-600 group-hover:text-white py-10 px-6 rounded-md h-full justify-center items-center border border-gray-100 transition-colors duration-300">
                  <div className="text-green-600 group-hover:text-white">
                    <Quote size={30} />
                  </div>
                  <p>
                    It’s amazing how much easier it has been to meet new people
                    and connect with others who share my interests.
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-6 items-center">
                  <img
                    src={com1}
                    alt={person.name}
                    className="rounded-full w-[70px] border-4 border-transparent group-hover:border-green-600 transition-all duration-300"
                  />
                  <h3 className="font-serif text-xl md:text-2xl text-green-800">
                    {person.name}
                  </h3>
                  <p className="font-sans text-sm text-green-500">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonies