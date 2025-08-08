'use client';
import React from 'react';

export default function ICSEpage() {
  return (
    <div className="relative w-full mt-[20px] min-h-screen bg-white overflow-hidden">

      {/* 🔶 Oval Background Shape */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-[83vw] h-[400vw] 
             sm:w-[80vw] sm:h-[190vw] 
             md:w-[80vw] md:h-[180vw] 
             lg:w-[70vw] lg:h-[98vw] 
             rounded-full z-0"
        style={{ background: '#E85122', opacity: '0.1' }}
      ></div>

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 font-[Poppins]">

        {/* Header Title */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-black text-center leading-tight">
            ICSE BATCH DETAILS FOR GRADE 8, 9 & 10
          </h1>
        </div>

        {/* Toppers Image */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <div className="border-4 border-black rounded-lg overflow-hidden shadow-lg w-full max-w-4xl">
            <img
              src="/course image folder/CourseICSE.png"
              alt="Grade 10 Toppers 2018-2022"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Batch Details Content */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl space-y-2 text-black leading-relaxed space-y-4 m-10">
          <p>
            Excellent Classes has been catering to the S.S.C. students from the past 33 years and producing spectacular results. We are also imparting education to post S.S.C. students in XI, XII (Science and Commerce) for undergraduate programs. With changing times and parents opting for ICSE Board for their children, we have ventured into imparting education for ICSE Board from the last 9 years.
          </p>

          {/* Updated Bullet Points with custom bullets */}
          <ul className="space-y-4">
            {[
              "We understand that a different board requires set of teachers with unique skills and a different mindset of the management. We have a dedicated team of teachers with vast relevant experience to cater the needs of our ICSE students.",
              "We have a separate section for ICSE in Kohinoor Mall, exclusively for our ICSE students. School specific focus for Grade 8, 9 & 10. A team of back office staff monitoring progress of each student and some of our other features include –",
              "Batch Strength – 15 to 20 students",
              "Two tests per week",
              "Syllabus of X will be completed by November",
              "Three preliminary exams as per the CBSE board pattern",
              "Separate sessions for problem solving",
              "Regular parents – teachers interaction sessions, seeking parents feedback",
              "Well equipped air conditioned class rooms and audio visual system",
              "Intimation of scores in weekly test and absenteeism through SMS",
              "Parents can log in to our website to check the attendance & weekly test marks of their child"
            ].map((point, index) => (
              <li
                key={index}
                className="relative pl-5 before:absolute before:top-4 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-black"
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