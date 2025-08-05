'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function Photos() {
  const [scrollY, setScrollY] = useState(0);
  const [topRowScroll, setTopRowScroll] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Sample images - replace with your actual images
  const images = [
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
    "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png"
  ];

  // Create infinite loop array
  const infiniteImages = [...images, ...images, ...images];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual scroll handlers
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
    const walk = (x - startX.current) * 2; // Scroll speed multiplier
    const newScroll = scrollLeft.current - walk;
    
    // Keep within bounds and loop
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

  // Sync scroll positions
  useEffect(() => {
    if (topRowRef.current && bottomRowRef.current) {
      const maxScroll = images.length * 280;
      
      // Top row scrolls normally
      topRowRef.current.scrollLeft = topRowScroll;
      
      // Bottom row scrolls in reverse
      bottomRowRef.current.scrollLeft = maxScroll - topRowScroll;
    }
  }, [topRowScroll, images.length]);

  // Calculate visibility based on scroll position with overlay effect
  const getVisibility = () => {
    const scrollThreshold1 = 100; // When both sections become visible
    const scrollThreshold2 = 300; // When top section starts to hide
    const scrollThreshold3 = 500; // When only bottom section is visible

    if (scrollY < scrollThreshold1) {
      // Show only top section
      return {
        topOpacity: 1,
        bottomOpacity: 0,
        topTransform: 0,
        bottomTransform: 100,
        bottomZIndex: 10
      };
    } else if (scrollY < scrollThreshold2) {
      // Show both sections with overlay effect
      const progress = (scrollY - scrollThreshold1) / (scrollThreshold2 - scrollThreshold1);
      return {
        topOpacity: 1,
        bottomOpacity: 1,
        topTransform: 0,
        bottomTransform: 0,
        bottomZIndex: 20 + Math.floor(progress * 10) // Bottom curve overlays top curve
      };
    } else if (scrollY < scrollThreshold3) {
      // Transition to bottom only
      const progress = (scrollY - scrollThreshold2) / (scrollThreshold3 - scrollThreshold2);
      return {
        topOpacity: 1 - progress,
        bottomOpacity: 1,
        topTransform: -50 * progress,
        bottomTransform: 0,
        bottomZIndex: 30
      };
    } else {
      // Show only bottom section
      return {
        topOpacity: 0,
        bottomOpacity: 1,
        topTransform: -50,
        bottomTransform: 0,
        bottomZIndex: 30
      };
    }
  };

  const { topOpacity, bottomOpacity, topTransform, bottomTransform, bottomZIndex } = getVisibility();

  return (
    <div className="w-full bg-white">
      {/* Photos Header */}
      <div className="w-full bg-[#2C4060] py-4">
        <h2 className="text-white text-center text-xl font-bold uppercase tracking-wider">
          Photos
        </h2>
      </div>

      {/* Image Gallery Container with Blue Border */}
      <div className="w-full bg-white py-8">
        <div 
          ref={containerRef}
          className="relative w-full h-[400px] overflow-hidden select-none border-4 border-[#007aff] rounded-lg"
          style={{ 
            zIndex: 30,
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
          {/* Top Curved Section */}
          <div 
            ref={topRowRef}
            className="absolute top-0 left-0 w-full overflow-x-hidden"
            style={{
              height: '200px',
              borderBottomLeftRadius: '50% 60px',
              borderBottomRightRadius: '50% 60px',
              opacity: topOpacity,
              transform: `translateY(${topTransform}px)`,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
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

          {/* Bottom Curved Section with Overlay Effect */}
          <div 
            ref={bottomRowRef}
            className="absolute bottom-0 left-0 w-full overflow-x-hidden"
            style={{
              height: '200px',
              borderTopLeftRadius: '50% 60px',
              borderTopRightRadius: '50% 60px',
              opacity: bottomOpacity,
              transform: `translateY(${bottomTransform}px)`,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
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

          {/* Center spacing */}
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