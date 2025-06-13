"use client";
import Image from "next/image";
import Container from "../Container";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; // ✅ Navigation CSS

import { FreeMode, Navigation } from "swiper/modules"; // ✅ Include Navigation
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const AllCategories = [
  {
    name: "Fashion",
    link: "/fashion",
    icon: "/fashion.png",
    className:
      "w-28 h-28 bg-white rounded-full border border-gray-200 p-2 hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Electronics",
    link: "/electronics",
    icon: "/electronics.png",
    className:
      "w-28 h-28 bg-[#feefea] rounded-full border border-gray-200 hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Bags",
    link: "/bags",
    icon: "/bags.png",
    className:
      "w-28 h-28 bg-[#fdf0ff] rounded-full border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Footwear",
    link: "/footwear",
    icon: "/footwear.png",
    className:
      "w-28 h-28 bg-[#def3ff] rounded-full border border-gray-200 p-2 hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Beauty",
    link: "/beauty",
    icon: "/beauty.png",
    className:
      "w-28 h-28 bg-[#FFE8F8] rounded-full border border-gray-200 p-2 hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Wellness",
    link: "/wellness",
    icon: "/wellness.png",
    className:
      "w-28 h-28 bg-[#E3FFFA] rounded-full border border-gray-200 p-2 hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Groceries",
    link: "/groceries",
    icon: "/groceries.png",
    className:
      "w-28 h-28 bg-[#DEFFD9] rounded-full border border-gray-200 p-3 hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Groceries",
    link: "/groceries",
    icon: "/groceries.png",
    className:
      "w-28 h-28 bg-[#DEFFD9] rounded-full border border-gray-200 p-3 hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Groceries",
    link: "/groceries",
    icon: "/groceries.png",
    className:
      "w-28 h-28 bg-[#DEFFD9] rounded-full border border-gray-200 p-3 hover:shadow-lg transition-shadow duration-300",
  },
];

export default function FeaturedCategories() {
  return (
    <div>
      <Container className="pt-8">
        <p className="text-xl uppercase text-gray-700 font-bold">
          Featured Categories
        </p>

        {/* ✅ Custom Navigation Buttons */}
        <div className="relative">
         <div className="absolute right-0 -top-7 z-10">
             <button className="swiper-button-prev-custom mr-4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full">
          <GrFormPreviousLink className="text-2xl text-gray-600"/>
          </button>
          <button className="swiper-button-next-custom transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full">
            <GrFormNextLink className="text-2xl text-gray-600"/>

          </button>
         </div>

          {/* ✅ Swiper with Custom Navigation */}
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            freeMode={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            modules={[FreeMode, Navigation]}
            className="mySwiper mt-4"
          >
            {AllCategories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <div
                    className={`${category.className} flex justify-center items-center`}
                  >
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="text-center font-semibold pt-2 text-gray-700">
                    {category.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
