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
  className="absolute top-0 left-0 w-full h-full bg-blue-900 overflow-visible"
  style={{
    clipPath: "polygon(0 0, 70% 0, 53% 100%, 0% 100%)",
  }}
>
  {/* ✅ Responsive orange circle */}
<div
  className="absolute bg-[#E85222] rounded-full z-50
             w-[50vw] h-[20vw] sm:w-[50vw] sm:h-[14vw] lg:w-[50vw] lg:h-[14vw]"
  style={{
    bottom: "0",
    left: "0",
    transform: "translate(6%, 85%)",
  }}
></div>




{/* Top-left main image */}
<div className="absolute 
 md:-top-20 -top-20 -left-4 w-[15vw] h-[20vw] min-w-[80px] min-h-[100px]">
  <Image
    src="/Ellipse 79.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Small left dot - made responsive */}
<div className="absolute top-[25%] left-[40%] w-[6vw] h-[8vw] min-w-[40px] min-h-[50px]">
  <Image
    src="/Ellipse 82.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Bottom left large dot - made responsive */}
<div className="absolute bottom-0 -left-4 w-[13vw] h-[17vw] min-w-[80px] min-h-[100px]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Top right dot - made responsive */}
<div className="absolute top-[20%] left-[60%] w-[10vw] h-[6vw] min-w-[50px] min-h-[30px] sm:left-[70%]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Mid right small dot - made responsive */}
<div className="absolute top-[30%] left-[65%] w-[4vw] h-[6vw] min-w-[30px] min-h-[40px] sm:left-[65%]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Bottom mid-right dot - made responsive */}
<div className="absolute bottom-[20%] left-[40%] w-[4vw] h-[6vw] min-w-[30px] min-h-[40px]">
  <Image
    src="/img/eclipse.png"
    alt="Top Left Icon"
    fill
    className="object-contain"
  />
</div>

{/* Top far right dot - made responsive */}
<div className="absolute top-[10%] right-[25%] w-[4vw] h-[6vw] min-w-[30px] min-h-[40px] sm:left-[65%]">
  <Image
    src="/img/eclipse.png"
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
  <h1 
    className="text-[4.5vw] capitalize leading-tight mb-[0.3vw]"
    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
  >
    Committed to
  </h1>
  <span 
    className="text-[#E85222] text-[4.5vw] capitalize font-semibold"
    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
  >
    quality
  </span>
  <p 
    className="text-[4.5vw] mb-[0.4vw] capitalize"
    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
  >
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
                left: "76.6%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </motion.div>

        {/* 🔴 Static Red Border — 🔧 UPDATED HEIGHT */}
{/* 🔴 Static Red Border — Fixed Position for All Views */}
<div
  className="mt-3
    absolute bg-[#E85222] z-10
    w-[0.5vw]      /* thickness scales with screen */
    h-[109%]       /* enough to cover both views */
    top-[-16px]
    left-[70%]   /* same position for all breakpoints */
  "
  style={{
    transform: "rotate(22.9deg)",
    transformOrigin: "top",
  }}
></div>



      </div>
    </div>
  );
}