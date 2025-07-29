// StreamAndCourses.js
"use client";
import Image from "next/image";
import React from "react";

export default function StreamAndCourses() {
  const courses = [
    {
      title: "SCHOOL SECTION",
      image: "/Gallery/Rectangle157.png",
      desc: "State Board / ICSE Board / CBSE Board",
    },
    {
      title: "SCIENCE SECTION",
      image: "/Gallery/Rectangle157.png",
      desc: "XI & XII & Entrance",
    },
    {
      title: "COMMERCE SECTION",
      image: "/Gallery/Rectangle157.png",
      desc: "XI, XII, F.Y to T.Y.B.Com, BMS, BAF",
    },
  ];

  return (
    <section className="bg-white py-6"> {/* padding kam kiya */}
      <div className="text-center mb-8"> {/* margin bottom thoda kam kiya */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Stream and Courses
        </h2>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-md bg-white border"
          >
            {/* Title */}
            <div className="bg-[#20356B] text-white text-center py-5 font-bold text-sm tracking-wide">
              {course.title}
            </div>

            {/* Image */}
            <div className="bg-[#e94f1d] px-4 py-3 flex justify-center">
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
            </div>

            {/* Description */}
            <div className="text-center text-black font-medium py-3 text-sm px-2 bg-gray-100">
              {course.desc}
            </div>

            {/* Button */}
            <div className="bg-[#20356B] py-5 text-white text-center font-semibold text-sm tracking-wider rounded-b-lg">
              ENQUIRE NOW
              <span className="inline-block ml-2">&#10132;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
