import React from 'react';
import CurvedBottomImageComponent from './curvedBottomImageComponent';
import FlatBottomImageComponent from './flatBottomImageComponent';

function ImageComponent() {
  return (
    <>
      <div className="min-h-screen bg-white">

        {/* Photos Header */}
        <section className="bg-[#20356B] text-white text-center pt-3 pb-1 mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold py-4">Photos</h2>
        </section>

        {/* Photo Rows */}
        <div className="flex flex-col items-center  justify-center md:-mt-20 sticky top-0 z-[30] shadow-md px-4 sm:px-0 sm:-mt-300">
          <CurvedBottomImageComponent />
        </div>

        <div className="flex flex-col items-center justify-center md:-mt-30 sm:-mt-500 bg-white sticky -top-10 z-[30] -py-10 shadow-md px-4  sm:px-0">
          <FlatBottomImageComponent />
        </div>
      </div>

      {/* Videos Header */}
      <section className="bg-[#E85222] text-white mt-0 text-center py-3 mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold py-3">Videos</h2>
      </section>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-6">
        {[1, 2].map((v, idx) => (
          <div
            key={idx}
            className="bg-gray-300 w-full h-[300px] sm:h-[350px] rounded-md shadow-inner"
          />
        ))}
      </div>
    </>
  );
}

export default ImageComponent;
