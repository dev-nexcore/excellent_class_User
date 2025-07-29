import React from "react";
import ImageComponent from "./imagecomponent";

export default function GalleryPage() {

  return (
    <div className="min-h-screen bg-white">
      <img src="/Gallery/banner.png" alt="" className="w-full"/>
      {/* Photos Header */}
      <section className="bg-[#20356B] text-white text-center py-3 mb-10">
        <h2 className="text-lg font-semibold py-5">Photos</h2>
      </section>

      {/* Photo Rows */}
      <div className="flex flex-col items-center justify-center gap-4 bg-white sticky top-0 z-[30] py-2 shadow-md">
      <ImageComponent />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 bg-white sticky top-0 z-[30] py-2 shadow-md">
      <ImageComponent />
      </div>

      {/* Videos Header */}
      <section className="bg-[#E85222] text-white text-center py-3 mb-10">
        <h2 className="text-lg font-semibold py-5">Videos</h2>
      </section>

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
