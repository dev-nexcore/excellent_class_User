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
       {/* 🔵 Left Blue Shape */}
<div
  className="absolute top-0 left-0 w-full h-full bg-blue-900"
  style={{
    clipPath: "polygon(0 0, 70% 0, 53% 100%, 0% 100%)",
  }}

>
  {/* ✅ Background image that covers the blue shape */}
{/* Top-left main image */}
<div className="absolute -top-12 -left-4 w-[20vw] sm:w-[15vw] md:w-[13vw] h-[25vw] sm:h-[20vw] md:h-[17vw]">
  <Image
    src="/Ellipse 79.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Small left dot */}
<div className="absolute top-40 left-20 w-[10vw] sm:w-[8vw] md:w-[6vw] h-[12vw] sm:h-[10vw] md:h-[8vw]">
  <Image
    src="/Ellipse 82.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Bottom left large dot */}
<div className="absolute top-87 -left-17 w-[20vw] sm:w-[16vw] md:w-[13vw] h-[25vw] sm:h-[20vw] md:h-[17vw]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Top right dot */}
<div className="absolute top-30 left-160 w-[14vw] sm:w-[12vw] md:w-[10vw] h-[10vw] sm:h-[8vw] md:h-[6vw]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Mid right small dot */}
<div className="absolute top-70 left-140 w-[8vw] sm:w-[6vw] md:w-[4vw] h-[10vw] sm:h-[8vw] md:h-[6vw]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Bottom mid-right dot */}
<div className="absolute top-100 left-80 w-[8vw] sm:w-[6vw] md:w-[4vw] h-[10vw] sm:h-[8vw] md:h-[6vw]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Top far right dot */}
<div className="absolute top-10 left-140 w-[8vw] sm:w-[6vw] md:w-[4vw] h-[10vw] sm:h-[8vw] md:h-[6vw]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>


  
 
  
    <div className="absolute top-100 left-80 w-[4vw] h-[6vw] ">
    <Image
          src="/img/eclipse.png" // replace with your actual image path

      alt="Top Left Icon"
      fill
      className="object-contain"
    />
  </div>
    <div className="absolute top-10 left-140 w-[4vw] h-[6vw] ">
    <Image
          src="/img/eclipse.png" // replace with your actual image path

      alt="Top Left Icon"
      fill
      className="object-contain"
    />
  </div>
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
