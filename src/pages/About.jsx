import React, { useRef, useState } from "react";
import "./pagesCss.css";
import "../App.css";
import aboutImg from "../assets/2672292.jpg";
import teamDetail from "../utils/teamDetails";
import galleryImages from "../utils/galleryImages";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperCss.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import TeamCard from "../components/TeamCard";
import GalleryCompo from "../components/GalleryCompo";

export default function About() {
  return (
    <>
      <div className="about_main_div flex justify-center items-center pb-5">
        <h1 className=" text-4xl text-white Poppins">About Us</h1>
      </div>
      
        <div className="container px-6 m-auto pt-4">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-5">
              <div>
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-span-4 lg:col-span-7 flex flex-col content-center">
              <h2 className=" text-4xl">
                Welcome to Arrow Technologies and Solutions
              </h2>
              <br />
              <p className=" text-xl font-medium">
                Arrow technologies & solutions is one of the few IT
                professionals. Here, we offer training and learning labs that
                are tailored to provide solutions to help increase the
                productivity, performance, and profitability of manufacturing,
                transport, and banking.
              </p>
              <br />
              <p className=" text-xl font-medium">
                We envision delivering sustainable human capital for the future.
                We are committed to create a strong and continuous improvement
                in human capital by virtue of current updated technologies. The
                unique approach combined with the strong faculty of experts,
                competent trainers, and multilingual facilitators puts our lab
                in the position to spur the progress of the establishment. We
                truly understand the current companies’ training needs.
                Companies no longer need theory-based training but practical
                training with applicable knowledge. It is with this in mind that
                we incorporate to improve. We listen to understand your issues
                and business objectives. We work together with you to equip your
                people with the necessary skills, providing them with the right
                tools to achieve important skills to have competitive.
              </p>
            </div>
          </div>
        </div>
      
      <div className="  flex justify-center items-center sub_heading_div">
        <h2 className=" text-3xl WorkSans font-bold text-orange-500 ">
          Our Team
        </h2>
      </div>
      <div className="teamSwiper flex justify-center items-center">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {teamDetail.map((detail)=>{
        return(
          <SwiperSlide><TeamCard value={detail}/></SwiperSlide>
        )
      })
      }
      </Swiper>

      </div>
      <div className="  flex justify-center items-center sub_heading_div">
        <h2 className=" text-3xl WorkSans font-bold text-orange-500 ">
          Gallery
        </h2>
      </div>
      <div className="gallery flex justify-center items-center ">
      <div className="gallerysubdiv"> <GalleryCompo gallery={galleryImages}/></div>
      </div>

    </>
  );
}
