import React from "react";
import ImageComponent from "./imagecomponent";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Curved Photo Gallery with built-in headers */}
      <div className="relative bg-white">
        <ImageComponent />
      </div>

      {/* Spacer for scroll effect */}
      <div className="h-[600px] bg-white"></div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-white">
        {[1, 2].map((v, idx) => (
          <div
            key={idx}
            className="bg-gray-300 w-full h-[150px] rounded-md shadow-inner"
          />
        ))}
      </div>
    </div>
  );
}