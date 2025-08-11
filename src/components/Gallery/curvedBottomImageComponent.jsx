"use client"
import axios from "axios"
import { useEffect, useState } from "react"

export default function CurvedBottomImageComponent() {
  const [imageData, setImageData] = useState([])
  
  // Define the SVG path for the concave rectangle with curved top and bottom.
  const svgPath = "M 0 0 Q 475 70 950 0 L 950 350 Q 475 280 0 350 Z"
  const url = `http://localhost:5001/api/admin/media/images`
  
  const getImageData = async () => {
    try {
      const response = await axios.get(url)
      
      // Transform the API response data into the format you need
      const formattedImageData = response.data.map((obj, index) => ({
        id: index + 1,
        image: obj.imageUrl,
        alt: `Event Image ${index + 1}`
      }))
      
      // Set the entire array at once
      setImageData(formattedImageData)
      console.log('Formatted image data:', formattedImageData)
      
    } catch (error) {
      console.log('Error fetching images:', error.message)
    }
  }

  useEffect(() => {
    getImageData()
  }, [])

  // Fallback images if API data is not loaded yet
  const fallbackImages = [
    { id: 1, image: "/Rectangle17.png", alt: "Event Image 1" },
    { id: 2, image: "/Rectangle17.png", alt: "Event Image 2" },
    { id: 3, image: "/Rectangle17.png", alt: "Event Image 3" },
    { id: 4, image: "/Rectangle17.png", alt: "Event Image 4" },
    { id: 5, image: "/Rectangle17.png", alt: "Event Image 5" },
    { id: 6, image: "/Rectangle17.png", alt: "Event Image 6" },
  ]

  // Use API data if available, otherwise use fallback
  const imagesToDisplay = imageData.length > 0 ? imageData : fallbackImages

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="relative w-[950px] h-[350px]">
        {/* Hidden SVG to define the clipPath */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="concaveClipCurved">
              <path d={svgPath} />
            </clipPath>
          </defs>
        </svg>
        
        {/* SVG for the visible border of the concave shape */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 950 350"
          preserveAspectRatio="none"
          className="absolute inset-0 z-0"
        >
          <path d={svgPath} fill="none" stroke="white" strokeWidth="2" />
        </svg>
        
        {/* Image gallery container, clipped by the SVG path */}
        <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "url(#concaveClipCurved)" }}>
          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide h-full"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {imagesToDisplay.map((imageItem) => (
              <div key={imageItem.id} className="flex-shrink-0 w-[310px] h-full relative">
                {/* Using regular img tag instead of Next.js Image */}
                <img
                  src={imageItem.image || "/placeholder.svg"}
                  alt={imageItem.alt || `Image ${imageItem.id}`}
                  className="w-full h-full object-cover"
                  loading={imageItem.id <= 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}