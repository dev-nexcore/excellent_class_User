"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInTop = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// Card Component
const TopperCard = ({ name, percentage, achievement, image, animation }) => (
  <motion.div
    className="w-[260px] rounded-[16px] shadow-xl bg-[#23306e] flex flex-col items-center pt-8 pb-0 overflow-visible relative"
    variants={animation}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <img
      src={image}
      alt="Student"
      className="w-[150px] h-[200px] object-cover rounded-xl shadow-lg"
    />
    <div className="bg-[#f8b929] rounded-xl text-white font-bold text-center py-3 px-6 shadow-md -mt-8 z-10">
      <div className="text-lg">{name}</div>
      <div className="text-sm">{percentage}</div>
    </div>
    <div className="bg-[#ef5b25] w-full rounded-b-[16px] mt-6 py-4 flex justify-center items-center">
      <p className="text-white text-base font-semibold text-center px-3">
        {achievement}
      </p>
    </div>
  </motion.div>
);

// Section Component
const TopperSection = ({ data }) => {
  return (
    <div className="py-16">
      <div className="flex justify-center items-end gap-6 flex-wrap min-h-[270px] transition-all duration-700">
        {data.map((topper, index) => {
          let animationVariant =
            index === 0
              ? slideInLeft
              : index === 1
              ? slideInTop
              : slideInRight;

          return (
            <TopperCard
              key={index}
              {...topper}
              animation={animationVariant}
            />
          );
        })}
      </div>
    </div>
  );
};

// Sample Data
const toppersData = [
  {
    name: "Sana",
    percentage: "92.60%",
    achievement: "2nd in Holy Cross",
    image: "/Result images/result photo.png",
  },
  {
    name: "sana",
    percentage: "95.60%",
    achievement: "1st in Karthika",
    image: "/Result images/result photo.png",
  },
  {
    name: "sana",
    percentage: "91.60%",
    achievement: "3rd in Micheal",
    image: "/Result images/result photo.png",
  },
];

// Page Component
export default function TopperofHSCcommerce() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-[#23306e] py-10 mb-12 shadow">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Toppers of HSC Commerce 2025
        </h1>
      </div>

      {/* Cards */}
      <TopperSection data={toppersData} />

      {/* CTA */}
      <div className="flex justify-center pb-14 pt-8">
        <button className="px-8 py-3 font-semibold text-white bg-[#23306e] rounded-lg shadow hover:opacity-90 transition-opacity">
          Know More
        </button>
      </div>
    </div>
  );
}
