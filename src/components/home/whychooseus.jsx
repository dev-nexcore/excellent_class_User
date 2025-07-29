"use client";
import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white pb-10">
      <div className="text-center py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Why Choose us?
        </h2>
      </div>

      {/* Blue background with curve */}
      <div className="relative bg-[#20356B] px-6 md:px-20 py-10 rounded-tl-[100px] rounded-tr-[100px] overflow-hidden">
        {/* Optional: Add orange curve with absolute positioning if needed */}
        <div className="absolute top-0 right-0 w-[300px] h-[60px] bg-[#E94F1D] rounded-bl-[100%]"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="border-[6px] border-white rounded-lg overflow-hidden shadow-lg w-[300px] md:w-[350px]">
              <Image
                src="/Rectangle17.png" // Replace with actual image
                alt="Award"
                width={350}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-white text-2xl w-full leading-8 font-medium text-center md:text-left">
            <p>
                We at Excellent strongly believe that the best faculty creates the
                best students and that is why we have a faculty who are masters in
                their subjects. We offer our students expertise that they would
                never experience anywhere else. We invest in training and
                developing their skills, thus providing our students a complete
                upgraded education. Qualified and experience faculty accelerate
                the learning process.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
