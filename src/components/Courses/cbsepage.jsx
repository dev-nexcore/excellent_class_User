"use client";
import React from "react";

export default function CBSEPage() {
  return (
    <div className="relative bg-white min-h-screen text-gray-800 px-4 py-10 overflow-hidden">
      
      {/* Oval Background */}
      <div className="vertical-oval-bg"></div>
      
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">CBSE BATCH DETAILS FOR VIII, IX & X</h1>
      </div>

      {/* Banner Images */}
      <div className="mt-6 px-4 space-y-8">
        <img
          src="\course image folder\CourseCBSE1.png"
          alt="CBSE Toppers Banner 1"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
          style={{
            border: '20px solid #233B77',
            outline: '4px solid #1a237e',
            outlineOffset: '-4px'
          }}
        />
        
        <img
          src="\course image folder\CourseCBSE2.png"
          alt="CBSE Toppers Banner 2"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
          style={{
            border: '20px solid #233B77',
            outline: '4px solid #1a237e',
            outlineOffset: '-4px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10 mt-10">
        
        {/* Toppers Section - This will be the actual image */}
     

        {/* Main Content Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-4 text-sm leading-relaxed">
            <p className="text-justify">
              <span className="font-semibold">Excellent Classes</span> has been catering to the S.S.C. students from the past six years and has established itself as one of the most sought institutions for secondary education in Virar. We have been running our S.S.C. programs with changing times and parent's opting for CBSE Board for their children, we have embarked on a new wing providing education for CBSE Board. Since the past decade thousands of students have excelled under our guidance and achieved a different milestone all the management. We have a dedicated team of teachers who have been trained professionally to carter the needs of our CBSE students.
            </p>
            
            <ul className="space-y-2">
              <li>• We have a separate section for CBSE in fully and sophisticated branches.</li>
              <li>• Scientific focus and Subject and students. A optimal focus where each student can learn to their potential.</li>
              <li>• Monitoring progress of each student and some of our falling faculties including daily task books for those and more.</li>
              <li>• Guidance and tests for Students who build tips and advice from our counselor for their better performance in examinations.</li>
              <li>• Mock test and preliminary examinations will be conducted as per the CBSE board pattern.</li>
              <li>• We focus on understanding concepts giving Regular revision - teachers provide weekly tests which will serve as a base for better performance. We take special emphasis on all fundamental chapters and subject topics ranging and studying vocabulary specially designed.</li>
              <li>• The preliminary exams are per the CBSE board pattern and question paper is set in the same format.</li>
              <li>• Syllabus of X will be completed by November.</li>
              <li>• The preliminary exams are per the CBSE board pattern specially for standard X in the month of December.</li>
              <li>• Regular parents - teachers interaction sessions, seeking parents feedback.</li>
              <li>• Time to time interaction with parents regarding their child performance and attendance.</li>
              <li>• Specialised staff for each subject trained teachers for each subject</li>
              <li>• Individual attention to each student through well organized SMS service for providing daily updates of their child performance and test marks of their child</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}