import React from "react";

// Card Component
const TopperCard = ({ name, percentage, achievement, rank, image }) => (
  <div className="w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden">
    {/* Top Image with Blue BG */}
    <div className="relative bg-[#2B4C8C] h-[280px] flex items-center justify-center rounded-t-2xl">
      <img
        src={image}
        alt={name}
        className="h-[250px] w-auto object-contain"
      />
    </div>

    {/* Orange Middle Section */}
    <div className="bg-[#FF8C00] px-6 py-3 text-center relative rounded-lg mx-4 -mt-4 z-10">
      <h3 className="text-black font-bold text-lg mb-1">{name}</h3>
      <p className="text-black font-bold text-base">{percentage}</p>
    </div>

    {/* Bottom Red Section */}
    <div className="bg-[#E85A2B] text-white text-center py-4 mt-2 rounded-b-2xl">
      <p className="text-sm font-semibold">{rank} in {achievement}</p>
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

// Data matching the image
const toppersData = [
  {
    name: "Sana",
    percentage: "92.60%",
    achievement: "Holy Cross",
    rank: "2nd",
    image: "/Result images/image 12 (1).png",
  },
  {
    name: "Sana", 
    percentage: "95.60%",
    achievement: "Karthika",
    rank: "1st",
    image: "/Result images/image 12 (1).png",
  },
  {
    name: "Sana",
    percentage: "91.60%",
    achievement: "Micheal", 
    rank: "3rd",
    image: "/Result images/image 12 (1).png",
  },
];

// Main Component
export default function TopperofX() {
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