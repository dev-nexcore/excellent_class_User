'use client';
import React from 'react';

export default function ICSEpage() {
  return (
    <div className="relative w-full min-h-screen bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <div className="relative max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Background Ellipse - exact match to screenshot height */}
        <div
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[800px] sm:w-[900px] md:w-[1000px] lg:w-[1200px] xl:w-[1400px] h-[700px] sm:h-[800px] md:h-[900px] lg:h-[1000px] xl:h-[1100px] rounded-full z-0"
          style={{ background: '#E85122', opacity: '0.12' }}
        ></div>

        {/* Header Title - adjusted to stay on one line */}
        <div className="relative z-10 flex justify-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-black mt-3 sm:mt-4 md:mt-5 whitespace-nowrap text-center">
            ICSE BATCH DETAILS FOR Grade 8, 9 & 10
          </h1>
        </div>

        {/* Toppers Image */}
        <div className="relative z-10 flex justify-center mb-6 sm:mb-8 md:mb-10">
          <div className="border-4 border-black rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/api/placeholder/800/400" 
              alt="Grade 10 Toppers 2018-2022" 
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>

        {/* Batch Details */}
        <div className="relative z-10 mb-8 sm:mb-10 md:mb-12">
          <div className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
            <p className="mb-4">
              Excellence happens here every passing year. At ABC Academy, we are committed to help each student to achieve academic excellence and reach their potential. We believe that education is not just about high grades and accomplishments, but also about developing character, confidence, and critical thinking skills.
            </p>
            
            <p className="mb-4">
              Our teaching philosophy is built around individual attention and small batch sizes. This allows our experienced faculty to understand each student's learning style and adapt their teaching methods accordingly. We focus on building strong fundamentals and encourage active participation in all learning activities.
            </p>
            
            <p className="mb-4">
              We understand that a different learning style set of students with similar academic level will lead and different rate from their performance, that's why our faculty are trained to adapt different teaching methodologies to meet the needs of our ICSE students.
            </p>
            
            <p className="mb-4">
              Our ICSE program includes regular tests and assignments that are designed to track each student's progress and provide timely feedback. This helps students identify their strengths and areas for improvement, enabling them to focus their efforts more effectively.
            </p>
            
            <div className="space-y-2 mb-4">
              <p>• Study materials designed to enhance learning</p>
              <p>• Practice papers and previous year question papers</p>
              <p>• Mock tests to simulate board exam conditions</p>
              <p>• Individual attention to address specific learning needs</p>
              <p>• Flexible timings for student convenience</p>
              <p>• Experienced qualified teaching staff</p>
              <p>• Regular parent teacher meetings to track progress</p>
              <p>• Interactive sessions for enhanced understanding</p>
              <p>• Conceptual of current in healthy way and development through skills</p>
              <p>• All syllabus topics will be completed as soon on or before of the time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}