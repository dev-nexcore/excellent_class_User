import React from "react";

// Card Component
const TopperCard = ({ name, percentage, achievement, rank, image }) => (
  <div className="w-[280px] rounded-2xl shadow-lg overflow-visible relative mt-28">
    {/* Overflowing Image */}
    <img 
      src={image}
      alt={name}
      className="absolute -top-24 left-1/2 transform -translate-x-1/2 h-[220px] w-auto object-contain z-30"
    />
    
    {/* Card Content Container - no white background */}
    <div className="relative">
      {/* Top Blue Section */}
      <div className="bg-[#2B4C8C] h-[100px] rounded-t-2xl"></div>
      
      {/* Orange Middle Section */}
      <div className="bg-[#FF8C00] px-4 py-3 text-center relative rounded-lg mx-2 -mt-2 z-20">
        <h3 className="text-black font-bold text-lg mb-1">{name}</h3>
        <p className="text-black font-bold text-base">{percentage}</p>
      </div>
      
      {/* Bottom Red Section - extends to fill all remaining space */}
      <div className="bg-[#E85A2B] text-white text-center py-8 rounded-b-2xl -mt-2">
        <p className="text-sm font-semibold">{rank} in {achievement}</p>
      </div>
    </div>
  </div>
);

// Section Renderer
const TopperSection = ({ data }) => (
  <div className="py-12">
    <div className="flex justify-center items-center gap-8 flex-wrap">
      {data.map((topper, index) => (
        <TopperCard key={index} {...topper} />
      ))}
    </div>
  </div>
);

// Data without images
const toppersData = [
  {
    name: "Sana",
    percentage: "92.60%",
    achievement: "Holy Cross",
    rank: "2nd",
  },
  {
    name: "Sana", 
    percentage: "95.60%",
    achievement: "Karthika",
    rank: "1st",
  },
  {
    name: "Sana",
    percentage: "91.60%",
    achievement: "Micheal", 
    rank: "3rd",
  },
];

// Main Component
export default function TopperofHSCcommerce() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-[#2B4C8C] py-6">
        <h1 className="text-white text-center text-3xl font-bold">
          Toppers of X. 2025
        </h1>
      </div>
      
      {/* Cards */}
      <TopperSection data={toppersData} />
    </div>
  );
}