'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function ImageComponent() {
  const [scrollY, setScrollY] = useState(0);
  const [topRowScroll, setTopRowScroll] = useState(0);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Sample images
  const images = Array(12).fill("/Rectangle17.png");
  const infiniteImages = [...images, ...images, ...images];

  // Handle window scroll for overlay effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manual scroll handlers for desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = topRowScroll;
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    const newScroll = scrollLeft.current - walk;
    
    // Loop within bounds
    const maxScroll = images.length * 280;
    let boundedScroll = newScroll;
    if (boundedScroll < 0) boundedScroll = maxScroll + boundedScroll;
    if (boundedScroll >= maxScroll) boundedScroll = boundedScroll - maxScroll;
    
    setTopRowScroll(boundedScroll);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = 'grab';
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    scrollLeft.current = topRowScroll;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX.current) * 2;
    const newScroll = scrollLeft.current - walk;
    
    const maxScroll = images.length * 280;
    let boundedScroll = newScroll;
    if (boundedScroll < 0) boundedScroll = maxScroll + boundedScroll;
    if (boundedScroll >= maxScroll) boundedScroll = boundedScroll - maxScroll;
    
    setTopRowScroll(boundedScroll);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Sync scroll positions between top and bottom rows
  useEffect(() => {
    if (topRowRef.current && bottomRowRef.current) {
      const maxScroll = images.length * 280;
      topRowRef.current.scrollLeft = topRowScroll;
      bottomRowRef.current.scrollLeft = maxScroll - topRowScroll;
    }
  }, [topRowScroll, images.length]);

  // Calculate visibility based on scroll position
  const getVisibility = () => {
    const thresholds = {
      start: 100,    // When bottom section starts appearing
      middle: 300,   // When both sections are fully visible at center
      end: 500       // When top section completely disappears
    };

    if (scrollY < thresholds.start) {
      return {
        topOpacity: 1,
        bottomOpacity: 0,
        topTransform: 0,
        bottomTransform: 100,
        bottomZIndex: 10,
        topCurve: '50% 200px',
        bottomCurve: '50% 200px'
      };
    } 
    else if (scrollY < thresholds.middle) {
      const progress = (scrollY - thresholds.start) / (thresholds.middle - thresholds.start);
      return {
        topOpacity: 1,
        bottomOpacity: progress,
        topTransform: -20 * progress, // Reduced movement for better visibility
        bottomTransform: 80 - (80 * progress), // Reduced movement for better visibility
        bottomZIndex: 20 + Math.floor(progress * 10),
        topCurve: `50% ${200 - (30 * progress)}px`, // Gentler curve change
        bottomCurve: `50% ${200 - (30 * progress)}px` // Gentler curve change
      };
    } 
    else if (scrollY < thresholds.end) {
      const progress = (scrollY - thresholds.middle) / (thresholds.end - thresholds.middle);
      return {
        topOpacity: 1 - progress,
        bottomOpacity: 1,
        topTransform: -20 - (30 * progress), // Reduced movement
        bottomTransform: 0,
        bottomZIndex: 30,
        topCurve: `50% ${170 - (120 * progress)}px`, // Gentler curve change
        bottomCurve: `50% ${170 - (120 * progress)}px` // Gentler curve change
      };
    } 
    else {
      return {
        topOpacity: 0,
        bottomOpacity: 1,
        topTransform: -50,
        bottomTransform: 0,
        bottomZIndex: 30,
        topCurve: '50% 50px',
        bottomCurve: '50% 50px'
      };
    }
  };

  const { 
    topOpacity, 
    bottomOpacity, 
    topTransform, 
    bottomTransform, 
    bottomZIndex,
    topCurve,
    bottomCurve
  } = getVisibility();

  return (
    <div className="w-full bg-white">
      {/* Photos Header */}
      <div className="w-full bg-[#2C4060] py-4">
        <h2 className="text-white text-center text-xl font-bold uppercase tracking-wider">
          Photos
        </h2>
      </div>

      {/* Album List */}
      <div className="flex flex-wrap justify-center gap-4 py-4 bg-white">
        {['HOPHEES 2023', 'HOPHEES 2021', 'HOPHEES 2022', 'HOPHEES 2023', 'HOPHEES 2021', 'HOPHEES 2022'].map((album, idx) => (
          <div key={idx} className="px-4 py-2 bg-gray-200 rounded-md">
            <span className="font-bold">{album}</span>
          </div>
        ))}
      </div>

      {/* Image Gallery Container */}
      <div className="w-full bg-white py-8">
        <div 
          ref={containerRef}
          className="relative w-full h-[400px] overflow-hidden select-none"
          style={{ 
            cursor: 'grab',
            userSelect: 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Curved Section (Convex) */}
          <div 
            ref={topRowRef}
            className="absolute top-0 left-0 w-full overflow-x-hidden"
            style={{
              height: '200px',
              borderBottomLeftRadius: topCurve,
              borderBottomRightRadius: topCurve,
              opacity: topOpacity,
              transform: `translateY(${topTransform}px)`,
              transition: 'all 0.5s ease',
              zIndex: 10
            }}
          >
            <div 
              className="flex items-center h-full gap-6 px-8"
              style={{ 
                minWidth: 'max-content',
                paddingTop: '30px',
                paddingBottom: '50px',
                transform: `translateX(-${topRowScroll}px)`,
              }}
            >
              {infiniteImages.map((src, idx) => (
                <div key={`top-${idx}`} className="flex-shrink-0">
                  <div 
                    className="rounded-lg overflow-hidden shadow-lg"
                    style={{ 
                      width: '240px', 
                      height: '160px'
                    }}
                  >
                    <img 
                      src={src}
                      alt={`Photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Curved Section (Concave) */}
          <div 
            ref={bottomRowRef}
            className="absolute bottom-0 left-0 w-full overflow-x-hidden"
            style={{
              height: '200px',
              borderTopLeftRadius: bottomCurve,
              borderTopRightRadius: bottomCurve,
              opacity: bottomOpacity,
              transform: `translateY(${bottomTransform}px)`,
              transition: 'all 0.5s ease',
              zIndex: bottomZIndex
            }}
          >
            <div 
              className="flex items-center h-full gap-6 px-8"
              style={{ 
                minWidth: 'max-content',
                paddingTop: '50px',
                paddingBottom: '30px',
                transform: `translateX(-${(images.length * 280) - topRowScroll}px)`,
              }}
            >
              {infiniteImages.map((src, idx) => (
                <div key={`bottom-${idx}`} className="flex-shrink-0">
                  <div 
                    className="rounded-lg overflow-hidden shadow-lg"
                    style={{ 
                      width: '240px', 
                      height: '160px'
                    }}
                  >
                    <img 
                      src={src}
                      alt={`Photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center spacing for oval effect */}
          <div 
            className="absolute left-0 w-full bg-transparent"
            style={{
              top: '140px',
              height: '120px',
            }}
          />
        </div>
      </div>
    </div>
  );
}