"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function QualityBanner() {
  return (
    <div className="w-screen h-[40vw] bg-white flex items-center justify-center relative overflow-visible">
      <div className="relative w-full h-full overflow-visible">

        {/* 🔵 Wrapper div with overflow-hidden to clip the orange circle */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

          {/* 🔵 Left Blue Shape */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-blue-900"
            style={{
              clipPath: "polygon(0 0, 70% 0, 53% 100%, 0% 100%)",
            }}
          >
            {/* 🚀 Animated Content */}
            <motion.div 
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-[25%] left-[8%] text-white z-10 max-w-[40vw] -mt-[5vw]"
            >
              <h1 className="text-[4.5vw] capitalize leading-tight mb-[0.3vw] font-lisu ">
                Committed to
              </h1>
              <span className="text-[#E85222] text-[4.5vw] capitalize font-lisu font-semibold">
                quality
              </span>
              <p className="text-[4.5vw] mb-[0.4vw] capitalize font-lisu-600 ">
                education
              </p>

              {/* 🟧 Enroll Now Image */}
              <div className="relative w-[20vw] h-[6vw] mt-[1vw]">
                <Link href="/contact">
                  <Image
                    src="/img/enroll.png"
                    alt="Enroll Now"
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* 🟠 Large Orange Circle (EXACTLY as you had it) */}
          <div 
            className="absolute bg-[#E85222] rounded-full z-[5]"
            style={{
              width: "75vw",
              height: "75vw",
              bottom: "-33vw",
              left: "23%",
              transform: "translate(-50%, 50%)",
            }}
          ></div>
        </div>

        {/* 🔵 Right Shape with Image (animated from right) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[118%] overflow-visible z-[5]"
          style={{
            clipPath: "polygon(70% 0, 100% 0, 100% 150%, 40% 150%)",
          }}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/img/photo.png"
              alt="Song's Joke"
              fill
              className="h-[32vw] object-contain"
              style={{
                position: "absolute",
                top: "39.3%",
                left: "75.6%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </motion.div>

        {/* 🔴 Static Red Border — 🔧 UPDATED HEIGHT */}
        <div
          className="absolute bg-[#E85222]"
          style={{
            width: "4px",
            height: "111.8%",
            top: "-15px",
            left: "70.20%",
            transform: "rotate(22.9deg)",
            transformOrigin: "top",
            zIndex: 10,
          }}
        ></div>
      </div>
    </div>
  );
}
