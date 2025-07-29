"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// 🧾 Main Testimonial Component
export default function Testimonial() {
  const images = Array(10).fill("/img2.png");

  return (
    <>
      {/* 🧭 Breadcrumb Header */}
      <div
        className="breadcrumb-header"
        style={{
          backgroundImage: "url('/img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "150px",
          maxWidth: "1726px",
          margin: "auto",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link href="/" style={{ color: "white", fontWeight: "600", textDecoration: "none" }}>
          Home
        </Link>
        <span style={{ color: "white", fontSize: "20px" }}>»»</span>
        <span style={{ color: "white", fontWeight: "600" }}>Testimonial</span>
      </div>
{/* 🖼️ Extra Image after Breadcrumb */}
<div style={{ maxWidth: "600px", margin: "30px auto" }}>
  <Image
    src="/img3.png"
    alt="Banner Below Breadcrumb"
    width={600}
    height={180}
    style={{
      borderRadius: "8px",
      objectFit: "cover",
      width: "100%",
      height: "auto",
    }}
    priority
  />
</div>


      {/* 🖼️ Testimonials Grid - 2 per row with padding */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          padding: "30px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              padding: "10px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <Image
              src={img}
              alt={`Testimonial ${index + 1}`}
              width={400}
              height={500}
              layout="responsive"
              objectFit="cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* 📱 Responsive Grid CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .breadcrumb-header {
            flex-direction: column;
            font-size: 24px;
            height: auto;
            padding: 20px 10px;
            gap: 10px;
          }

          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            padding: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
