"use client";
import React, { useEffect, useState } from "react";

// import React, { useState, useEffect } from 'react';

export default function DualRowPhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [secondRowActiveIndex, setSecondRowActiveIndex] = useState(0);
  
  const images = [
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png"
  ];

  // Auto slide every 3 seconds for first row only
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // First row transform style (original)
  const getTransformStyle = (index) => {
    const offset = index - activeIndex;
    
    if (Math.abs(offset) > 2) {
      return {
        opacity: 0,
        transform: "translateX(1000px)",
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    }

    const spacing = 280;
    const translateX = offset * spacing;
    const translateZ = -Math.abs(offset) * 150;
    const rotateY = offset * -25;
    const scale = 1 - Math.abs(offset) * 0.15;
    const translateY = Math.abs(offset) * 30;

    return {
      transform: `
        translateX(${translateX}px) 
        translateY(${translateY}px) 
        translateZ(${translateZ}px) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `,
      opacity: 1 - Math.abs(offset) * 0.3,
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      zIndex: 10 - Math.abs(offset),
    };
  };

  // Second row transform style (curved space effect)
  const getSecondRowTransformStyle = (index) => {
    const offset = index - secondRowActiveIndex;
    
    if (Math.abs(offset) > 2) {
      return {
        opacity: 0,
        transform: "translateX(1000px)",
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    }

    const spacing = 320; // Increased spacing for better curve effect
    const translateX = offset * spacing;
    const translateZ = -Math.abs(offset) * 150;
    const rotateY = offset * -25;
    const scale = 1 - Math.abs(offset) * 0.15;
    
    // Curved space effect - center goes down, sides go up
    const translateY = -Math.pow(offset, 2) * 25 + 40;

    return {
      transform: `
        translateX(${translateX}px) 
        translateY(${translateY}px) 
        translateZ(${translateZ}px) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `,
      opacity: 1 - Math.abs(offset) * 0.3,
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      zIndex: 10 - Math.abs(offset),
    };
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleSecondRowImageClick = (index) => {
    setSecondRowActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goToSecondRowPrevious = () => {
    setSecondRowActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSecondRowNext = () => {
    setSecondRowActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-8">
      {/* First Row - Original Style with Auto-slide */}
      <div className="bg-white p-8 rounded-lg shadow-sm overflow-hidden">
        {/* <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">First Row - Auto Slide</h3> */}
        <div className="relative h-80 flex items-center justify-center">
          <div
            className="relative w-full h-full"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    width: "240px",
                    height: "160px",
                    marginLeft: "-120px",
                    marginTop: "-80px",
                    ...getTransformStyle(idx),
                  }}
                  onClick={() => handleImageClick(idx)}
                >
                  <img
                    src={src}
                    alt={`Photo ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-white"
                    style={{
                      filter: idx === activeIndex ? "brightness(1)" : "brightness(0.7)",
                      transition: "filter 0.3s ease",
                    }}
                  />
                  
                  {idx === activeIndex && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 z-20"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 z-20"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                idx === activeIndex 
                  ? "bg-blue-600 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Second Row - Curved Space Effect, No Auto-slide */}
      <div className="bg-white p-8 rounded-lg shadow-sm overflow-hidden">
        {/* <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Second Row - Curved Space Effect</h3> */}
        <div className="relative h-80 flex items-center justify-center">
          <div
            className="relative w-full h-full"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    width: "240px",
                    height: "160px",
                    marginLeft: "-120px",
                    marginTop: "-80px",
                    ...getSecondRowTransformStyle(idx),
                  }}
                  onClick={() => handleSecondRowImageClick(idx)}
                >
                  <img
                    src={src}
                    alt={`Photo ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-white"
                    style={{
                      filter: idx === secondRowActiveIndex ? "brightness(1)" : "brightness(0.7)",
                      transition: "filter 0.3s ease",
                    }}
                  />
                  
                  {idx === secondRowActiveIndex && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToSecondRowPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 z-20"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToSecondRowNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 z-20"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSecondRowActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                idx === secondRowActiveIndex 
                  ? "bg-purple-600 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}