'use client';
import React from 'react';

export default function EntranceCoursePlan() {
  return (
    <div className="relative w-full min-h-screen bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <div className="relative max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Background Circle */}
        <div
          className="absolute top-1 left-1/2 transform -translate-x-1/2 w-[800px] sm:w-[900px] md:w-[800px] lg:w-[850px] h-[850px] sm:h-[900px] md:h-[850px] lg:h-[800px] rounded-full z-0"
          style={{ background: '#E85122', opacity: '0.1' }}
        ></div>

        {/* Header Button */}
        <div className="relative z-10 flex justify-center mb-6 sm:mb-8 md:mb-10">
          <div className="bg-[#F96302] text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-md shadow-sm mt-3 sm:mt-4 md:mt-5">
            Entrance Course Plan for
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 sm:mb-7 md:mb-8 underline text-center">
            NEET, JEE (M), MHT-CET (Eng & Pharmacy)
          </h2>

          <ul className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-semibold space-y-3 sm:space-y-4 md:space-y-5">
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>Entrance portion will be covered along with the topics of XI & XII.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>70% of entrance syllabus will be covered before the XII Board examination.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>Chapter-wise regular test series.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>Cumulative tests will be conducted weekly.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>More than 20 mock tests as per the final entrance pattern.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>After completing mock tests, All India test series paper will be conducted.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>DPP (Daily Practice Paper) will be provided for self-practice.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>Entrance study material will be provided.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 mt-2 sm:mt-2.5 md:mt-3 mr-3 sm:mr-4 md:mr-5 rounded-full bg-black flex-shrink-0"></span>
              <span>Digital platform for chapter-wise/complete portion test for practice. Login ID and password will be provided as per the package.</span>
            </li>
          </ul>

          {/* Bottom Message */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-700 font-semibold italic">
              Learn and work under the guidance and supervision of the city's<br />
              most acclaimed and renowned professors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}