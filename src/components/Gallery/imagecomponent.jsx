"use client"
import React from 'react';
import CurvedBottomImageComponent from './curvedBottomImageComponent';
import FlatBottomImageComponent from './flatBottomImageComponent';
import { useEffect ,useState} from 'react';
import axios from 'axios';

function ImageComponent() {
  const [videos, setVideos] = useState([])
  const getVideoData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/media/videos`)
      // Transform the API response data into the format you need
      const formattedVideoData = response.data.map((obj, index) => ({
        id: index + 1,
        video: obj.videoUrl,
        alt: `Event Video ${index + 1}`
      }))
      
      // Set the entire array at once
      setVideos(formattedVideoData)
      console.log(formattedVideoData)
    } catch(error) {
      console.log(error.message)
    }
  }
  
  useEffect(() => {
    getVideoData()
  }, [])

  return (
    <>
      <div className="h-auto bg-white w-full">
        {/* Photos Header */}
        <section className="bg-[#20356B] text-white text-center pt-3 pb-1 mb-2 md:mb-10 w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold py-4">Photos</h2>
        </section>

        {/* Photo Rows */}
<div className="relative flex flex-col h-auto gap-6 w-full max-w-7xl mx-auto ">
  <div className="px-4 w-full min-h-[200px] max-h-[400px] p-0">
    <CurvedBottomImageComponent />
  </div>

  <div className="px-4 w-full min-h-[200px] max-h-[400px] py-5">
    <FlatBottomImageComponent />
  </div>
</div>

      </div>

      {/* Videos Header */}
      <section className="bg-[#E85222] text-white text-center py-3 mt-10 md:mt-20 w-full">
        <h2 className="text-xl sm:text-2xl font-semibold py-3">Videos</h2>
      </section>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 p-20 sm:p-6 max-w-7xl mx-auto">
  {videos.map((videoItem) => (
    <div 
      key={videoItem.id} 
      className="w-full aspect-video rounded-md shadow-inner"
    >
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