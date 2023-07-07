import React, { useEffect } from "react";
import "./pagesCss.css";
import "../App.css";
import Card1 from "../components/Card1";
import data from "../utils/homeCardData";
import CourceCard from "../components/CourceCard";
import courceData from "../utils/courcesCardDiv";
import studentImage from "../assets/PngItem.png";
import heroIMG from "../assets/itImage.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="hero_section_home">
        <div className="container hero_div_content px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-7 heading_content flex flex-col justify-center">
              <h1 className="text-5xl pt-12 text-white Poppins">
                Welcome to Arrow Technologies and Solutions
              </h1>
              <p className="text-2xl pt-3 pb-5 text-white Poppins">
                INSTITUTE FOR IT <br />
                <span className="fontItim text-3xl text-orange-400">
                  <Typewriter
                    words={["TRAINING", "DEVELOPEMENT"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  ></Typewriter>
                </span>
              </p>
              <div class="wrapper">
                <a href="#" className="anchor">
                  <span>CONTACT US|</span>
                </a>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-5 flex justify-center items-center">
              <img src={heroIMG} alt="" className="heroImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="  flex justify-center items-center sub_heading_div">
        <h2 className=" text-3xl fontItim font-bold text-black">We Have</h2>
      </div>
      <div className="container pt-3 px-6 m-auto" data-aos="fade-up">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
          {data.map((singleData) => {
            return (
              <div className="col-span-4">
                <Card1 value={singleData} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="home_SecondMain_div">
        
      <div className="container hero_div_content px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-5 flex justify-center items-center">
              <img src={studentImage} alt="" className="heroImg" />
            </div>
            <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-7 heading_content flex flex-col justify-center">
            <h2 className=" text-2xl text-orange-500 font-medium">
                    Best Courses For Students
            </h2>
              <h1 className="text-4xl pt-3 text-cyan-500 fontItim">
                    BUILD YOUR CAREER WITH <br />
                    ARROW TECHNOLOGIES
              </h1>
              <p className="text-2xl pt-3 pb-5 text-black Poppins">
              Arrow Technologies and Solutions For Campus Student Plan
                    Helps You Build Skills To Add To Your Resume With Unlimited
                    Guided Projects
              </p>
             
            </div>
            
          </div>
        </div>        
      </div>
      <div className="  flex justify-center items-center sub_heading_div">
        <h2 className=" text-3xl fontItim font-bold text-black ">
          Our Top Cources
        </h2>
      </div>
      <div className="container pt-3 px-6 m-auto pb-3">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          {courceData.map((cdata) => {
            return (
              <div className="col-span-4">
                <CourceCard value={cdata} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
