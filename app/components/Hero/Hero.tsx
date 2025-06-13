'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { PaginationOptions } from 'swiper/types';
import Image from 'next/image';

export default function Hero() {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index, className) => {
      return `
        <span class="${className} 
          w-20 h-20
          flex items-center justify-center 
          rounded-full 
          bg-[#2d2d2d] 
          text-black 
          font-bold 
          text-sm 
          opacity-80 
          transition-all duration-1000 
          mx-1
        ">
        </span>`;
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000, 
        pauseOnMouseEnter: true,    
        disableOnInteraction: false, 
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src="https://i.ibb.co/GvHXyKVv/hero1.png"
          alt="E-Commerce"
          width={1200}
          height={200}
          className="w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://i.ibb.co/gbS7PwWb/hero2.png"
          alt="E-Commerce"
          width={1200}
          height={200}
          className="w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://i.ibb.co/LzVvMk6P/hero3.png"
          alt="E-Commerce"
          width={1200}
          height={200}
          className="w-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}
