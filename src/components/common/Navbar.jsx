"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/Aboutus" },
    { name: "Courses", path: "/courses" },
    { name: "Result", path: "/result" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonial", path: "/Testimoniall" },
    { name: "Contact us", path: "/Contactuss" },
  ];

  return (
    <nav
      style={{
        background: "#fff",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 1px 6px rgba(0, 0, 0, 0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div>
        <Link href="/">
          <img
            src="/Logo/logo.png"
            alt="Excellent Classes Logo"
            style={{ height: "40px", width: "auto", cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* Hamburger Icon on Mobile */}
      {isMobile ? (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: "24px", cursor: "pointer", color: "#e65100" }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      ) : (
        // Desktop Navigation Links
        <div style={{ display: "flex", gap: "32px", flex: 1, justifyContent: "center" }}>
          {navLinks.map((item) => (
            <Link key={item.name} href={item.path}>
              <span
                style={{
                  fontWeight: "bold",
                  color: pathname === item.path ? "#e65100" : "#000",
                  borderBottom: pathname === item.path ? "2px solid #e65100" : "none",
                  paddingBottom: "4px",
                  transition: "border-bottom 0.2s ease",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Login Button */}
      <div style={{ flexShrink: 0 }}>
        <Link href="/login">
          <span
            style={{
              background: "#e65100",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "inline-block",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            Login
          </span>
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "65px",
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            padding: "20px 0",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {navLinks.map((item) => (
            <Link key={item.name} href={item.path} onClick={() => setMenuOpen(false)}>
              <span
                style={{
                  fontWeight: "bold",
                  color: pathname === item.path ? "#e65100" : "#000",
                  borderBottom: pathname === item.path ? "2px solid #e65100" : "none",
                  paddingBottom: "4px",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
