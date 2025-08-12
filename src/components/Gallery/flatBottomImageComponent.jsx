"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import axios from "axios"

export default function FlatBottomImageComponent() {
  const [imageData, setImageData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0) // For small screens carousel
  const fallbackImage = "/placeholder.svg" // Fallback image path
  const svgPath = "M 0 0 Q 475 70 950 0 L 950 350 L 0 350 Z"
  const url = `http://localhost:5001/api/admin/media/images`

  const getImageData = async () => {
    try {
      const response = await axios.get(url)
      const formattedImageData = response.data.map((obj, index) => ({
        id: index,
        imageUrl: obj.imageUrl,
        alt: `Event Image ${index + 1}`
      }))
      setImageData(formattedImageData)
      console.log('Formatted image data:', formattedImageData)
    } catch (error) {
      console.log('Error fetching images:', error.message)
    }
  }

  useEffect(() => {
    getImageData()
  }, [])

  // Use fallback if no images loaded
  const imagesToDisplay = imageData.length > 0 ? imageData : [
    { id: 0, imageUrl: fallbackImage, alt: "Fallback Image 1" },
    { id: 1, imageUrl: fallbackImage, alt: "Fallback Image 2" },
    { id: 2, imageUrl: fallbackImage, alt: "Fallback Image 3" },
  ]

  return (
    <div className="w-full flex justify-center items-center py-2 m-0 ">
      {/* Medium and larger screens */}
      <div className="hidden md:flex h-[30vw] w-[950px] relative items-center justify-center">
        {/* SVG clipPath definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="concaveClipFlat">
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

        {/* Scrollable images container */}
        <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "url(#concaveClipFlat)" }}>
          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide h-full"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {imagesToDisplay.map((image) => (
              <div key={image.id} className="flex-shrink-0 w-[310px] h-full relative">
                <img
                  src={image.imageUrl || fallbackImage}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = fallbackImage
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Small screens */}
      <div className="md:hidden w-full max-w-md relative flex flex-col items-center">
        <img
          src={imagesToDisplay[currentIndex]?.imageUrl || fallbackImage}
          alt={imagesToDisplay[currentIndex]?.alt || `Image ${currentIndex}`}
          className="w-full h-60 object-cover rounded-lg"
          loading="eager"
          onError={(e) => { e.target.src = fallbackImage }}
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

      {/* Scrollbar hide styles */}
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
