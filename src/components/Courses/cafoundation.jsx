"use client";
import React from 'react';

export default function CAFoundation() {
  return (
    <div className="relative w-full mt-[50px] min-h-screen bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 font-[Poppins]">
      <div className="relative max-w-5xl xl:max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-10">

        {/* 🔶 Oval Background Shape */}
         <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-[85vw] h-[124vw] 
             sm:w-[80vw] sm:h-[70vw] 
             md:w-[80vw] md:h-[90vw] 
             lg:w-[50vw] lg:h-[48vw] 
             rounded-full z-0"
  style={{ background: '#E85122', opacity: '0.1' }}
></div>

        {/* Header Button */}
        <div className="relative z-10 flex justify-center mb-6 sm:mb-8 md:mb-10">
          <div className="text-center text-white font-bold text-base sm:text-lg md:text-3xl lg:text-3xl bg-[#E85129] px-3 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto rounded-md shadow-lg">
            Take the First Step to Become a CA
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-xl sm:text-3xl md:text-2xl lg:text-4xl  text-black mb-6 sm:mb-7 md:mb-8 underline text-center sm:text-left sm:ml-[60px] md:ml-[75px]">
            Join CA Foundation
          </h2>

          {/* Bullet Points Wrapper */}
          <div className="sm:ml-[60px] md:ml-[80px] ml-4 sm:mr-4">

            {/* Top Points */}
            <ul className="text-base sm:text-lg md:text-xl lg:text-2xl text-black  space-y-3 sm:space-y-4 md:space-y-5">
              {[
                "Limited batch size of 40 students.",
                "Exposure of CA foundation right from the start.",
                "Just pay admission fee of Rs.5000/- to get enrolled for CA foundation.",
              ].map((point, index) => (
                <li
                  key={index}
                  className="relative pl-5 before:absolute before:top-2.5 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-black"
                >
                  {point}
                </li>
              ))}
            </ul>

            {/* Course Fee */}
            <div className="mt-4 font-semibold sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-black ">
              <div>Total course fee</div>
            </div>
            <div className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-3xl text-black ">
              Rs.22000/-
            </div>

            {/* Bottom Points */}
            <ul className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-lg md:text-xl lg:text-2xl text-black  space-y-3 sm:space-y-4 md:space-y-5">
              {[
                "The only classes in Kurla that offers CA foundation course.",
                "Teachers experience in teaching CA foundation.",
              ].map((point, index) => (
                <li
                  key={index}
                  className="relative pl-5 before:absolute before:top-2.5 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-black"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}