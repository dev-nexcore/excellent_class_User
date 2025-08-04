// 'use client';
// import React, { useState, useEffect } from 'react';

// export default function PhotoCarousel({
//   autoSlide = false,
//   indicatorColor = "blue"
// }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images = [
//     "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png",
//     "/Rectangle17.png", "/Rectangle17.png", "/Rectangle17.png"
//   ];

//   useEffect(() => {
//     if (!autoSlide) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [autoSlide, images.length]);

//   const goToPrevious = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToNext = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const getIndicatorColorClass = () => {
//     switch (indicatorColor) {
//       case "purple":
//         return "bg-purple-600";
//       case "blue":
//       default:
//         return "bg-blue-600";
//     }
//   };

//   const [touchStart, setTouchStart] = useState(null);
//   const [touching, setTouching] = useState(false);

//   const handleTouchStart = (e) => {
//     if (e.touches.length === 2) {
//       setTouchStart({
//         x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
//         y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
//       });
//       setTouching(true);
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (!touching || e.touches.length !== 2 || !touchStart) return;
//     const x = (e.touches[0].clientX + e.touches[1].clientX) / 2;
//     const dx = x - touchStart.x;
//     if (Math.abs(dx) > 50) {
//       dx > 0 ? goToPrevious() : goToNext();
//       setTouching(false);
//       setTouchStart(null);
//     }
//   };

//   const handleTouchEnd = () => {
//     setTouching(false);
//     setTouchStart(null);
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <div className="relative w-full h-[300px] overflow-hidden bg-white rounded-lg shadow-md">
//         {/* Top/Bottom mask effect */}
//         <div
//           className="absolute inset-0 z-10 pointer-events-none"
//           style={{
//             maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
//             WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
//           }}
//         />

//         <div
//           className="relative w-full h-full flex justify-center items-center"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           {images.map((src, idx) => {
//             const offset = idx - activeIndex;
//             const translateX = offset * 260;
//             const scale = idx === activeIndex ? 1 : 0.9;
//             const brightness = idx === activeIndex ? "brightness-100" : "brightness-90";

//             return (
//               <div
//                 key={idx}
//                 className={`absolute transition-all duration-500 ease-in-out`}
//                 style={{
//                   transform: `translateX(${translateX}px) scale(${scale})`,
//                   zIndex: 10 - Math.abs(offset),
//                 }}
//                 onClick={() => setActiveIndex(idx)}
//               >
//                 <img
//                   src={src}
//                   alt={`Photo ${idx + 1}`}
//                   className={`w-[240px] h-[160px] object-cover rounded-lg shadow-lg transition-all duration-500 ${brightness}`}
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* Left/Right navigation */}
//         <button
//           onClick={goToPrevious}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 z-20"
//         >
//           <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={goToNext}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 z-20"
//         >
//           <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="flex justify-center mt-6 space-x-2">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setActiveIndex(idx)}
//             className={`w-3 h-3 rounded-full transition-all duration-200 ${
//               idx === activeIndex
//                 ? `${getIndicatorColorClass()} scale-125`
//                 : "bg-gray-300 hover:bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Optional: Page with two rows
// export function DualRowPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-10 space-y-12">
//       <PhotoCarousel autoSlide={true} indicatorColor="blue" />
//       <PhotoCarousel autoSlide={false} indicatorColor="purple" />
//     </div>
//   );
// }
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
    // Decrease spacing between images
    const spacing = curveStyle === "down" ? 180 : 150;
    const translateX = offset * spacing;
    const translateZ = -Math.abs(offset) * 100;
    const rotateY = offset * -25;
    const scale = 1;
    let translateY;
    if (curveStyle === "down") {
      translateY = -Math.pow(offset, 2) * 18 + 25;
    } else {
      translateY = Math.abs(offset) * 18;
    }
    return {
      transform: `
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
      `,
      opacity: 1 - Math.abs(offset) * 0.3,
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
    <div className="w-full max-w-xl mx-auto p-2">
      <div className=" rounded-lg overflow-hidden">
        <div
          className="relative h-48 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={{
                width: "140px",
                height: "90px",
                marginLeft: "-70px",
                marginTop: "-45px",
                ...getTransformStyle(idx),
              }}
              onClick={() => setActiveIndex(idx)}
            >
              <img
                src={src}
                alt={`Photo ${idx + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  filter: idx === activeIndex ? "brightness(1)" : "brightness(0.7)",
                  transition: "filter 0.3s ease",
                }}
              />
            </div>
          ))}
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-20"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-20"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
