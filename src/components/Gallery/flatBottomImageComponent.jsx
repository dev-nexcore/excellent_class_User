"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import axios from "axios"

export default function FlatBottomImageComponent() {
  const [imageData, setImageData] = useState([])
  const fallbackImage = "/placeholder.svg" // Fallback image path
  const svgPath = "M 0 0 Q 475 70 950 0 L 950 350 L 0 350 Z"
  const url = `http://localhost:5001/api/admin/media/images`

  const getImageData = async () => {
    try {
      const response = await axios.get(url)
      const formattedImageData = response.data.map((obj, index) => ({
        id: index + 1,
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

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-[950px] h-[350px]">
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="concaveClipFlat">
              <path d={svgPath} />
            </clipPath>
          </defs>
        </svg>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 950 350"
          preserveAspectRatio="none"
          className="absolute inset-0 z-0"
        >
          <path d={svgPath} fill="none" stroke="white" strokeWidth="2" />
        </svg>

        <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "url(#concaveClipFlat)" }}>
          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide h-full"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {imageData.map((image) => (
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
