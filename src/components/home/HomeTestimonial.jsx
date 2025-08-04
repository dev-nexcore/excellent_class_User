// pages/home-testimonial.js or components/HomeTestimonial.js
import React from 'react';
import Image from 'next/image';

export default function HomeTestimonial() {
  return (
    <>
      <div className="flex justify-center flex-col items-center min-h-screen  px-4">
        <h2 className="text-3xl font-bold mb-20 text-white">Testimonials</h2>

        <div className="w-full max-w-3xl px-6 relative shadow-xl overflow-visible">
          {/* Profile image */}
          <div className="absolute left-1/2 -top-14 transform -translate-x-1/2 w-34 h-34 border-4 border-[#1e3371] rounded-full bg-[#1e3371] z-20">
            <div className="border-[5px] border-orange-500 rounded-full overflow-hidden w-24 h-24">
              <Image
                src="/img/self.jpg"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Testimonial box */}
          <div className="mt-[-60px] bg-red-900 h-[50vw] text-white relative z-10 border-r-[6px] border-t-[6px] border-orange-500">
            <div
              className="bg-[#1e3371] px-6 pt-20 pb-10 rounded-[3vw] overflow-visible"
              style={{
                    clipPath: 'polygon(0 0, 100% 0, 90% 90%, 90% 100%, 10% 100%, 10% 90%)',

              }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4 space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-lg">★</span>
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm md:text-base font-medium leading-relaxed mb-4">
                It was a truly valuable learning experience with the Institute.
                It has provided me with confidence and self belief. It has
                driven me to perform to my potential and I owe them to what I am now.
              </p>

              {/* Author Info */}
              <p className="text-right text-sm mt-4">
                -Dr. Vikas Gupta
                <br />
                <span className="italic">M.D ( Paediatrician )</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
