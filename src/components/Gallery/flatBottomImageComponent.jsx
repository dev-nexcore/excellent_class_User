"use client"

import Image from "next/image"

export default function FlatBottomImageComponent() {
  // Define the SVG path for the concave rectangle with a flat bottom.
  const svgPath = "M 0 0 Q 475 70 950 0 L 950 350 L 0 350 Z"

  const images = [
    { id: 1, src: "/Rectangle17.png", alt: "Event Image 1" },
    { id: 2, src: "/Rectangle17.png", alt: "Event Image 2" },
    { id: 3, src: "/Rectangle17.png", alt: "Event Image 3" },
    { id: 4, src: "/Rectangle17.png", alt: "Event Image 4" },
    { id: 5, src: "/Rectangle17.png", alt: "Event Image 5" },
    { id: 6, src: "/Rectangle17.png", alt: "Event Image 6" },
  ]

  return (
    <div className="min-h-screen  flex items-center justify-center p-3 ">
      <div className="relative w-[950px] h-[350px]">
        {/* Hidden SVG to define the clipPath */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="concaveClipFlat">
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
        <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "url(#concaveClipFlat)" }}>
          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide h-full"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {images.map((image) => (
              <div key={image.id} className="flex-shrink-0 w-[310px] h-full relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={image.id <= 3}
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
