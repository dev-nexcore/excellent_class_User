'use client';
import React from 'react';

export default function CAFoundation() {
  return (
    <div className="relative w-full min-h-screen bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <div className="relative max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Background Circle */}
        <div
          className="absolute top-1 left-1/2 transform -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[550px] lg:w-[600px] h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-full z-0"
          style={{ background: '#E85122', opacity: '0.1' }}
        ></div>

        {/* Header Button */}
        <div className="relative z-10 flex justify-center mb-6 sm:mb-8 md:mb-10">
          <div className="bg-[#F96302] text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-md shadow-sm mt-3 sm:mt-4 md:mt-5">
            Take the First Step to Become a CA
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 sm:mb-7 md:mb-8 underline">
            Join CA Foundation
          </h2>

          <ul className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-semibold space-y-3 sm:space-y-4 md:space-y-5">
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>Limited batch size of 40 students.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>Exposure of CA foundation right from the start.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>
                Just pay admission fee of Rs.5000/- to get enrolled for CA foundation.
              </span>
            </li>
          </ul>

          <div className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-black font-semibold">
            <div>Total course fee</div>
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Rs.22000/-</div>
          </div>

          <ul className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-black font-semibold space-y-3 sm:space-y-4 md:space-y-5">
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>The only classes in Kurla that offers CA foundation course.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>Teachers experience in teaching CA foundation.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}