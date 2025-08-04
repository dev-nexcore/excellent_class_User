// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// // import { motion } from "framer-motion";

// export default function Testimonial() {
//   const images = Array(10).fill("/img2.png");

//   return (
//     <>
//    <div className="w-[400px] h-[200px] bg-blue-600 text-white flex items-center justify-center rounded-md shadow-md">
//   Blue Rectangle Box
// </div>


//       {/* 🧾 Testimonials Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 px-6 max-w-[1100px] mx-auto pb-12">
//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="overflow-hidden bg-white rounded-xl text-center py-8 mt-96"
//           >
//             <Image
//               src={img}
//               alt={`Testimonial ${index + 1}`}
//               width={360}
//               height={450}
//               className="mx-auto rounded-md object-cover w-full h-auto"
//               priority={index === 0}
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* 📱 Responsive Styling */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .breadcrumb-header {
//             flex-direction: column;
//             font-size: 24px;
//             height: auto;
//             padding: 20px 10px;
//             gap: 10px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }
"use client";

import React from "react";
import Image from "next/image";

export default function Testimonial() {
  const images = Array(10).fill("/img2.png");

  return (
    <>
      <div className="w-[400px] h-[200px] bg-blue-600 text-white flex items-center justify-center rounded-md shadow-md mb-8">
        Blue Rectangle Box
      </div>

      {/* Manual Scrollable Image Slider (No Auto or Hover) */}
      <div className="relative w-full max-w-[1100px] mx-auto h-[500px] bg-gray-100 rounded-xl overflow-hidden">
        {/* Scrollable container */}
        <div
          className="flex h-full overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center p-8"
              style={{ width: "100%", scrollSnapAlign: "start" }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
                <Image
                  src={img}
                  alt={`Testimonial ${index + 1}`}
                  width={360}
                  height={450}
                  className="mx-auto rounded-md object-cover w-full h-auto"
                  priority={index === 0}
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Testimonial {index + 1}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Scroll horizontally with your mouse
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10">
          <p className="text-gray-400 text-lg font-light">
            Scroll horizontally to explore
          </p>
        </div>
      </div>
    </>
  );
}
