"use client";
import React from "react";
import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Ahmed Khan",
      subtitle: "M.S (Ireland)",
      quote:
        "The institute have provided me a perfect launching pad from where I was propelled towards my goal. This institute has boosted my confidence manifold and this is one of the reasons of my achievement. I thank the institute for their all round support.",
      photo: "/img/testimonialPohto.png",
      logo: "/img/testimonialLogo.png",
    },
    {
      name: "Nabeel Shaikh",
      subtitle: "Pursuing MBBS from NASH Hospital",
      quote:
        "For any strong pillar the essential factor is its foundation. Excellent classes has been imparting and building the foundation of such great pillars. They have been always there for the supports and guidance whenever asked for. Truly a place where you emerge out to be a winner.",
      photo: "/img/testimonialPohto.png",
      logo: "/img/testimonialLogo.png",
    },
    {
      name: "Ahmed Khan",
      subtitle: "M.S (Ireland)",
      quote:
        "The institute have provided me a perfect launching pad from where I was propelled towards my goal. This institute has boosted my confidence manifold and this is one of the reasons of my achievement. I thank the institute for their all round support.",
      logo: "/img/testimonialLogo.png",
      photo: "/img/testimonialPohto.png",
    },
    {
      name: "Nabeel Shaikh",
      subtitle: "Pursuing MBBS from NASH Hospital",
      quote:
        "For any strong pillar the essential factor is its foundation. Excellent classes has been imparting and building the foundation of such great pillars. They have been always there for the supports and guidance whenever asked for. Truly a place where you emerge out to be a winner.",
      logo: "/img/testimonialLogo.png",
      photo: "/img/testimonialPohto.png",
    },
  ];
  return (
    <>
      {/* 🔷 Heading Banner */}
      <div className="relative my-16 flex justify-center font-poppins">
        <div className="relative w-[70vw] max-w-8xl">
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 z-0 w-[115%] h-full"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 94% 50%, 100% 100%, 0% 100%, 6% 50%)",
              backgroundColor: "#ea580c",
            }}
          />
          <div
            className="relative z-20 text-center p-4 lg:p-10 text-white"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 94% 50%, 100% 100%, 0% 100%, 6% 50%)",
              backgroundColor: "#1e3a8a",
            }}
          >
            <h2 className="text-md sm:text-3xl md:text-4xl font-bold mb-3">
              Our Students want to say something
            </h2>
          </div>
        </div>
      </div>
      {/* 🔷 Testimonials */}
      <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto py-6">
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
          (_, rowIndex) => {
            const pair = testimonials.slice(rowIndex * 2, rowIndex * 2 + 2);
            return (
              <div
                key={rowIndex}
                className="flex flex-col lg:flex-row gap-10 justify-center items-stretch"
              >
                {pair.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row w-full max-w-[600px] flex-1"
                  >
                    {/* 🔹 Text Left */}
                    <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col items-center justify-center text-center bg-white">
                      <Image
                        src={testimonial.logo || "/placeholder.svg"}
                        alt="Goal Achiever Logo"
                        width={180}
                        height={50}
                        className="mb-3"
                      />
                      <div className="bg-[#20356B] text-white text-base px-6 py-2 rounded-md mt-3 mb-5">
                        {testimonial.name}
                        <br />
                        <span className="text-[13px] text-gray-200">
                          {testimonial.subtitle}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-700 leading-relaxed px-4">
                        {testimonial.quote}
                      </p>
                    </div>
                    {/* 🔹 Image Right */}
                    <div className="w-full md:w-1/2 relative min-h-[250px]">
                      <Image
                        src={testimonial.photo || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-fill rounded-br-2xl md:rounded-bl-2xl md:rounded-br-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
