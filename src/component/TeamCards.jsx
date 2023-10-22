"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../app/team/T-card.css"
// import required modules
import { Autoplay, Pagination } from "swiper/modules"
import data from "../app/team/data"
const TeamCards = () => {
  return (
    <div className='flex justify-center mb-[5rem]'>

      <Swiper
      breakpoints={{
        1400: {
          // width: 768,
          slidesPerView: 3,
        },
        900: {
          // width: 768,
          slidesPerView: 2,
        },
        500: {
          // width: 768,
          slidesPerView: 1,
        },
      }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={10}
        slidesPerView={1}
      >
        {data.map((card,index)=>(
          <SwiperSlide className='flex justify-center'>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="/assets/1.png" alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                  <BsInstagram />
                  <BsLinkedin />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
        
        {/* <SwiperSlide className='flex justify-center'>
        <div className="main w-[500px] h-[500px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="pw flex flex-col items-center pb-10">
              <img className="pic w-54 h-54 mb-3 rounded-full shadow-lg" src="/assets/1.png" alt="Bonnie image" />
              <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Title</h5>
              <span className="pos text-sm text-gray-500 dark:text-gray-400">President</span>
              <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram />
                <BsLinkedin />
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>

      {/* <img src='https://geekvishwa.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F097d4c46f3e8461f91dd36e99cffa8f4%2Fassets%2Fcover%2F965.png&w=1440&q=100'></img> */}
    </div>
  )
}

export default TeamCards