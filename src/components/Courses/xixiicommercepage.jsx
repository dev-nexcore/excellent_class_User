"use client";
import React from "react";

export default function XIXIICommercepage() {
  const scheduleData = [
    {
      batch: "Morning",
      commencement: "1st Week of July",
      timings: "7:30 am – 9:30 am",
      maths: "Fri & Sat: 07:30 pm – 09:00 pm",
    },
    {
      batch: "Evening",
      commencement: "1st Week of June",
      timings: "6:30 pm – 8:30 pm",
      maths: "Sun: 10:00 am – 12:00 pm",
    },
    {
      batch: "Kalina",
      commencement: "2nd Week of June",
      timings: "6:45 pm – 8:45 pm",
      maths: "",
    },
  ];

  return (
    <div className="mt-5 relative bg-white min-h-screen text-gray-800 px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 overflow-hidden">
      
      {/* Background Circle */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[1300px] rounded-full z-0"
        style={{ background: '#E85122', opacity: '0.1' }}
      ></div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10 mt-6 sm:mt-10 font-[Poppins]">

        {/* XI Commerce Section */}
        <div>
          <h2 className="text-center text-white font-bold text-base sm:text-lg md:text-3xl lg:text-4xl bg-[#E85129] px-3 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto rounded-md shadow-lg">
            XI COMMERCE
          </h2>

          {/* XI Batch Table */}
          <div className="flex justify-center mt-4 sm:mt-6 overflow-x-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg w-full max-w-4xl min-w-[320px]">
              <div className="grid grid-cols-4 bg-[#1A3365] text-white text-center text-xs sm:text-sm md:text-base font-semibold">
                {["Batch", "Date of Commencement", "Timings", "Maths"].map((header, i) => (
                  <div
                    key={i}
                    className={`relative bg-[#E85129] py-2 ${i === 0 ? "rounded-tl-2xl" : ""} ${i === 3 ? "rounded-tr-2xl" : ""}`}
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-[90%] h-[20px] rounded-full bg-[#E85129]"></div>
                    {header}
                  </div>
                ))}
              </div>

              <div className="bg-[#1A3365] text-white text-center">
                {scheduleData.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 text-xs sm:text-sm md:text-base lg:text-xl"
                  >
                    <div className="py-3">{row.batch}</div>
                    <div className="py-3">{row.commencement}</div>
                    <div className="py-3">{row.timings}</div>
                    <div className="py-3">{row.maths || "-"}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* XI Commerce Bullet Points */}
          <div className="mt-4 px-4 text-xs sm:text-sm md:text-base lg:text-lg lg:ml-[200px]">
            <p className="mb-3 font-semibold text-[#1A3365]">Batch Timings</p>
            <ul className="space-y-2">
              {[
                "Morning batch: 7:30 – 9:30 am | Evening batch: 6:30 – 8:30 pm",
                "Starts 1st/2nd Week of June",
                "Subject-wise expert faculty for all subjects",
                "Weekly tests conducted on Sundays",
                "Printed notes provided for all subjects",
                "Permanent progress reports available for students",
                "Parent access to attendance and test performance through website",
                "Specialized teachers for each subject",
                "We ensure 100% result",
              ].map((point, index) => (
                <li
                  key={index}
                  className="relative pl-5 before:absolute before:top-2.5 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-black"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* XII Commerce Section */}
        <div>
          <h2 className="text-center text-white font-bold text-base sm:text-lg md:text-3xl lg:text-4xl bg-[#E85129] px-3 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto rounded-md shadow-lg">
            XII COMMERCE
          </h2>

          {/* XII Batch Table */}
          <div className="mt-6 flex justify-center overflow-x-auto">
            <div className="overflow-hidden rounded-3xl shadow-lg w-full max-w-4xl min-w-[320px] bg-[#1A3365] text-white">
              <div className="grid grid-cols-3 text-center font-semibold text-xs sm:text-sm md:text-base">
                {["Batches", "Timings", "Maths"].map((header, i) => (
                  <div
                    key={i}
                    className="relative bg-[#E85129] py-2"
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-[90%] h-[20px] rounded-full bg-[#E85129]"></div>
                    {header}
                  </div>
                ))}
              </div>

              <div className="text-center">
                {[
                  { batch: "Morning", timing: "7:30 am – 9:30 am", maths: "Thurs, Fri & Sat: 08:00 pm – 09:00 pm" },
                  { batch: "Evening", timing: "6:30 pm – 8:30 pm", maths: "Sun: 12:00 pm – 02:00 pm" },
                  { batch: "Kalina", timing: "7:20 pm – 8:50 pm", maths: "-" },
                ].map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 text-xs sm:text-sm md:text-base lg:text-xl"
                  >
                    <div className="py-3">{row.batch}</div>
                    <div className="py-3">{row.timing}</div>
                    <div className="py-3">{row.maths}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* XII Commerce Bullet Points */}
          <div className="mt-4 px-4 text-xs sm:text-sm md:text-base lg:text-lg lg:ml-[200px]">
            <p className="mb-3 font-semibold text-[#1A3365]">Batch Timings</p>
            <ul className="space-y-2">
              {[
                "Morning batch: 7:30 – 9:30 am | Evening batch: 6:30 – 8:30 pm",
                "Thursday, Friday & Saturday classes for test and discussion",
                "Board syllabus completion by Nov – Dec",
                "Preliminary Exams conducted in Dec – Jan",
                "Board exam-based practice papers in Jan & Feb",
                "Special lectures for average students",
                "One-on-one test guidance for students",
                "Option for vernacular medium",
              ].map((point, index) => (
                <li
                  key={index}
                  className="relative pl-5 before:absolute before:top-2.5 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-black"
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