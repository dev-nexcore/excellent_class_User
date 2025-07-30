"use client";
import React from "react";

export default function XIXIIScience() {
  return (
    <div className="relative bg-white min-h-screen text-gray-800 px-4 py-10 overflow-hidden">
      {/* Oval Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] rounded-full opacity-90 z-0" style={{background: '#E851221A'}}></div>
      
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* XI SCIENCE Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg bg-[#E85129] px-6 py-2 w-fit mx-auto rounded-md shadow-lg">
            XI SCIENCE
          </h2>
          
          <div className="mt-4 px-4 text-sm sm:text-base">
            <ul className="list-disc pl-5 space-y-1">
              <li>Weekly test</li>
              <li>Printed notes</li>
              <li>Specialized teachers for each subject</li>
              <li>Permanent progress report is maintained for all students</li>
              <li>Parents can check the attendance and progress of their child by login to our website</li>
              <li className="text-blue-600">www.excellentclasses.in</li>
              <li>We ensure 100% Results</li>
              <li>Teaching aided tools are used to make learning more comfortable through visuals</li>
            </ul>
          </div>
              <div className="mt-8 px-4">
            <img
              src="\course image folder\XIXIIScience!.png"
              alt="STD IX Batch Info"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="text-center mt-4 font-semibold text-gray-700">
            <p>Sundays / Holidays: 6 to 8 hours lectures including test</p>
          </div>
        </div>

        {/* XII SCIENCE Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg bg-[#E85129] px-6 py-2 w-fit mx-auto rounded-md shadow-lg">
            XII SCIENCE
          </h2>
          
          <div className="mt-4 px-4 text-sm sm:text-base">
            <ul className="list-disc pl-5 space-y-1">
              <li>Syllabus of H.S.C will be completed by November / December</li>
              <li>Two Preliminary Exam will be conducted</li>
              <li>Weekly Test</li>
              <li>Printed Notes will be provided as per Board requirements</li>
              <li>Extra Lectures for weak students</li>
              <li>Permanent progress report is maintained for students</li>
              <li>Periodic discussion on presentation of examination papers</li>
              <li>Special book for entrance exams</li>
              <li>We ensure 100% Results</li>
            </ul>
          </div>
              <div className="mt-8 px-4">
            <img
              src="public\course image folder\XIXIIScience2.png"
              alt="STD IX Batch Info"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="text-center mt-4 font-semibold text-gray-700">
            <p>Sundays / Holidays: 6 to 8 hours lectures including test</p>
          </div>
        </div>
      </div>


    </div>
  );
}