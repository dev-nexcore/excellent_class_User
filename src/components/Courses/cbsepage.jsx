"use client";
import React from "react";

export default function CBSEPage() {
  return (
    <div className="relative mt-[20px] bg-white min-h-screen text-gray-800 px-2 sm:px-4 md:px-6 py-6 md:py-10 overflow-hidden">

      {/* 🔶 Oval Background Shape */}
      <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-[86vw] h-[580vw] 
             sm:w-[84vw] sm:h-[270vw] 
             md:w-[85vw] md:h-[260vw] 
             lg:w-[70vw] lg:h-[188vw] 
             rounded-full z-0"
  style={{ background: '#E85122', opacity: '0.1' }}
></div>
      {/* Main Title */}
      <div className="text-center mb-6 sm:mb-8 mt-[-20px] relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-gray-800 mb-4 font-[poppins]">
          CBSE BATCH DETAILS FOR VIII, IX & X
        </h1>
      </div>

      {/* Banner Images */}
      <div className="mt-6 px-2 sm:px-4 space-y-6 sm:space-y-8 relative z-10">
        <img
          src="\course image folder\CourseCBSE1.png"
          alt="CBSE Toppers Banner 1"
          className="w-full max-w-[900px] mx-auto rounded-lg shadow-md"
          style={{
            border: "12px solid #233B77",
            outline: "3px solid #1a237e",
            outlineOffset: "-4px",
          }}
        />

        <img
          src="\course image folder\CourseCBSE2.png"
          alt="CBSE Toppers Banner 2"
          className="w-full max-w-[1000px] mx-auto rounded-lg shadow-md"
          style={{
            border: "12px solid #233B77",
            outline: "3px solid #1a237e",
            outlineOffset: "-4px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16 relative z-10 mt-10">
        {/* Content Section */}
        <div className="font-[poppins]  px-4 sm:px-6 md:px-8">
          <p className="text-justify text-lg sm:text-xl md:text-2xl leading-relaxed">
            Excellent Classes has been catering to the S.S.C. students from the past 30 years and producing spectacular results. We are also imparting education to post S.S.C. students in XI, XII (Science and Commerce) for undergraduate programs. With changing times and parents opting for CBSE Board for their children, we have ventured into imparting education for CBSE Board. We understand that a different board requires a set of teachers with unique skills and a different mindset of the management. We have a dedicated team of teachers with vast relevant experience to cater the needs of our CBSE students.
          </p>

          {/* Custom Styled Bullets */}
          <ul className="space-y-4 text-lg sm:text-xl md:text-2xl leading-snug mt-6">
            {[
              "We have a separate section for CBSE in Kurla and Kalina Branch, School specific focus for VIII and IX std students. A team of back office staff monitoring progress of each student and some of our other features include – FOR VIII, IX & X Batch Strength – 10 students Two tests per week Syllabus of X will be completed by November Three preliminary exams as per the CBSE board pattern",
              "Separate sessions for problem solving, regular parents–teachers interaction sessions, seeking parents feedback. Well equipped air conditioned class rooms and audio visual system. Specialised and qualified CBSE teachers for each subject. Intimation of scores in weekly test and absenteeism through SMS. Parents can log in to our website to check the attendance & weekly test marks of their child.",
              "Batch Strength – 10 to 12 students.",
              "Two tests per week.",
              "Syllabus of X will be completed by November.",
              "Three preliminary exams as per the CBSE board pattern.",
              "Separate sessions for problem solving.",
              "Regular parents–teachers interaction sessions, seeking parents feedback.",
              "Well equipped air conditioned class rooms and audio visual system.",
              "Specialised and qualified CBSE teachers for each subject.",
              "Intimation of scores in weekly test and absenteeism through SMS.",
              "Parents can log in to our website to check the attendance & weekly test marks of their child.",
            ].map((point, index) => (
              <li
                key={index}
                className="relative pl-5 before:absolute before:top-3 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-black"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}