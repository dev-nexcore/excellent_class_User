"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonial() {
  const images = Array(10).fill("/img2.png");

  return (
    <>
      

      {/* 📸 Extra Banner Image */}
      <div className="max-w-[1000px] mx-auto px-4 my-10">
        <Image
          src="/img3.png"
          alt="Banner Below Breadcrumb"
          width={1000}
          height={200}
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>

      {/* 🧾 Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-[1100px] mx-auto pb-12">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="overflow-hidden bg-white rounded-xl text-center py-4"
          >
            <Image
              src={img}
              alt={`Testimonial ${index + 1}`}
              width={360}
              height={450}
              className="mx-auto rounded-md object-cover w-full h-auto"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* 📱 Responsive Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .breadcrumb-header {
            flex-direction: column;
            font-size: 24px;
            height: auto;
            padding: 20px 10px;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}
