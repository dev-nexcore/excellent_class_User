// 'use client';
// import React, { useState, useEffect } from "react";
// import ImageComponent from "./imagecomponent";

// export default function GalleryPage() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

    
//         transform: `translateY(${80 - (progress * 80)}px)`, // Move back up
//         transition: 'all 0.3s ease-out',
//         opacity: 0.8 + (progress * 0.2) // Become more visible
//       };
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Curved Photo Gallery */}
//       <div className="relative bg-white z-10">
//         <ImageComponent />
//       </div>

//       {/* Video Section - goes behind lower curve, comes back in front */}
//       <div 
//         className="bg-white"
//         style={getVideoSectionStyle()}
//       >
//         {/* Videos Header */}
//         <div className="w-full bg-[#FF5733] py-4">
//           <h2 className="text-white text-center text-xl font-bold uppercase tracking-wider">
//             Videos
//           </h2>
//         </div>

//         {/* Video Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 bg-white max-w-4xl mx-auto">
//           <div className="flex flex-col">
//             <div className="relative rounded-lg overflow-hidden">
//               <div className="bg-gray-300 w-full h-48 rounded-lg shadow-inner flex items-center justify-center">
//                 {/* Play Icon */}
//                 <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mt-4 text-gray-800">Excise in Body Matter</h3>
//             <p className="text-gray-600 mt-2">We at baseline strongly believe that the best beauty crosses the best students and that is why we have a beauty who are masters in their subjects.</p>
//           </div>
          
//           <div className="flex flex-col">
//             <div className="relative rounded-lg overflow-hidden">
//               <div className="bg-gray-300 w-full h-48 rounded-lg shadow-inner flex items-center justify-center">
//                 {/* Play Icon */}
//                 <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mt-4 text-gray-800">Judicial Excellence</h3>
//             <p className="text-gray-600 mt-2">Our judicial courses are designed to provide comprehensive knowledge and practical skills for aspiring legal professionals.</p>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="bg-gray-800 text-white text-center py-4">
//           <p>©2023 [personnel for <strong>classification</strong>] | All Rights Reserved</p>
//         </div>
//       </div>
//     </div>
//   );
// }