"use client";
import React from "react";

export default function XIXIIScience() {
  return (
    <div className="lg:mt-[20px] relative bg-white min-h-screen text-gray-800 px-4 py-10 overflow-hidden">
      {/* Background Oval */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-[140vw] h-[500vw] 
             sm:w-[110vw] sm:h-[300vw] 
             md:w-[90vw] md:h-[200vw] 
             lg:w-[80vw] lg:h-[130vw] 
             rounded-full z-0"
        style={{ background: "#E85122", opacity: "0.1" }}
      ></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10 font-[Poppins]">
        {/* XI SCIENCE Section */}
        <div>
          <h2 className="text-center text-white font-bold text-base sm:text-lg md:text-3xl lg:text-4xl bg-[#E85129] px-3 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto rounded-md shadow-lg">
            XI SCIENCE
          </h2>

          {/* Bullet Points */}
          <div className="mt-6 px-4 max-w-3xl mx-auto text-[18px] sm:text-[20px] space-y-3">
            {[
              "Weekly test",
              "Printed notes",
              "Specialized teachers for each subject",
              "Permanent progress report is maintained for all students",
              "Parents can check the attendance and progress of their child by login to our website",
              "www.excellentclasses.in",
              "We ensure 100% Results",
              "Teaching aided tools are used to make learning more comfortable through visuals",
            ].map((point, index) => (
              <div
                key={index}
                className={`relative pl-5 ${
                  point.startsWith("www.")
                    ? "text-black underline break-words"
                    : ""
                }`}
              >
                <span className="absolute left-0 top-3 w-2 h-2 rounded-full bg-black"></span>
                {point}
              </div>
            ))}
          </div>

          {/* Table: XI SCIENCE */}
          <div className="overflow-x-auto p-6">
            <div className="min-w-[500px] max-w-3xl mx-auto">
              <table className="table-auto w-full text-left rounded-xl overflow-hidden">
                <thead className="bg-[#eb4b26] text-white text-lg uppercase">
                  <tr>
                    <th className="px-4 py-3">Date of Commencement</th>
                    <th className="px-4 py-3">Batch</th>
                    <th className="px-4 py-3">Regular Timings</th>
                  </tr>
                </thead>
                <tbody className="bg-[#152f63] text-white text-lg">
                  <tr>
                    <td className="px-4 text-2xl py-3 font-semibold" rowSpan={4}>
                      1st Week of May <br />/ June / July
                    </td>
                    <td className="px-4 py-3">Team F₁</td>
                    <td className="px-4 py-3">7:15 am to 10:15 am</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Team F₂</td>
                    <td className="px-4 py-3">6:00 pm to 9:00 pm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Team K₁</td>
                    <td className="px-4 py-3">6:15 pm to 9:00 pm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Team CPI</td>
                    <td className="px-4 py-3">4 to 6 Hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-4 font-bold text-gray-700 text-[2.5vw]">
            <p>Sundays / Holidays: 6 to 8 hours lectures including test</p>
          </div>
        </div>

        {/* XII SCIENCE Section */}
        <div>
          <h2 className="text-center text-white font-bold text-base sm:text-lg md:text-3xl lg:text-4xl bg-[#E85129] px-3 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto rounded-md shadow-lg">
            XII SCIENCE
          </h2>

          {/* Bullet Points */}
          <div className="mt-6 px-4 max-w-3xl mx-auto text-[18px] sm:text-[20px] space-y-3">
            {[
              "Syllabus of H.S.C will be completed by November / December",
              "Two Preliminary Exam will be conducted",
              "Weekly Test",
              "Printed Notes will be provided as per Board requirements",
              "Specialized teachers for each subject",
              "Permanent progress report is maintained for students",
              "Periodic discussion on presentation of examination papers",
              "Special book for entrance exams",
              "We ensure 100% Results",
            ].map((point, index) => (
              <div key={index} className="relative pl-5">
                <span className="absolute left-0 top-3 w-2 h-2 rounded-full bg-black"></span>
                {point}
              </div>
            ))}
          </div>

          {/* Table: XII SCIENCE */}
          <div className="overflow-x-auto p-6">
            <div className="min-w-[500px] max-w-3xl mx-auto">
              <table className="table-auto w-full text-left rounded-xl overflow-hidden">
                <thead className="bg-[#eb4b26] text-white text-lg uppercase">
                  <tr>
                    <th className="px-4 py-3">Date of Commencement</th>
                    <th className="px-4 py-3">Batch</th>
                    <th className="px-4 py-3">Regular Timings</th>
                  </tr>
                </thead>
                <tbody className="bg-[#152f63] text-white text-lg">
                  <tr>
                    <td className="px-4 text-2xl py-3" rowSpan={4}>
                      1st Week <br /> of April
                    </td>
                    <td className="px-4 py-3">Team S₁</td>
                    <td className="px-4 py-3">7:15 am to 10:15 am</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Team S₂</td>
                    <td className="px-4 py-3">6:00 pm to 9:00 pm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Team S₁</td>
                    <td className="px-4 py-3">7:15 pm to 10:15 pm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Team K₂</td>
                    <td className="px-4 py-3">6:15 pm to 9:00 pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-4 font-bold text-gray-700 text-[2.5vw]">
            <p>Sundays / Holidays: 6 to 8 hours lectures including test</p>
          </div>
        </div>
      </div>
    </div>
  );
}
