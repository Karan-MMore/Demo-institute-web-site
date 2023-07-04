import React, { useEffect } from "react";
import "./pagesCss.css";
import "../App.css";
import Card1 from "../components/Card1";
import data from "../utils/homeCardData";
import CourceCard from "../components/CourceCard";
import courceData from "../utils/courcesCardDiv";
import studentImage from "../assets/student.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() =>{
    AOS.init({duration : 1000})
  },[])
  return (
    <>
      <div className="home_main_div">
        <div className=" home_heading_div flex justify-center items-center flex-col">
          <h1 className=" text-5xl text-white Poppins">
            Welcome to Arrow Technologies and Solutions
          </h1>
          <p className="text-2xl pt-3 text-white Poppins">
            INSTITUTE FOR IT TRAINING AND DEVELOPMENT
          </p>
        </div>
      </div>
      <div className="  flex justify-center items-center sub_heading_div">
        <h2 className=" text-3xl WorkSans font-bold text-orange-500">
          We Have
        </h2>
      </div>
      <div className="container pt-3 px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12" >
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
      <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6" >
              <div className="home_SecondMain_Data flex justify-center items-start flex-col" >
              <h2 className=" text-2xl text-orange-500 font-medium">Best Courses For Students</h2>
              <h1 className="  md:text-4xl text-3xl txtColorHeatin font-semibold WorkSans">
                BUILD YOUR CAREER WITH <br />
                ARROW TECHNOLOGIES
              </h1>
              <p className=" text-xl text-white font-normal">
              Arrow Technologies and Solutions For Campus Student Plan Helps You Build Skills To Add
                To Your Resume With Unlimited Guided Projects
              </p>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-6" >
              <div>
                <img src={studentImage} alt="" className="homeImage1"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
      <div className="  flex justify-center items-center sub_heading_div">
        <h2 className=" text-3xl WorkSans font-bold text-orange-500 ">
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
