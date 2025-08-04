
'use client';
import React, { useState, useEffect } from 'react';

export default function PhotoCarousel({ 
  autoSlide = false, 
  curveStyle = "up", 
  indicatorColor = "blue" 
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png"
  ];

  // Auto slide effect (only if autoSlide is true)
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, autoSlide]);

  // Transform style based on curve type
  const getTransformStyle = (index) => {
    const offset = index - activeIndex;
    if (Math.abs(offset) > 2) {
      return {
        opacity: 0,
        transform: "translateX(1000px)",
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    }
    // Classic coverflow: moderate spacing, strong curve, less Z
    const spacing = 200;
    const translateX = offset * spacing;
    const translateZ = -Math.abs(offset) * 60;
    const rotateY = offset * -40;
    let translateY;
    if (curveStyle === "down") {
      translateY = -Math.pow(offset, 2) * 10 + 20;
    } else {
      translateY = Math.abs(offset) * 10;
    }
    return {
      transform: `
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
      `,
      opacity: 1,
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      zIndex: 10 - Math.abs(offset),
    };
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const getIndicatorColorClass = () => {
    switch (indicatorColor) {
      case "purple":
        return "bg-purple-600";
      case "blue":
      default:
        return "bg-blue-600";
    }
  };

  return (
    <div className="w-full max-w-full mx-auto p-2">
      <div className="w-full rounded-lg overflow-hidden">
        <div
          className="relative h-[320px] flex items-center justify-center w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={{
                width: "320px",
                height: "200px",
                marginLeft: "-160px",
                marginTop: "-100px",
                ...getTransformStyle(idx),
              }}
              onClick={() => setActiveIndex(idx)}
            >
              <img
                src={src}
                alt={`Photo ${idx + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  filter: "none",
                  transition: "filter 0.3s ease",
                }}
              />
            </div>
          ))}
          {/* Navigation Arrows */}
          {/* <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-20"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}
          {/* <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-20"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}

// Example usage component showing how to use it twice on a page
export function DualRowPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-row items-start justify-center gap-8">
      {/* First Carousel - Auto-slide with upward curve */}
      <PhotoCarousel 
        autoSlide={true} 
        curveStyle="up" 
        indicatorColor="blue" 
      />
      {/* Second Carousel - Manual with downward curve */}
      <PhotoCarousel 
        autoSlide={false} 
        curveStyle="down" 
        indicatorColor="purple" 
      />
    </div>
  );
}

