"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "It was a truly valuable learning experience with the Institute. It has provided me with confidence and self belief. It has driven me to perform to my potential and I owe them to what I am now.",
    name: "Dr. Vikas Gupta",
    title: "M.D ( Paediatrician )",
    imgSrc: "/img/self.jpg",
    alt: "Dr. Vikas Gupta",
  },
  {
    quote:
      "The mentors were incredibly supportive and the curriculum was practical. I gained skills that I could apply immediately in real-world scenarios.",
    name: "Ms. Anjali Sharma",
    title: "Software Engineer",
        imgSrc: "/img/self.jpg",

    alt: "Anjali Sharma",
  },
  {
    quote:
      " From day one, the learning environment pushed me to grow. My confidence skyrocketed and I now feel prepared for industry challenges.",
    name: "Mr. Rohit Patel",
    title: "Full Stack Developer",
        imgSrc: "/img/self.jpg",

    alt: "Rohit Patel",
  },
]

function CardContent({ testimonial }) {
  return (
    <>
      {/* Orange Offset Background Rectangle (skewed in 3D) */}
      <div
        className="absolute inset-0 -translate-y-3 translate-x-3 rounded-[30px]"
        style={{
          backgroundColor: "#f26722",
          zIndex: 0,
          transform: "rotateY(-8deg)",
          transformStyle: "preserve-3d",
        }}
      />
      {/* Main Navy Card Rectangle */}
      <div
        className="relative px-6 sm:px-14 pt-24 pb-16 text-center rounded-[30px] z-10"
        style={{
          backgroundColor: "#1f2d56",
          color: "white",
          transform: "rotateY(-6deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Avatar */}
<div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
  <div className="rounded-full border-4 border-[#1f2d56] p-1">
    <div className="rounded-full ring-4 ring-[#f26722] overflow-hidden w-38 h-38 bg-white relative">
      <Image
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={testimonial.alt}
        fill
        className="object-cover rounded-full"
        priority
      />
    </div>
  </div>
</div>

        {/* Stars */}
        <div className="flex justify-center mb-4 mt-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <svg
              key={idx}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mx-1"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.48 8.296L12 18.896l-7.416 4.59 1.48-8.296L0 9.306l8.332-1.151z" />
            </svg>
          ))}
        </div>
        {/* Quote */}
        <p className="text-base sm:text-xl leading-relaxed px-0 sm:px-10 mb-8">{testimonial.quote}</p>
        {/* Name & Title */}
        <div className="absolute bottom-8 right-6 text-right">
          <div className="text-2xl font-semibold">- {testimonial.name}</div>
          <div className="text-xl mt-1">{testimonial.title}</div>
        </div>
      </div>
    </>
  )
}

export default function HomeTestimonial() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [prevIdx, setPrevIdx] = useState(null)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState("right")
  const scrollTimeoutRef = useRef(null) // Ref to manage scroll debounce timeout

  useEffect(() => {
    const handleScroll = (e) => {
      // Clear any existing timeout to debounce rapid scroll events
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // If an animation is already in progress, prevent new transitions
      if (animating) {
        return
      }

      // Set a new timeout to process the scroll event after a short delay
      scrollTimeoutRef.current = setTimeout(() => {
        let nextIdx
        let newDirection

        if (e.deltaY > 0 || e.deltaX > 0) {
          // Scroll right
          nextIdx = (activeIdx + 1) % testimonials.length
          newDirection = "right"
        } else if (e.deltaY < 0 || e.deltaX < 0) {
          // Scroll left
          nextIdx = (activeIdx - 1 + testimonials.length) % testimonials.length
          newDirection = "left"
        } else {
          return // No relevant scroll direction
        }

        setDirection(newDirection)
        setPrevIdx(activeIdx)
        setActiveIdx(nextIdx)
        setAnimating(true)
      }, 100) // Debounce time: 100ms
    }

    const container = document.getElementById("testimonial-scroll-container")
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: true })
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll)
      }
      // Clear timeout on component unmount
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [activeIdx, animating]) // Dependencies: activeIdx, animating

  const handleDot = (idx) => {
    if (idx === activeIdx || animating) return
    setDirection(idx > activeIdx ? "right" : "left")
    setPrevIdx(activeIdx)
    setActiveIdx(idx)
    setAnimating(true)
  }

  useEffect(() => {
    if (animating) {
      const t = setTimeout(() => {
        setPrevIdx(null)
        setAnimating(false)
      }, 500) // This duration matches the CSS transition duration
      return () => clearTimeout(t)
    }
  }, [animating])

  return (
    <div className="flex flex-col gap-8 items-center py-10 bg-white">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-radley">Testimonials</h2>
      {/* Card Container with perspective */}
      <div
        id="testimonial-scroll-container"
        className="relative w-full max-w-9xl h-[450px] px-4 sm:px-0 mx-auto overflow-visible "
      >
        {/* FIXED: Invisible static copy to preserve original size/height */}
        <div
          aria-hidden="true"
          className="relative w-full max-w-3xl mt-12 px-4 sm:px-0 mx-auto"
          style={{ perspective: "1200px", opacity: 0, pointerEvents: "none" }}
        >
          <CardContent testimonial={testimonials[activeIdx]} />
        </div>
        {/* Animated cards */}
        {testimonials.map((testimonial, idx) => {
          let transform = "translateX(100%)"
          let opacity = 0
          let zIndex = 0

          if (idx === activeIdx) {
            transform = "translateX(0)"
            opacity = 1
            zIndex = 10
          } else if (idx === prevIdx) {
            transform = direction === "right" ? "translateX(-100%)" : "translateX(100%)"
            opacity = 0
            zIndex = 5
          }
          return (
            <div
              key={idx}
              className="absolute inset-0 w-full transition-all duration-500 ease-in-out"
              style={{
                transform,
                opacity,
                zIndex,
              }}
            >
              <div className="relative w-full max-w-3xl mt-12 px-4 sm:px-0 mx-auto" style={{ perspective: "1200px" }}>
                <CardContent testimonial={testimonial} />
              </div>
            </div>
          )
        })}
      </div>
      {/* Pagination Dots */}
      <div className="flex items-center gap-2 -mt-6">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleDot(idx)}
            className={`cursor-pointer transition-all duration-300 ${
              idx === activeIdx ? "w-10 h-2 rounded-full bg-[#f26722]" : "w-3 h-3 rounded-full bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
