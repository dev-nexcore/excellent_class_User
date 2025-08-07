"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <section className="relative w-full bg-white overflow-hidden mt-[2vw] mb-[20px]">
      {/* Heading */}
      <div className="relative z-20 pt-16 pb-6 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#0f1e49]">
          Why Choose Us?
        </h2>
      </div>

      <div className="relative">
        {/* Orange Strip Behind SVG */}
        <div className="absolute top-[70px] left-0 right-0 h-[90px] sm:h-[140px] md:h-[150px] bg-[#e94f1d] z-0" />

        {/* SVG Wave Background */}
        <div className="min-h-screen relative overflow-hidden">
          {/* SVG Background */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              className="absolute inset-0 w-full h-full object-cover"
              viewBox="0 0 1728 748"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M-2.66668 64.4998C211.833 -136.501 1427 213.5 1725.33 55.9999C2023.67 -101.5 1725.33 747.629 1725.33 747.629H-2.66668C-2.66668 747.629 -217.167 265.501 -2.66668 64.4998Z"
                fill="#20356B"
              />
            </svg>
          </div>

          {/* Main Content Section */}
          <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image Section - Top on Mobile */}
                <div className="flex justify-center lg:justify-start order-1 lg:order-none">
                  <div className="relative w-[200px] sm:w-[250px] md:w-[400px] lg:max-w-lg">
                    <div className="aspect-square relative">
                      <Image
                        src="/Rectangle17.png"
                        alt="Award"
                        fill
                        className="object-cover rounded-2xl border-[12px] border-white shadow-lg"
                        priority
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Section - Below on Mobile */}
                <div className="text-white space-y-6 order-2">
                  <p className="text-base leading-5 lg:leading-8 md:leading-10 sm:leading-8 sm:text-lg lg:text-2xl opacity-90">
                    We at Excellent strongly believe that the best faculty
                    creates the best students and that is why we have a faculty
                    who are masters in their subjects. We offer our students
                    expertise that they would never experience anywhere else.
                    We invest in training and developing their skills, thus
                    providing our students a complete upgraded education.
                    Qualified and experienced faculty accelerate the learning
                    process.
                  </p>

                  {/* Call to Action Buttons */}
                  {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="px-6 py-3 bg-[#e94f1d] text-white rounded-lg font-semibold hover:bg-[#d63f17] transition-colors">
                      Learn More
                    </button>
                    <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#20356B] transition-colors">
                      Contact Us
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
        </div>
      </div>
      {/* Main Content */}
    </section>
  );
}
