import React from 'react'
import CurvedBottomImageComponent from './curvedBottomImageComponent'
import FlatBottomImageComponent from './flatBottomImageComponent'

function imagecomponent() {
  return (
    <>
    <div className="min-h-screen bg-white">
      
      {/* Photos Header */}
      <section className="bg-[#20356B] text-white text-center py-3 mb-10">
        <h2 className="text-2xl font-semibold py-4">Photos</h2>
      </section>

      {/* Photo Rows */}
      <div className="flex flex-col items-center -mt-20 justify-center gap-2  sticky top-0 z-[30]  shadow-md">
        <CurvedBottomImageComponent/>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 bg-white sticky top-0 z-[30] py-2 shadow-md">
        <FlatBottomImageComponent/>
      </div>
     </div>

      {/* ✅ DO NOT close main wrapper div here */}

      {/* Videos Header */}
      <section className="bg-[#E85222] text-white text-center py-3 mb-10">
        <h2 className="text-xl font-semibold py-3">Videos</h2>
      </section>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6  ">
        {[1, 2].map((v, idx) => (
          <div
            key={idx}
            className="bg-gray-300 w-full h-[350px] rounded-md shadow-inner"
          />
        ))}
      </div>
       </>
   
  );
}

export default imagecomponent;
