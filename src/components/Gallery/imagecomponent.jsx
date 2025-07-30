"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CurvedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png"
  ];

  // Auto rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getTransformStyle = (index) => {
    const offset = index - activeIndex;
    const angle = offset * 30; // Angle between items
    const translateZ = -300; // Depth
    const rotateY = angle;

    return {
      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      transition: "transform 0.8s",
    };
  };

  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="relative w-[500px] h-[300px]"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="absolute top-0 left-0 w-full h-full"
            style={getTransformStyle(idx)}
          >
            <img
              src={src}
              alt={`img-${idx}`}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
