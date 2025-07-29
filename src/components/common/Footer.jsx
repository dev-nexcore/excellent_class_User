'use client';
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#fff" }}>
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>

      <div
        className="footer-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "auto",
          padding: "30px 20px",
          gap: "40px",
        }}
      >
        {/* Column 1: Logo + Description + Social Icons */}
        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <img
            src="/Logo/logo.png"
            alt="Excellent Classes Logo"
            style={{
              width: "180px",
              height: "auto",
              marginBottom: "12px",
            }}
          />
          <p
            style={{
              fontWeight: 600,
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.6",
              marginBottom: "20px",
              maxWidth: "300px",
              textAlign: "left",
            }}
          >
            We at Excellent strongly believe that the best faculty creates the
            best students and that is why we have a faculty who are masters in
            their subjects.
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            {[
              {
                href: "https://www.instagram.com/",
                src: "/Logo/instagram.png",
                alt: "Instagram",
              },
              {
                href: "https://www.facebook.com/",
                src: "/Logo/facebook.png",
                alt: "Facebook",
              },
              {
                href: "https://www.justdial.com/",
                src: "/Logo/justdial.png",
                alt: "Justdial",
              },
              {
                href: "https://www.youtube.com/",
                src: "/Logo/youtube.png",
                alt: "YouTube",
              },
            ].map((icon) => (
              <a
                key={icon.alt}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  style={{ height: "24px", width: "auto" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Main Menu */}
        <div style={{ flex: "1 1 150px", minWidth: "150px" }}>
          <h4
            style={{
              fontWeight: "700",
              fontSize: "16px",
              marginBottom: "12px",
              color: "#000",
            }}
          >
            MAIN MENU
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { name: "About", path: "/about" },
              { name: "Result", path: "/result" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.name} style={{ marginBottom: "8px" }}>
                <Link href={item.path}>
                  <span
                    style={{
                      color: "#2f4271",
                      fontSize: "15px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Courses */}
        <div style={{ flex: "1 1 180px", minWidth: "180px" }}>
          <h4
            style={{
              fontWeight: "600",
              fontSize: "16px",
              marginBottom: "12px",
              color: "#000",
            }}
          >
            OUR COURSES
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "School Section",
              "Science Section",
              "Commerce Stream",
              "CA Foundation",
            ].map((course) => (
              <li key={course} style={{ marginBottom: "8px" }}>
                <Link href={`/${course.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span
                    style={{
                      color: "#2f4271",
                      fontSize: "15px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {course}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Orange Bar with Code4Bharat link */}
      <div
        style={{
          background: "#e65100",
          color: "#fff",
          textAlign: "center",
          padding: "12px 10px",
          fontSize: "14px",
        }}
      >
        ©2025 | Developed By{" "}
        <a
          href="https://code4bharat.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2f4271",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Code4Bharat
        </a>{" "}
        | All Rights Reserved.
      </div>
    </footer>
  );
}
