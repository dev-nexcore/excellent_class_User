"use client";
import React from "react";

export default function VIIIIXsscpage() {
  return (
    <div className="lg:mt-[20px] relative bg-white min-h-screen text-gray-800 px-3 sm:px-4 md:px-6 py-6 sm:py-10 overflow-hidden">
      
      {/* Unified Background Circle */}
      <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 
             w-[85vw] h-[540vw] 
             sm:w-[100vw] sm:h-[200vw] 
             md:w-[80vw] md:h-[180vw] 
             lg:w-[70vw] lg:h-[173vw] 
             rounded-full z-0"
  style={{ background: '#E85122', opacity: '0.1' }}
></div>


      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* STD. VIII Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl bg-[#E85129] px-4 sm:px-6 py-2 sm:py-3 w-fit mx-auto rounded-md shadow-lg ">
            STD. VIII
          </h2>

          <div className="mt-6 px-2 sm:px-4 text-sm sm:text-base md:text-lg  text-black max-w-3xl mx-auto">
            <p className="mb-3 font-semibold text-[#0b2b6a] text-base sm:text-lg md:text-xl uppercase m-10">
              Batch Timings – 2:30 – 5:00 pm
            </p>
            <ul className="space-y-2 text-base sm:text-lg md:text-xl pl-5 sm:pl-6">
              {[
                "Daily two and half hours of coaching. Homework checking and take-up session for half an hour daily.",
                "Weekly test conducted.",
                "Permanent progress reports are maintained for students.",
                "Extra class during exams and personalized attention for average students.",
              ].map((point, i) => (
                <li
                  key={i}
                  className="relative pl-4 before:absolute before:top-3 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-black"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* STD. IX Section */}
        <div>
          <h2 className="text-center text-white font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl bg-[#E85129] px-4 sm:px-6 py-2 sm:py-3 w-fit mx-auto rounded-md shadow-lg">
            STD. IX
          </h2>

          {/* IX Timings Table */}
          <div className="flex justify-center mt-8 sm:mt-12 px-2 sm:px-4">
            <div className="overflow-x-auto rounded-3xl shadow-lg w-full max-w-3xl bg-[#1A3365] text-white">
              <div className="grid grid-cols-2 text-center font-semibold text-white text-sm sm:text-lg md:text-xl relative">
                <div className="relative bg-[#E85129] py-3">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-[90%] h-[20px] rounded-full bg-[#E85129]"></div>
                  BATCH'S
                </div>
                <div className="relative bg-[#E85129] py-3">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-[90%] h-[20px] rounded-full bg-[#E85129]"></div>
                  REGULAR TIMINGS
                </div>
              </div>
              <div className="text-center">
                {[
                  { batch: "Michael Batch", timing: "2:30 pm to 5:00 pm" },
                  { batch: "Karthika Batch", timing: "3:30 pm to 6:00 pm" },
                  { batch: "Holycross Batch", timing: "3:30 pm to 6:00 pm" },
                  { batch: "Other School Batch", timing: "3:30 pm to 6:00 pm" },
                  { batch: "Kalina Batch", timing: "2:30 pm to 5:00 pm" },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-2 text-sm sm:text-lg md:text-xl">
                    <div className="py-3">{item.batch}</div>
                    <div className="py-3">{item.timing}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IX Bullet Points */}
          <div className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl px-2 sm:px-4  text-black max-w-3xl mx-auto">
            <ul className="space-y-2 text-base sm:text-lg md:text-xl pl-5 sm:pl-6">
              {[
                "Printed notes for all subjects.",
                "Separate teachers for each subject.",
                "Weekly test conducted on Sundays.",
                "Permanent progress report is maintained for students so that parents can check the performance of their child at any given time and also on our website.",
                "Extra lectures are conducted for below average students.",
                "Revision done before each school exam.",
                "Assistant Teachers are available round the clock for all the subjects.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="relative pl-4 before:absolute before:top-3 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SSC Section */}
        <div>
          <h2 className="text-center text-white  text-lg sm:text-2xl md:text-4xl lg:text-5xl bg-[#E85129] px-4 sm:px-6 py-2 sm:py-3 w-fit mx-auto rounded-md shadow-lg">
            SSC
          </h2>

          {/* SSC Timings Table */}
          <div className="flex justify-center mt-8 sm:mt-12 px-2 sm:px-4">
            <div className="overflow-x-auto rounded-3xl shadow-lg w-full max-w-5xl bg-[#1A3365] text-white">
              <div className="grid grid-cols-4 text-center font-semibold text-white text-sm sm:text-lg md:text-xl relative">
                {["Batches", "Date of Commencement", "Team", "Regular Timings"].map((title, i) => (
                  <div key={i} className="relative bg-[#E85129] py-3">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-[90%] h-[20px] rounded-full bg-[#E85129]"></div>
                    {title}
                  </div>
                ))}
              </div>
              <div className="text-center">
                {[
                  { batch: "1st Batch", date: "I Week of April", team: "Team A₁", time: "5:15 pm to 7:45 pm" },
                  { batch: "2nd Batch", date: "I Week of April", team: "Team C₁", time: "2:30 pm to 5:00 pm" },
                  { batch: "3rd Batch", date: "II Week of April", team: "Team B₁", time: "3:30 pm to 6:00 pm" },
                  { batch: "4th Batch", date: "III Week of April", team: "Team C₂", time: "5:15 pm to 7:45 pm" },
                  { batch: "Kalina Batch", date: "II Week of April", team: "Team A", time: "2:30 pm to 5:00 pm" },
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-4 text-sm sm:text-lg md:text-xl">
                    <div className="py-3">{row.batch}</div>
                    <div className="py-3">{row.date}</div>
                    <div className="py-3">{row.team}</div>
                    <div className="py-3">{row.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SSC Bullet Points */}
          <div className="text-sm sm:text-lg md:text-xl px-2 sm:px-4 mt-6 sm:mt-8  text-black max-w-3xl mx-auto">
            <ul className="space-y-2 text-base sm:text-lg md:text-xl pl-5 sm:pl-6">
              {[
                "SSC syllabus will be completed by Nov–Dec.",
                "Prelims in Nov–Dec & late Jan.",
                "Jan–Feb: revision, model papers & grammar sessions.",
                "35 weekly tests on Sundays/holidays.",
                "Printed board-wise notes provided.",
                "Performance-based batch reshuffling in December.",
                "Student progress tracked regularly.",
                "Exam papers reviewed by expert moderators.",
                "24/7 subject support from assistant teachers.",
                "Parents can track attendance & test marks online.",
                "Bio-metric attendance with same-day absentee alerts.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="relative pl-4 before:absolute before:top-3 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}