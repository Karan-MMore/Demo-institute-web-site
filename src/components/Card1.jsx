import React, { useEffect } from "react";
// import img1 from '../assets/certifiedpng.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Card1(props) {
  const { heading, image } = props.value;
  useEffect(() =>{
    AOS.init({duration : 1000})
  },[])
  return (
    <>
      {/*<!-- Component: User profile card --> */}
      <div className="overflow-hidden rounded bg-white text-center text-slate-500  shadow-xl shadow-slate-200 hover:shadow-emerald-100" data-aos="zoom-in">
        {/*  <!-- Image --> */}
        <figure className="p-6 pb-0">
          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
            <img
              src={image}
              alt="user name"
              title="user name"
              width="80"
              height="80"
              className="max-w-full rounded-full"
            />
          </span>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">{heading}</h3>
          </header>
        </div>
      </div>
    </>
  );
}
