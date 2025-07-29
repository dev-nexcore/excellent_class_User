'use client';
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#fff" }}>
      <style jsx>{`
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1100px;
          margin: auto;
          padding: 30px 20px;
          gap: 40px;
        }

        .footer-column {
          flex: 1 1 250px;
          min-width: 250px;
        }

        .footer-text {
          font-size: 16px;
          color: #333;
          line-height: 1.6;
          margin-bottom: 20px;
          max-width: 300px;
          text-align: left;
        }

        .footer-title {
          font-size: 16px;
          margin-bottom: 12px;
          color: #000;
          text-transform: uppercase;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          color: #2f4271;
          font-size: 15px;
          text-decoration: none;
          cursor: pointer;
        }

        .footer-social {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .footer-bottom {
          background: #e65100;
          color: #fff;
          text-align: center;
          padding: 12px 10px;
          font-size: 12px;
        }

        .footer-bottom a {
          color: #2f4271;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <img
            src="/Logo/logo.png"
            alt="Excellent Classes Logo"
            style={{ width: "180px", height: "auto", marginBottom: "12px" }}
          />
          <p className="footer-text">
            We at Excellent strongly believe that the best faculty creates the
            best students and that is why we have a faculty who are masters in
            their subjects.
          </p>
          <div className="footer-social">
            {[
              { href: "https://www.instagram.com/", src: "/Logo/instagram.png", alt: "Instagram" },
              { href: "https://www.facebook.com/", src: "/Logo/facebook.png", alt: "Facebook" },
              { href: "https://www.justdial.com/", src: "/Logo/justdial.png", alt: "Justdial" },
              { href: "https://www.youtube.com/", src: "/Logo/youtube.png", alt: "YouTube" },
            ].map((icon) => (
              <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt} style={{ height: "24px", width: "auto" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column" style={{ minWidth: "100px" }}>
          <div className="footer-title">Main Menu</div>
          <ul className="footer-list">
            {[
              { name: "About", path: "/Aboutus" },
              { name: "Result", path: "/result" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact Us", path: "/Contactuss" },
            ].map((item) => (
              <li key={item.name} style={{ marginBottom: "8px" }}>
                <Link href={item.path}>
                  <span className="footer-link">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column" style={{ minWidth: "180px" }}>
          <div className="footer-title">Our Courses</div>
          <ul className="footer-list">
            {[
              "School Section",
              "Science Section",
              "Commerce Stream",
              "CA Foundation",
            ].map((course) => (
              <li key={course} style={{ marginBottom: "8px" }}>
                <Link href={`/${course.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="footer-link">{course}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        ©2025 | Developed By{" "}
        <a
          href="https://code4bharat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code4Bharat
        </a>{" "}
        | All Rights Reserved.
      </div>
    </footer>
  );
}
