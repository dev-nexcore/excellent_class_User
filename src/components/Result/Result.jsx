      "use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Topper card component
const TopperCard = ({ name, percentage, school, rank, image, height, imageSize }) => {
  return (
    <div
      className="relative flex flex-col items-center w-[90vw] max-w-[250px] bg-[#1E2F65] rounded-xl overflow-visible shadow-lg"
      style={{ minHeight: `${height}px` }}
    >
      {/* Topper Image */}
      <div className="absolute -top-22 z-20">
        <Image
          src={image}
          alt={name}
          width={imageSize}
          height={imageSize * 2.3}
          className="object-contain"
        />
      </div>

      {/* Orange bar at bottom */}
      <div className="absolute bottom-0 w-full h-[60px] bg-[#F04F23] rounded-b-xl"></div>

      {/* Yellow name box */}
      <div className="absolute bottom-[32px] z-30 bg-[#FEBB25] px-4 py-2 rounded-lg text-center w-[180px]">
        <p className="text-black font-bold text-[16px] leading-snug">{name}</p>
        <p className="text-black font-semibold text-[14px]">{percentage}%</p>
      </div>

      {/* Rank and School Text */}
      <div className="absolute bottom-2 z-30 text-white text-sm font-semibold text-center px-2 leading-tight">
        {rank} in <span className="font-bold">{school}</span>
      </div>
    </div>
  );
};

// Final exportable Result section with animations
export default function Result() {
  const [toppers, setToppers] = useState([]);
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/toppers/getTopper`;

const getTopperData = async () => {
  try {
    const response = await axios.get(url);

    // Group data by category
    const grouped = response.data.reduce((acc, item, index) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push({
        name: item.name,
        percentage: item.percentage,
        school: item.course, // ya item.trade agar tumhara trade field use ho
        rank: `${acc[item.category].length + 1}st`,
        image: "/img/girl.png",
        height: acc[item.category].length === 1 ? 280 : 243,
        imageSize: acc[item.category].length === 1 ? 184 : 160,
      });
      return acc;
    }, {});

    setToppers(grouped);
  } catch (error) {
    console.log("Error fetching toppers:", error.message);
  }
};


  useEffect(() => {
    getTopperData();
  }, []);

  return (
 <div className="flex flex-col gap-10">
  {Object.keys(toppers).map((category) => (
    <div key={category}>
      {/* Heading */}
      <div className={`w-full py-6 ${category.includes("Science") ? "bg-[#F04F23]" : "bg-[#2B4C8C]"}`}>
        <h1 className="text-white text-center text-3xl font-bold">
          Toppers of {category} 2025
        </h1>
      </div>

      {/* Cards */}
      <div className="flex justify-center md:justify-evenly items-end flex-wrap gap-x-6 gap-y-15 md:gap-4 py-20 px-4 bg-[#F5F7FA]">
        {toppers[category].map((topper, index) => {
          let initial = {};
          if (index === 0) initial = { x: -200, opacity: 0 };
          else if (index === 1) initial = { y: -200, opacity: 0 };
          else if (index === 2) initial = { x: 200, opacity: 0 };

          return (
            <motion.div
              key={`${category}-${index}`}
              initial={initial}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TopperCard {...topper} />
            </motion.div>
          );
        })}
      </div>
    </div>
  ))}
</div>

  );
}
