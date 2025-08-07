"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full bg-white overflow-hidden mt-[2vw]">
      {/* Heading */}
      <div className="relative z-20 pt-16 pb-6 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#0f1e49]">
          Why Choose Us?
        </h2>
      </div>

      {/* Orange Strip Behind SVG (adjusted height in sm) */}
      <div className="absolute top-[165px] left-0 right-0 h-[90px] sm:h-[140px] md:h-[150px] bg-[#e94f1d] z-0" />

      {/* SVG Wave Background */}
      <div className="absolute top-[120px] left-0 right-0 z-0 ">
        <Image
          src="/home/Rectangle.svg"
          alt="Wave"
          width={1920}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <div ref={ref} className="relative z-10 pt-[200px] px-4 md:px-0 xs:bg-red-900 ">
        <div className="px-4 sm:px-6 md:px-20 pb-16">
          <div className="flex flex-col md:flex-row w-[90vw] items-center justify-center gap-1 -mt-[10vw] md:gap-10 ">
            
            {/* Image - Slide from Left */}
            <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
  <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
    <div className="absolute inset-0 border-4 border-white rounded-lg overflow-hidden z-10">
      <Image
        src="/Rectangle17.png"
        alt="Award"
        fill
        className="object-cover rounded-lg"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
    </div>
  </div>
</div>


            {/* Text - Slide from Right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              className="text-white text-base sm:text-sm xs:text-sm leading-8 text-center max-w-[600px] px-4 md:mr-20 tracking-widest font-semibold"
            >
              <p>
                We at Excellent strongly believe that the best faculty creates the best students and that is why we have a faculty who are masters in their subjects. We offer our students expertise that they would never experience anywhere else. We invest in training and developing their skills, thus providing our students a complete upgraded education. Qualified and experienced faculty accelerate the learning process.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
