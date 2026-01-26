import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const home = () => {
  const slides = [
    { title: "Superior solulotion that help you live healthier",
      img: "",
    },

    {
      title: "find a doctor and book appointment",
      img: "",
    },

    {
      title: "we only give the best care",
      img: "",
    }

  ];

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
          <div className='max-w-7xl mx-auto h-full grid grid-col-1'></div>

          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
      
    </div>
  )

}

export default home
