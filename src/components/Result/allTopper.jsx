'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';

// Custom hook to detect if an element is in view
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

// Topper Card Component
// Topper Card Component
const TopperCard = ({ name, percentage, achievement, rank, image, animationClass }) => (
  <div className={`flex flex-col items-center relative ${animationClass}`}>
    {/* Student Image - separate from card, overlaps card */}
    <div className="relative z-30" style={{ height: 140, marginBottom: -80 }}>
      <Image
        src={image || "/girl.png"}
        alt={name}
        width={140}
        height={223}
        className="object-contain"
        priority
      />
    </div>

    {/* Card */}
    <div
      className={`relative w-[200px] h-[280px] rounded-[16px] shadow-xl overflow-visible bg-[#1E2F65] flex flex-col items-center justify-end transition-transform duration-300`}
    >
      {/* Orange Bottom Background (updated to match Image 1) */}
      <div className="absolute bottom-0 w-full h-[34%] bg-[#F04F23] rounded-b-[16px] shadow-md z-10"></div>

      {/* Yellow Info Box */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-30 bg-[#FEBB25] px-3 py-2 rounded-[10px] shadow-lg text-center w-[150px]"
        style={{ bottom: '28%', height: '18%' }}
      >
        <p className="text-black font-bold text-[16px] leading-snug">{name}</p>
        <p className="text-black font-semibold text-[14px]">{percentage}</p>
      </div>

      {/* Achievement Text */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-30 text-white text-[13px] font-semibold text-center mb-2 px-2 leading-tight"
        style={{ bottom: '2%' }}
      >
        {rank} in <span className="font-bold">{achievement}</span>
      </div>
    </div>
  </div>
);


// Section Renderer
const TopperSection = ({ data, heading, bgColor }) => {
  const animationClasses = [
    "animate-slide-in-left",
    "animate-slide-in-top",
    "animate-slide-in-right"
  ];
  const [ref, inView] = useInView(0.2);

  return (
    <div className="mb-10" ref={ref}>
      <div className={`w-full py-6 ${bgColor}`}>
        <h1 className="text-white text-center text-3xl font-bold">{heading}</h1>
      </div>
      <div className="py-8 bg-[#F5F7FA]">
        <div className="flex justify-center items-center gap-8 flex-wrap px-4">
          {data.map((topper, index) => (
            <TopperCard
              key={index}
              {...topper}
              animationClass={inView ? animationClasses[index] || '' : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Data for each section
const toppersX = [
  { name: "Sana", percentage: "92.60%", achievement: "Holy Cross", rank: "2nd", image: "/Result images/image12 (1).png" },
  { name: "Riya", percentage: "95.60%", achievement: "Karthika", rank: "1st", image: "/Result images/image12 (1).png" },
  { name: "Ayesha", percentage: "91.60%", achievement: "Micheal", rank: "3rd", image: "/Result images/image12 (1).png" },
];
const toppersScience = [
  { name: "Sana", percentage: "92.60%", achievement: "Holy Cross", rank: "2nd", image: "/Result images/image12 (1).png" },
  { name: "Sana", percentage: "95.60%", achievement: "Karthika", rank: "1st", image: "/Result images/image12 (1).png" },
  { name: "Sana", percentage: "91.60%", achievement: "Micheal", rank: "3rd", image: "/Result images/image12 (1).png" },
];
const toppersCommerce = [
  { name: "Sana", percentage: "92.60%", achievement: "Holy Cross", rank: "2nd", image: "/Result images/image12 (1).png" },
  { name: "Sana", percentage: "95.60%", achievement: "Karthika", rank: "1st", image: "/Result images/image12 (1).png" },
  { name: "Sana", percentage: "91.60%", achievement: "Micheal", rank: "3rd", image: "/Result images/image12 (1).png" },
];

// Main Page Component
export default function AllToppersPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopperSection
        data={toppersX}
        heading="Toppers of X. 2025"
        bgColor="bg-[#2B4C8C]"
      />
      <TopperSection
        data={toppersScience}
        heading="Toppers of HSC Science 2025"
        bgColor="bg-[#E85222]"
      />
      <TopperSection
        data={toppersCommerce}
        heading="Toppers of HSC Commerce 2025"
        bgColor="bg-[#2B4C8C]"
      />
    </div>
  );
}