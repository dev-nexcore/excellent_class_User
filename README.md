"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

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
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Result", path: "/result" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav
      style={{
        background: "#fff",
        padding: "12px 35px",
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
        <div style={{ display: "flex", gap: "48px", flex: 1, justifyContent: "center" }}>
          {navLinks.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path}>
                <div style={{ position: "relative", paddingBottom: "4px" }}>
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#000", // ✅ Active & Inactive both now black
                      cursor: "pointer",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    {item.name}
                  </span>

                  {/* Hover underline (orange) */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "2px",
                      backgroundColor: "#e65100", // Hover underline (orange)
                    }}
                  />

                  {/* Active state underline (blue) */}
                  {isActive && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "2px",
                        backgroundColor: "#20356B", // ✅ Blue active underline
                      }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Login Button - Desktop Only */}
      {!isMobile && (
        <div style={{ flexShrink: 0 }}>
          <Link href="/login">
            <span
              style={{
                background: "#e65100",
                color: "#fff",
                padding: "6px 16px",
                borderRadius: "6px",
                fontWeight: "600",
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
      )}

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
                  fontWeight: 600,
                  color: "#000",
                  borderBottom: pathname === item.path ? "2px solid #20356B" : "none",
                  paddingBottom: "4px",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </span>
            </Link>
          ))}

          {/* ✅ Login button added inside mobile menu */}
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <span
              style={{
                background: "#e65100",
                color: "#fff",
                padding: "6px 16px",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              Login
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
