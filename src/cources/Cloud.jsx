import React from 'react'

export default function Cloud() {
  return (
    <>
    <div className="fullstack_main_div"></div>
    <div className="container px-6 m-auto pt-3 pb-3">
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-8">
        
        </div>
        <div className="col-span-4">
          <div className="cource_card">
            <h2 className=" text-3xl text-white text-center pt-2">
              Course Snapshot
            </h2>
            <br />
            <br />
            <br />
            <p className=" text-xl text-gray-300 pl-3">Admission Open</p>
            <br />
            <h2 className="text-2xl text-white pl-3"> Duration:</h2>
            <p className="text-xl text-gray-300 pl-3">6 months</p>
            <br />
            <h2 className="text-2xl text-white pl-3"> Skill Level:</h2>
            <p className="text-xl text-gray-300 pl-3">Beginner to Expert</p>
            <br />
            <h2 className="text-2xl text-white pl-3"> Includes:</h2>
            <p className="text-xl text-gray-300 pl-3">
              Lifetime Technical / Placement support
            </p>
            <p className="text-xl text-gray-300 pl-3">Study Material</p>
            <p className="text-xl text-gray-300 pl-3">
              Certificate on Completiont
            </p>
            <br />
            <br />
            <p className=" text-base text-gray-300 pl-3">
              Reserve your seat now
            </p>

            <button class=" ml-3 mb-4 inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Contact Now</span>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
