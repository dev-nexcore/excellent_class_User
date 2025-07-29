"use client";
import React from "react";

// ✅ School Section Components
const schoolCardData = [
  {
    title: "VIII - IX - S.S.C",
  },
  {
    title: "ICSE (grade 8,9 & 10th)",
  },
  {
    title: "CBSE (grade 8,9 & 10th)",
  },
];

const scienceCardData = [
  {
    title: "XI + XII",
  },
  {
    title: "Entrance Exam",
  },
];

const commerceCardData = [
  {
    title: "XI + XII",
  },
  {
    title: "B.M.S+B.com+BAF",
  },
  {
    title: "C.A Foundation",
  },
];

const SchoolCard = ({ title }) => (
  <div className="w-80 bg-white rounded-xl overflow-hidden shadow-lg">
    {/* Orange Top Section */}
    <div className="bg-orange-400 px-6 py-12 text-center">
      <h2 className="text-black font-bold text-xl">
        {title}
      </h2>
    </div>
    {/* Blue Bottom Section */}
    <div className="bg-blue-900 px-6 py-8 text-center">
      <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">
        Know More
      </button>
    </div>
  </div>
);

const CourseSection = ({ title, data, cols = 3 }) => (
  <div className="bg-gray-100 py-16">
    {/* Header */}
    <div className="bg-blue-900 py-8 mb-16">
      <h2 className="text-3xl font-bold text-white text-center">
        {title}
      </h2>
    </div>
    {/* Cards Grid */}
    <div className={`max-w-6xl mx-auto px-4 grid grid-cols-1 ${cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 justify-items-center`}>
      {data.map((card, idx) => (
        <SchoolCard key={idx} title={card.title} />
      ))}
    </div>
  </div>
);

// ✅ Main Export
export default function CourcesHomePage () {
  return (
    <div className="min-h-screen bg-white">
      {/* School Section */}
      <CourseSection title="School Section" data={schoolCardData} cols={3} />
      {/* Science Section */}
      <CourseSection title="Science Section" data={scienceCardData} cols={2} />
      {/* Commerce Section */}
      <CourseSection title="Commerce Section" data={commerceCardData} cols={3} />
    </div>
  );
}