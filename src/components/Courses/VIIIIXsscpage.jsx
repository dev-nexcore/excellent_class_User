"use client";
import React from "react";

export default function VIIIIXsscpage() {
  return (
    <div className="relative bg-white min-h-screen text-gray-800 px-4 py-10 overflow-hidden">

      {/* Oval Background */}
      <div className="vertical-oval-bg"></div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">

        {/* STD. VIII Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg bg-[#E85129] px-6 py-2 w-fit mx-auto rounded-md shadow">
            STD. VIII
          </h2>
          <div className="mt-4 px-4 text-sm sm:text-base">
            <p className="mb-2 font-semibold text-[#1A3365]">Batch Timings – 2:30 – 5:00 pm</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Daily personal self-written test copy. Home work checking and follow-up session.</li>
              <li>Doubt clearing lecture every week.</li>
              <li>Revision lectures of current & non-current topics.</li>
              <li>Extra lectures during exam time and focused approach for average students.</li>
            </ul>
          </div>
        </div>

        {/* STD. IX Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg bg-[#E85129] px-6 py-2 w-fit mx-auto rounded-md shadow">
            STD. IX
          </h2>

          <div className="mt-8 px-4">
            <img
              src="\course image folder\XIISSCIMAGE!.png"
              alt="STD IX Batch Info"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="mt-6 text-sm sm:text-base px-4">
            <ul className="list-disc pl-5 space-y-1">
              <li>Performance focus of students.</li>
              <li>Weekly test copy checking and analysis.</li>
              <li>Optional weekly parent meeting is available for students so that parents can stay updated about their child's progress.</li>
              <li>Students should appear in full uniform for the lectures.</li>
              <li>Students must bring a notebook and pen/pencil for the subject.</li>
            </ul>
          </div>
        </div>

        {/* SSC Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg bg-[#E85129] px-6 py-2 w-fit mx-auto rounded-md shadow">
            SSC
          </h2>
           <div className="px-4 mt-8">
            <img
              src="\course image folder\XIISSC2.png"
              alt="SSC Batch Timing Visual"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="text-sm sm:text-base px-4 mt-6">
            <ul className="list-disc pl-5 space-y-1">
              <li>SSC schedule is customised by New Gen.</li>
              <li>Each test is followed by a doubt solving session.</li>
              <li>Daily group-wise study session.</li>
              <li>Weekly report is shared with the parent via WhatsApp.</li>
              <li>Revision of full syllabus before every test.</li>
              <li>Full support from teachers and mentors.</li>
              <li>Special attention on slow learners.</li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
}
