"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const Banner = () => {
  return (
    <div className='flex justify-center mb-[5rem]'>

      {/* <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={40}
        slidesPerView={1}
      >
        <SwiperSlide className='mx-0 px-0'>
          <div className='flex justify-center'>

            <img src='https://geekvishwa.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F097d4c46f3e8461f91dd36e99cffa8f4%2Fassets%2Fcover%2F965.png&w=1440&q=100'></img>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className='flex justify-center'>

            <img src='https://geekvishwa.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F097d4c46f3e8461f91dd36e99cffa8f4%2Fassets%2Fcover%2F965.png&w=1440&q=100'></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>

            <img src='https://geekvishwa.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F097d4c46f3e8461f91dd36e99cffa8f4%2Fassets%2Fcover%2F965.png&w=1440&q=100'></img>
          </div>
        </SwiperSlide>
      </Swiper> */}

      {/* <img src='https://geekvishwa.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F097d4c46f3e8461f91dd36e99cffa8f4%2Fassets%2Fcover%2F965.png&w=1440&q=100'></img> */}
    </div>
  )
}

export default Banner