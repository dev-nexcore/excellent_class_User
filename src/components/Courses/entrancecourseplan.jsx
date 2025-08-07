'use client';
import React from 'react';

export default function EntranceCoursePlan() {
  return (
    <div className="lg:mt-[20px] relative w-full min-h-screen bg-white px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 overflow-hidden">
      
      {/* 🔶 Oval Background Shape */}
           <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-[88vw] h-[140vw] 
             sm:w-[80vw] sm:h-[90vw] 
             md:w-[80vw] md:h-[100vw] 
             lg:w-[65vw] lg:h-[67vw] 
             rounded-full z-0"
  style={{ background: '#E85122', opacity: '0.1' }}
></div>

      <div className="relative max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10 z-10">
        
        {/* Header Button */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-center text-white font-bold 
            text-base sm:text-lg md:text-3xl lg:text-4xl 
            bg-[#E85129] px-3 sm:px-6 py-1.5 sm:py-2 
            w-fit mx-auto rounded-md shadow-lg">
            Entrance Course Plan for
          </h2>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-black mb-6 sm:mb-8 md:mb-10 underline text-center">
          NEET, JEE (M), MHT-CET (Eng & Pharmacy)
        </h2>

        {/* Bullet List */}
        <ul className="text-sm sm:text-base md:text-lg lg:text-xl text-black space-y-3 sm:space-y-4 md:space-y-5 font-[Poppins]">
          {[
            "Entrance portion will be covered along with the topics of XI & XII.",
            "70% of entrance syllabus will be covered before the XII Board examination.",
            "Chapter-wise regular test series.",
            "Cumulative tests will be conducted weekly.",
            "More than 20 mock tests as per the final entrance pattern.",
            "After completing mock tests, All India test series paper will be conducted.",
            "DPP (Daily Practice Paper) will be provided for self-practice.",
            "Entrance study material will be provided.",
            "Digital platform for chapter-wise/complete portion test for practice. Login ID and password will be provided as per the package."
          ].map((point, index) => (
            <li
              key={index}
              className="relative pl-5 before:absolute before:top-2.5 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-black"
            >
              {point}
            </li>
          ))}
        </ul>

        {/* Bottom Message */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-sm sm:text-base md:text-3xl lg:text-3xl text-[#233B77] font-semibold italic leading-relaxed">
            Learn and work under the guidance and supervision of the city's
            most acclaimed and renowned professors
          </p>
        </div>
      </div>
    </div>
  );
}