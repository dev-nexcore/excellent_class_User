"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section className="relative w-full bg-white overflow-hidden mt-[2vw] mb-[20px]">
      {/* Heading */}
      <div className="relative z-20 pt-8 md:pt-16 pb-4 md:pb-6 text-center px-4">
        <h2 className="text-xl md:text-4xl font-semibold text-[#0f1e49]">
          Why Choose Us?
        </h2>
      </div>

      <div className="relative">
        {/* Orange Strip Behind SVG - Mobile Responsive */}
        <div className="absolute top-[50px] md:top-[50px] left-0 right-0 h-[60px] md:h-[90px] lg:h-[140px] xl:h-[150px] bg-[#e94f1d] z-0" />

        {/* SVG Wave Background */}
        <div className="min-h-[100vh] relative overflow-hidden">
          {/* SVG Background */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              className="absolute inset-0 w-full h-full object-cover"
              viewBox="0 0 1728 848"
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

          {/* Main Content Section - Mobile Optimized */}
          <div ref={ref} className="relative z-10 min-h-[100vh] flex items-center justify-center py-8 px-4 md:p-4 lg:p-6 xl:p-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                
                {/* Image Section - Animate from far left */}
                <motion.div 
                  className="flex justify-center lg:justify-start order-1 lg:order-none mb-4 md:mb-0 lg:pl-18"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 0.77, 0.47, 0.97],
                    delay: 0.1
                  }}
                >
                  <div className="relative w-[160px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[400px] lg:max-w-lg">
                    <div className="aspect-square relative">
                      <Image
                        src="/Rectangle17.png"
                        alt="Award"
                        fill
                        className="object-cover rounded-xl md:rounded-2xl border-[6px] md:border-[8px] lg:border-[12px] border-white shadow-lg"
                        priority
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Section - Animate from far right */}
                <motion.div 
                  className="text-white space-y-4 md:space-y-6 order-2 px-2 md:px-0"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 0.77, 0.47, 0.97],
                    delay: 0.2
                  }}
                >
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 opacity-90 text-center lg:text-left">
                    We at Excellent strongly believe that the best faculty
                    creates the best students and that is why we have a faculty
                    who are masters in their subjects. We offer our students
                    expertise that they would never experience anywhere else.
                    We invest in training and developing their skills, thus
                    providing our students a complete upgraded education.
                    Qualified and experienced faculty accelerate the learning
                    process.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}