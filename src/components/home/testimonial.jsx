"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const testimonials = [
  {
    name: "Dr. Vikas Gupta",
    designation: "M.D ( Paediatrician )",
    text: "It was a truly valuable learning experience with the Institute. It has provided me with confidence and self belief. It has driven me to perform to my potential and I owe them to what I am now.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Vikas Gupta",
    designation: "M.D ( Paediatrician )",
    text: "It was a truly valuable learning experience with the Institute. It has provided me with confidence and self belief. It has driven me to perform to my potential and I owe them to what I am now.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Vikas Gupta",
    designation: "M.D ( Paediatrician )",
    text: "It was a truly valuable learning experience with the Institute. It has provided me with confidence and self belief. It has driven me to perform to my potential and I owe them to what I am now.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50 relative">
      <h2 className="text-center text-3xl font-bold mb-20 text-gray-800">
        What Our Students Say
      </h2>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg z-10 transition-colors"
        onClick={() => handleScroll("left")}
      >
        <MdArrowBackIos size={20} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg z-10 transition-colors"
        onClick={() => handleScroll("right")}
      >
        <MdArrowForwardIos size={20} />
      </button>

      {/* Testimonial Card Container */}
      <div className="flex justify-center px-6">
        <div className="relative max-w-2xl">
          {/* Profile Image - Positioned above the card */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl bg-white p-1">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Main Card with Orange Border */}
          <div className="relative">
            {/* Orange Border Background */}
            <div className="absolute inset-0 bg-orange-500 rounded-3xl transform translate-x-2 translate-y-2"></div>
            
            {/* Main Card Content */}
            <div className="relative bg-blue-900 rounded-3xl shadow-2xl px-8 py-12 border-2 border-orange-500">
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-orange-400 text-xl mx-0.5" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-center leading-relaxed mb-8 text-lg font-medium px-4">
                {testimonial.text}
              </p>

              {/* Author Information */}
              <div className="text-center text-white">
                <div className="font-bold text-xl mb-1">
                  -{testimonial.name}
                </div>
                <div className="text-orange-300 font-medium text-sm">
                  {testimonial.designation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? "w-8 bg-orange-500" 
                : "w-3 bg-blue-900 hover:bg-blue-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}