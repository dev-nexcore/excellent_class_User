"use client"
import React from 'react';
import CurvedBottomImageComponent from './curvedBottomImageComponent';
import FlatBottomImageComponent from './flatBottomImageComponent';
import { useEffect ,useState} from 'react';
import axios from 'axios';

function ImageComponent() {
const [videos ,setVideos] = useState([])
const getVideoData =async ()=>{
  try{
     const response = await axios.get(`http://localhost:5001/api/admin/media/videos`)
     // Transform the API response data into the format you need
      const formattedVideoData = response.data.map((obj, index) => ({
        id: index + 1,
        video: obj.videoUrl,
        alt: `Event Video ${index + 1}`
      }))
      
      // Set the entire array at once
      setVideos(formattedVideoData)
      console.log(formattedVideoData)
  }catch(error){
      console.log(error.message)
  }
   
    
    // console.log(response.data)
}
useEffect(()=>{
     getVideoData()
},[])
  return (
    <>
      <div className="h-auto bg-white">

        {/* Photos Header */}
        <section className="bg-[#20356B] text-white text-center pt-3 pb-1 mb-2 md:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold py-4">Photos</h2>
        </section>

        {/* Photo Rows */}
        <div className="flex flex-col items-center  justify-center md:-mt-20 -mt-[5rem] sm:-mt-[6rem]  sticky top-0 z-[30]  px-4 ">
          <CurvedBottomImageComponent />
        </div>

       <div className="flex flex-col items-center justify-center md:-mt-20 -mt-[22rem] sm:-mt-[23rem] sticky top-10 z-[30] py-0 shadow-md px-4 sm:px-0 sm:py-0">
  <FlatBottomImageComponent />
</div>

      </div>

      {/* Videos Header */}
      <section className="bg-[#E85222] text-white text-center py-3 mb-10  md:-mt-20 -mt-[9rem] sm:-mt-[10rem]">
        <h2 className="text-xl sm:text-2xl font-semibold py-3">Videos</h2>
      </section>

      {/* Video Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-6">
  {videos.map((videoItem) => (
    <div key={videoItem.id} className="w-full h-[300px] sm:h-[350px] rounded-md shadow-inner">
      <video
        className="w-full h-full object-cover rounded-md"
        controls
        muted
        playsInline
        preload="metadata"
      >
        <source src={videoItem.video} type="video/mp4" />
      </video>
    </div>
  ))}
</div>
    </>
  );
}

export default ImageComponent;