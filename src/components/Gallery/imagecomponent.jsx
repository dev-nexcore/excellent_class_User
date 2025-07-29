"use client";
import React from "react";

export default function ImageComponent() {
  const photoImages = [
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
  ];

  return (
    <div className="sticky top-0 bg-white z-[VALUE] py-6 ">
      <div
        className="container mx-auto overflow-x-auto"
        style={{
          scrollbarWidth: "none",      // Firefox
          msOverflowStyle: "none",     // IE/Edge
        }}
      >
        <div className="inline-flex gap-6 whitespace-nowrap px-4">
          {photoImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`photo-${idx}`}
              className="w-[500px] h-[400px] object-cover rounded-md "
            />
          ))}
        </div>

        {/* Hide scrollbar for Chrome, Safari, Opera */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}
