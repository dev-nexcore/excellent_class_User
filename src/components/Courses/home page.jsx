"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HomeTestimonial from "../home/HomeTestimonial";

// Animation class assignment helper
function getAnimationClass(idx, total) {
  if (total === 2) {
    // For 2 cards: left, right
    return ["animate-slide-in-left", "animate-slide-in-right"][idx] || "animate-fade-in";
  }
  if (total === 3) {
    // For 3 cards: left, top, right
    return ["animate-slide-in-left", "animate-slide-in-top", "animate-slide-in-right"][idx] || "animate-fade-in";
  }
  // For more, fallback to fade-in
  return "animate-fade-in";
}

// Custom hook for on-scroll animation
function useInView(threshold = 0.2) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Add slug/href for each course (NO SPACES!)
const schoolCardData = [
  { title: "VIII - IX - S.S.C", href: "/courses/VIII-IX-SSC" },
  { title: "ICSE (grade 8,9 & 10th)", href: "/courses/ICSE" },
  { title: "CBSE (grade 8,9 & 10th)", href: "/courses/CBSE" },
];
const scienceCardData = [
  { title: "XI + XII", href: "/courses/XI-XII-Science" },
  { title: "Entrance Exam", href: "/courses/Entrance-Exam" },
];
const commerceCardData = [
  { title: "XI + XII", href: "/courses/XI-XII-Commerce" },
  { title: "B.M.S+B.com+BAF", href: "/courses/B.M.S+B.com+BAF" },
  { title: "C.A Foundation", href: "/courses/C.A-Foundation" },
];

const SchoolCard = ({ title, animationClass, href }) => (
  <div className={`w-full max-w-xs bg-white rounded-xl overflow-hidden shadow-lg ${animationClass}`}>
    {/* Orange Top Section */}
    <div className="bg-orange-400 px-6 py-10 text-center">
      <h2 className="text-black font-bold text-lg sm:text-xl">
        {title}
      </h2>
    </div>
    {/* Blue Bottom Section */}
    <div className="bg-blue-900 px-6 py-6 text-center">
      <Link href={href}>
        <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">
          Know More
        </button>
      </Link>
    </div>
  </div>
);

const CourseSection = ({ title, data, cols = 3, animateOnScroll = false }) => {
  const [ref, inView] = animateOnScroll ? useInView(0.2) : [null, true];
  // For science section, use only 2 columns at all breakpoints
  const gridCols =
    title === "Science Section"
      ? "sm:grid-cols-2"
      : cols === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 md:grid-cols-3";
  return (
    <div className="bg-gray-100 pb-9 " ref={ref}>
      {/* Header */}
      <div className="bg-blue-900 py-6 sm:py-8  sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
          {title}
        </h2>
      </div>
      {/* Cards Grid */}
      <div
        className={`max-w-6xl mx-auto px-2  py-4 sm:px-4 grid grid-cols-1 ${gridCols} gap-4 sm:gap-6 md:gap-8 justify-items-center w-full`}
      >
        {data.map((card, idx) => (
          <SchoolCard
            key={idx}
            title={card.title}
            href={card.href}
            animationClass={inView ? getAnimationClass(idx, data.length) : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default function CourcesHomePage () {
  return (
    <div className="min-h-screen bg-white">
      {/* School Section with on-scroll animation */}
      <CourseSection title="School Section" data={schoolCardData} cols={3} animateOnScroll={true} />
      {/* Science Section with on-scroll animation */}
      <CourseSection title="Science Section" data={scienceCardData} cols={2} animateOnScroll={true} />
      {/* Commerce Section with on-scroll animation */}
      <CourseSection title="Commerce Section" data={commerceCardData} cols={3} animateOnScroll={true} />
    </div>
  );
}
