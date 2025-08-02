"use client";
import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/img/photo.png";

export default function QualityBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] font-[Poppins] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Left Diagonal Blue Section */}
          <div className="relative w-full md:w-1/2 bg-[#1d366c] text-white clip-left-diagonal z-10 flex items-center justify-center px-6 md:px-10">
            <div className="max-w-[500px]">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-snug animate-slide-in-left">
                Committed To
                <br />
                <span className="text-[#f05a28] font-bold">Quality</span> Education
              </h2>
              <button className="mt-6 text-white text-base font-semibold relative px-6 py-2 bg-[#f05a28] animate-slide-in-top before:absolute before:-left-2 before:border-[12px] before:border-r-[#f05a28] before:border-y-transparent before:border-l-transparent before:top-1/2 before:-translate-y-1/2 after:absolute after:-right-2 after:border-[12px] after:border-l-[#f05a28] after:border-y-transparent after:border-r-transparent after:top-1/2 after:-translate-y-1/2">
                Enroll now
              </button>
            </div>
          </div>

          {/* Right Section (Image Side) */}
          <div className="w-full md:w-1/2 relative overflow-hidden">
            <Image
              src={bannerImg}
              alt="Banner Right Side"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
