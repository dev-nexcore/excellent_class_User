"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Heading OUTSIDE SVG */}
      <div className="relative z-20 pt-16 pb-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0f1e49]">
          Why Choose Us?
        </h2>
      </div>

      {/* Orange Strip Behind SVG */}
      <div className="absolute top-[190px] left-0 right-0 h-[40px] bg-[#e94f1d] z-0" />

      {/* SVG Wave Background */}
      <div className="absolute top-[120px] left-0 right-0 z-0">
        <Image
          src="/home/Rectangle.svg"
          alt="Wave"
          width={1920}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <div ref={ref} className="relative z-10 pt-[180px] px-4 md:px-0">
        <div className="px-6 md:px-20 pb-16">
          <div className="flex flex-col md:flex-row items-start justify-center gap-10">
            {/* Image - Slide from Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0 md:mr-auto -mt-20"
            >
              <div className="border-[6px] border-white rounded-lg overflow-hidden shadow-lg w-[400px] h-[350px]">
                <Image
                  src="/Rectangle17.png"
                  alt="Award"
                  width={400}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Text - Aligned to image top */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white text-[17px] md:text-2xl leading-10 font-Poppins text-center md:text-left max-w-[700px] self-start mt-[-80px] gap-8"
            >
              <p>
                We at Excellent strongly believe that the best faculty creates the
                best students and that is why we have a faculty who are masters in
                their subjects. We offer our students expertise that they would
                never experience anywhere else. We invest in training and developing
                their skills, thus providing our students a complete upgraded
                education. Qualified and experienced faculty accelerate the learning
                process.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
