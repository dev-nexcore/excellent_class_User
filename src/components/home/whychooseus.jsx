"use client";
import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-auto bg-no-repeat bg-[#e94f1d] bg-right-top bg-cover  "
      style={{
        backgroundImage: "url('/home/Rectangle.svg')",
      }}
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
          Why Choose us?
        </h2>
      </div>

      <div className="px-6 md:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="border-[6px] border-white rounded-lg overflow-hidden shadow-lg w-[300px]  md:w-[350px]">
              <Image
                src="/Rectangle17.png"
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
              never experience anywhere else. We invest in training and developing
              their skills, thus providing our students a complete upgraded
              education. Qualified and experience faculty accelerate the learning
              process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
