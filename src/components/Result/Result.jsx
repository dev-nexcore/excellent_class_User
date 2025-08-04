'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

// Topper data with different heights (middle one taller)
const toppers = [
  {
    name: 'Sana',
    percentage: '92.60%',
    school: 'Holy Cross',
    rank: '2nd',
    image: '/img/girl.png',
    height: 240,
    imageSize: 160,
  },
  {
    name: 'Sana',
    percentage: '95.60%',
    school: 'Karthika',
    rank: '1st',
    image: '/img/girl.png',
    height: 280,
    imageSize: 200,
  },
  {
    name: 'Sana',
    percentage: '91.60%',
    school: 'Micheal',
    rank: '3rd',
    image: '/img/girl.png',
    height: 240,
    imageSize: 160,
  },
];

// Topper card component
const TopperCard = ({ name, percentage, school, rank, image, height, imageSize }) => {
  return (
    <div
      className="relative flex flex-col items-center w-[90vw] max-w-[250px] bg-[#1E2F65] rounded-xl overflow-visible shadow-lg"
      style={{ minHeight: `${height}px` }}
    >
      {/* Topper Image */}
      <div className="absolute -top-24 z-20">
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
        <p className="text-black font-semibold text-[14px]">{percentage}</p>
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
  return (
    <div className="min-h-screen bg-white">
      {/* heading section for x 2025 */}
      <div className="w-full py-6 bg-[#2B4C8C]">
        <h1 className="text-white text-center text-3xl font-bold">Toppers of X. 2025</h1>
      </div>

      {/* Cards Container for x 2025 */}
      <div className="flex justify-center md:justify-evenly items-end flex-wrap gap-x-6 gap-y-15 md:gap-4 py-20 px-4 bg-[#F5F7FA]">

        {toppers.map((topper, index) => {
          let initial = {};
          if (index === 0) initial = { x: -200, opacity: 0 };
          else if (index === 1) initial = { y: -200, opacity: 0 };
          else if (index === 2) initial = { x: 200, opacity: 0 };

          return (
            <motion.div
              key={index}
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

      {/* heading section for hsc science 2025 */}
      <div className="w-full py-6 bg-[#F04F23]">
        <h1 className="text-white text-center text-3xl font-bold">Toppers of HSC Science 2025</h1>
      </div>

      {/* Cards Container for hsc science 2025 */}
       <div className="flex justify-center md:justify-evenly items-end flex-wrap gap-x-6 gap-y-15 md:gap-4 py-20 px-4 bg-[#F5F7FA]">

        {toppers.map((topper, index) => {
          let initial = {};
          if (index === 0) initial = { x: -200, opacity: 0 };
          else if (index === 1) initial = { y: -200, opacity: 0 };
          else if (index === 2) initial = { x: 200, opacity: 0 };

          return (
            <motion.div
              key={index}
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

      {/* heading section for hsc commerce 2025 */}
      <div className="w-full py-6 bg-[#2B4C8C]">
        <h1 className="text-white text-center text-3xl font-bold">Toppers of HSC Commerce 2025</h1>
      </div>

      {/* Cards Container for hsc commerce 2025 */}
       <div className="flex justify-center md:justify-evenly items-end flex-wrap gap-x-6 gap-y-15 md:gap-4 py-20 px-4 bg-[#F5F7FA]">

        {toppers.map((topper, index) => {
          let initial = {};
          if (index === 0) initial = { x: -200, opacity: 0 };
          else if (index === 1) initial = { y: -200, opacity: 0 };
          else if (index === 2) initial = { x: 200, opacity: 0 };

          return (
            <motion.div
              key={index}
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
  );
}
