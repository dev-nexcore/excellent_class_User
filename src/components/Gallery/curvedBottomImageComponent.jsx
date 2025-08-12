"use client"
import axios from "axios"
import { useEffect, useState } from "react"

export default function CurvedBottomImageComponent() {
  const [imageData, setImageData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0) // Small screen current image index
  
  // SVG path for clipping
  const svgPath = "M 0 0 Q 475 70 950 0 L 950 350 Q 475 280 0 350 Z"
  const url = `${process.env.API_BASE_URL}/api/admin/media/images`

  const getImageData = async () => {
    try {
      const response = await axios.get(url)
      const formattedImageData = response.data.map((obj, index) => ({
        id: index,
        image: obj.imageUrl,
        alt: `Event Image ${index + 1}`
      }))
      setImageData(formattedImageData)
    } catch (error) {
      console.log('Error fetching images:', error.message)
    }
  }

  useEffect(() => {
    getImageData()
  }, [])

  const fallbackImages = [
    { id: 0, image: "/Rectangle17.png", alt: "Event Image 1" },
    { id: 1, image: "/Rectangle17.png", alt: "Event Image 2" },
    { id: 2, image: "/Rectangle17.png", alt: "Event Image 3" },
    { id: 3, image: "/Rectangle17.png", alt: "Event Image 4" },
    { id: 4, image: "/Rectangle17.png", alt: "Event Image 5" },
    { id: 5, image: "/Rectangle17.png", alt: "Event Image 6" },
  ]

  const imagesToDisplay = imageData.length > 0 ? imageData : fallbackImages

  return (
    <div className="w-full flex justify-center items-center py-4 m-0 ">
      {/* Large and Medium screens: show the horizontal scroll curved gallery */}
      <div className="hidden md:flex h-[30vw] w-[950px] relative items-center justify-center">
        {/* Hidden SVG clipPath */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="concaveClipCurved">
              <path d={svgPath} />
            </clipPath>
          </defs>
        </svg>

        {/* Visible border */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 950 350"
          preserveAspectRatio="none"
          className="absolute inset-0 z-0"
        >
          <path d={svgPath} fill="none" stroke="white" strokeWidth="2" />
        </svg>

        {/* Image gallery container */}
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

      {/* Small screens: show one image with dot indicators */}
      <div className="md:hidden w-full max-w-md relative flex flex-col items-center">
        {/* Show only one image at a time */}
        <img
          src={imagesToDisplay[currentIndex]?.image || "/placeholder.svg"}
          alt={imagesToDisplay[currentIndex]?.alt || `Image ${currentIndex}`}
          className="w-full h-60 object-cover rounded-md"
          loading="eager"
        />
        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-3">
          {imagesToDisplay.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? "bg-[#E85222]" : "bg-gray-400"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
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
