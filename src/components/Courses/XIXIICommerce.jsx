"use client";
import React from "react";

export default function XIXIICommercepage() {
  return (
    <div className="relative bg-white min-h-screen text-gray-800 px-4 py-10 overflow-hidden">
      
      {/* Oval Background */}
      <div className="vertical-oval-bg"></div>
      
      <div className="mt-6 px-4">
        <img
          src="\course image folder\XIXIIComerce!.png"
          alt="Commerce Toppers"
          className="w-full max-w-3xl mx-auto rounded-xl border-4 border-blue-800 shadow-lg"
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10 mt-10" >
        
        {/* XI Commerce Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg bg-[#E85129] px-6 py-2 w-fit mx-auto rounded-md shadow">
            XI COMMERCE
          </h2>
          
          <div className="mt-6 px-4">
            <img
              src="/XIXIIComerce!.png"
              alt="XI Commerce Toppers"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
          <div className="mt-4 px-4 text-sm sm:text-base">
            <p className="mb-2 font-semibold text-[#1A3365]">Batch Timings</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Morning batch: 7:30 – 9:30 am | Evening batch: 6:30 – 8:30 pm</li>
              <li>Starts 1st/2nd Week of June</li>
              <li>Subject-wise expert faculty for all subjects</li>
              <li>Weekly tests conducted on Sundays</li>
              <li>Printed notes provided for all subjects</li>
              <li>Permanent progress reports available for students</li>
              <li>Parent access to attendance and test performance through website</li>
              <li>Specialized teachers for each subject</li>
              <li>We ensure 100% result</li>
            </ul>
          </div>
        </div>

        {/* XII Commerce Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg bg-[#E85129] px-6 py-2 w-fit mx-auto rounded-md shadow">
            XII COMMERCE
          </h2>
          
          <div className="mt-6 px-4">
            <img
              src="\course image folder\XIXIIComerce!.png"
              alt="XII Commerce Toppers"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
          <div className="mt-4 px-4 text-sm sm:text-base">
            <p className="mb-2 font-semibold text-[#1A3365]">Batch Timings</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Morning batch: 7:30 – 9:30 am | Evening batch: 6:30 – 8:30 pm</li>
              <li>Thursday, Friday & Saturday classes for test and discussion</li>
              <li>Board syllabus completion by Nov – Dec</li>
              <li>Preliminary Exams conducted in Dec – Jan</li>
              <li>Board exam-based practice papers in Jan & Feb</li>
              <li>Special lectures for average students</li>
              <li>One-on-one test guidance for students</li>
              <li>Option for vernacular medium</li>
            </ul>
          </div>
        </div>

        {/* Toppers Section */}
        <div>
          
        </div>

      </div>
    </div>
  );
}