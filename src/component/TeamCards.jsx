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

    <div className='flex-col justify-center  mb-[5rem]'>
            <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Core Team</span>
            </div>

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
        spaceBetween={50}
        slidesPerView={1}
      >
        {data[0].core.map((card,index)=>(
          <SwiperSlide className='flex justify-center'>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700" >
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src={card.img} alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
              
      </Swiper>
      <div className='flex-col justify-center item-center'>
      
      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Coding Team</span>
      </div>


            <div className="main-th ml-[52rem] w-[300px] h-[300px] mt-[3rem] pl-[0px] mt-[1rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="/assets/Team/Screenshot_20230907-155055_Gallery - PATIL ARYAN.jpg" alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Aryan Patil</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">Technical Head</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>

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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].tech.map((card,index)=>(
          <SwiperSlide className='flex justify-center'>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src={card.img} alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
       
      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Design Team</span>
            </div>

            <div className="main-th ml-[52rem] w-[300px] h-[300px] mt-[3rem] pl-[0px] mt-[1rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="/assets/Team/IMG-20230906-WA0107 - BHAGYASHREE GANESH.jpg" alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Bhagyashree Tekade</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">Design Head</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>

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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].design.map((card,index)=>(
          <SwiperSlide className='flex justify-center'>
          <div className="main w-[300px] h-[300px]  bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src={card.img} alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>

      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Event Team</span>
            </div>
            
            <div className="main-th ml-[52rem] w-[300px] h-[300px] mt-[3rem] pl-[0px] mt-[1rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="/assets/Team/IMG_0003 - SY_C_39_Varad Patil.jpeg" alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Varad Patil</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">Event Head</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>

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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].event.map((card,index)=>(
          <SwiperSlide className='flex justify-center'>
          <div className="main w-[300px] h-[300px] mt-[rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src={card.img} alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />

        spaceBetween={10}
        slidesPerView={1}
      >
        {data.map((card,index)=>(
          <SwiperSlide key={index} className='flex justify-center'>
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
          
      
      
      </Swiper>


      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Finance Team</span>
            </div>

            <div className="main-th ml-[52rem] w-[300px] h-[300px] mt-[3rem] pl-[0px] mt-[1rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="/assets/Team/1669015094780 - Devesh Zinzuwadia.JPG" alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Devesh Zinzuwadia</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">Finance Head</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>

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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].finance.map((card,index)=>(
          <SwiperSlide className='flex gap-[2rem] justify-around'>
          <div className="main w-[300px] h-[300px]  mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 20px' }}>
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src={card.img} alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>
      
      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Documentation Team</span>
            </div>

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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].doc.map((card,index)=>(
          <SwiperSlide className='flex justify-center'>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src={card.img} alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>

      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Content Team</span>
            </div>

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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].content.map((card,index)=>(
          <SwiperSlide className='flex justify-center'>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src={card.img} alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>

      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Publicity Team</span>
            </div>

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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].publicity.map((card,index)=>(
          <SwiperSlide className='flex justify-center'>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src={card.img} alt="Bonnie image" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <BsInstagram style={{ fontSize: '24px' }} />
                <BsLinkedin style={{ fontSize: '24px' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>
      {/* <img src='https://geekvishwa.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F097d4c46f3e8461f91dd36e99cffa8f4%2Fassets%2Fcover%2F965.png&w=1440&q=100'></img> */}
    </div>
  )
}

export default TeamCards