"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StreamAndCourses() {
  const courses = [
    {
      title: "SCHOOL SECTION",
      image: "/Home/Rectangle 22.png",
      desc: "State Board / ICSE Board / CBSE Board",
      link: "/courses",
    },
    {
      title: "SCIENCE SECTION",
      image: "/Home/Rectangle 24.png",
      desc: "XI & XII & Entrance",
      link: "/courses/ICSE",
    },
    {
      title: "COMMERCE SECTION",
      image: "/Home/Rectangle 23.png",
      desc: "XI, XII, F.Y to T.Y.B.Com, BMS, BAF",
      link: "/courses/B.M.S+B.com+BAF",
    },
  ];

  // Entry animation based on index
  const getInitialAnimation = (idx) => {
    if (idx === 0) return { x: -100, opacity: 0 }; // left
    if (idx === 1) return { y: -100, opacity: 0 }; // top
    if (idx === 2) return { x: 100, opacity: 0 }; // right
  };

  return (
    <section className="bg-white py-2">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Stream and Courses
        </h2>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={getInitialAnimation(idx)}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 90,
            }}
            className="rounded-lg overflow-hidden shadow-md bg-[#D9D9D9] "
          >
            {/* Title */}
            <div className="bg-[#20356B] text-white text-center py-5 font-bold text-sm tracking-wide">
              {course.title}
            </div>

            {/* Image */}
            <div className="bg-[#e94f1d] px-4 py-3 flex justify-center h-[250px]">
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={250}
                className="rounded-md object-cover h-full w-full max-w-[300px]"
              />
            </div>

            {/* Description */}
            <div className="text-center text-black font-medium py-3 text-sm px-2 bg-gray-100">
              {course.desc}
            </div>

            {/* Button */}
            <Link href={course.link} >
              <div className="bg-[#20356B] py-5 text-white text-center font-semibold text-sm tracking-wider rounded-b-lg cursor-pointer hover:bg-[#1a2a5a] transition">
                ENQUIRE NOW
                <span className="inline-block ml-2">&#10132;</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
