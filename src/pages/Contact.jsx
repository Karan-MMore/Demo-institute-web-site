import React, { useState } from "react";
import "./pagesCss.css";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  const [state, setState] = useState({
    "id-l02": "",
    "id-l10": "John@Smith",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  return (
    <>
      <div className="contact_main_div flex justify-center items-center">
        <h1 className="text-4xl text-white Poppins">Contact Us</h1>
      </div>
      <div className="mapDivMain pt-5 pb-5">
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <iframe
                className="MapComp"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.998072085128!2d73.75340057414064!3d20.008595622036488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebbd688c61a9%3A0xaf2bd768c929d3ca!2sArrow%20Technologies%20%26%20Solutions!5e0!3m2!1sen!2sin!4v1682838719159!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      
        <div className="container px-6 m-auto pb-5">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-3">
              <ul class="divide-y divide-slate-100">
                <li class="flex items-start gap-4 px-4 py-3">
                  <div class="flex items-center text-emerald-500 pt-1">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                    <h4 class="text-base text-slate-700">Address</h4>
                    <p class="w-full text-sm text-slate-500">
                      Dj house D'Souza colony, College Rd, Model Colony, Nashik,
                      Maharashtra 422005
                    </p>
                  </div>
                </li>
                <li class="flex items-start gap-4 px-4 py-3">
                  <div class="flex items-center text-emerald-500 pt-1">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                    <h4 class="text-base text-slate-700">Phone</h4>
                    <p class="w-full text-sm text-slate-500">08830530398</p>
                  </div>
                </li>
                <li class="flex items-start gap-4 px-4 py-3">
                  <div class="flex items-center text-emerald-500 pt-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
                    <h4 class="text-base text-slate-700">Email</h4>
                    <p class="w-full text-sm text-slate-500">
                      ArrowTechnologies@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-span-4 lg:col-span-5">
              <div className=" h-24">
                <div className="relative my-6">
                  <input
                    id="id-l02"
                    type="text"
                    name="id-l02"
                    placeholder="your name"
                    value={state["id-l02"]}
                    className="peer relative h-12 w-full border-b border-slate-200 px-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="id-l02"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Your name
                  </label>
                </div>
              </div>
              <div className="mb-7 h-24">
                <div className="relative">
                  <input
                    id="id-l10"
                    type="email"
                    name="id-l10"
                    placeholder="Your email"
                    value={state["id-l10"]}
                    className="peer relative h-12 w-full border-b border-slate-200 px-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="id-l10"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Your email
                  </label>
                  <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                    <span>Text field with helper text</span>
                    <span className="text-slate-500">1/10</span>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-4">
              <div className="relative">
                <textarea
                  id="id-l01"
                  type="text"
                  name="id-l01"
                  rows="3"
                  placeholder="Write your message"
                  className="peer relative w-full rounded border border-slate-200 p-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                ></textarea>
                <label
                  for="id-l01"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Write your message
                </label>
              </div>
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Base button</span>
              </button>
            </div>
          </div>
        </div>
      
    </>
  );
}
