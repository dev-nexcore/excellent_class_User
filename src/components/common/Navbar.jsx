"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // More responsive breakpoint handling
      setIsMobile(window.innerWidth <= 800);
    };
    
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
    <nav className="sticky top-0 z-[1000] bg-white shadow-md px-[4vw] sm:px-[6vw] py-3 flex items-center justify-between">
      {/* Logo - Make it smaller on mobile */}
      <div className="flex-shrink-0">
        <Link href="/">
          <img
            src="/Logo/logo.png"
            alt="Excellent Classes Logo"
            className="h-8 sm:h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Hamburger Icon */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-orange-700 text-[24px] cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <>
          <div className="flex gap-4 sm:gap-[48px] flex-1 justify-center">
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.name} href={item.path}>
                  <div className="relative pb-1">
                    <span className="font-semibold text-black cursor-pointer inline-block text-sm sm:text-base">
                      {item.name}
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 h-[2px] bg-orange-700"
                    />
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-[2px] bg-[#20356B]"
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex-shrink-0 ml-4">
            <Link href="/login">
              <span className="bg-orange-700 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-md font-semibold cursor-pointer whitespace-nowrap inline-block shadow-md text-sm sm:text-base">
                Login
              </span>
            </Link>
          </div>
        </>
      )}

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="fixed top-[65px] left-0 min-w-screen bg-white shadow-lg py-3 z-[999] flex flex-col items-center gap-3 px-4 overflow-y-auto max-h-[calc(100vh-65px)]">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2 border-b border-gray-100"
            >
              <span
                className={`font-semibold text-black ${
                  pathname === item.path ? "text-orange-700" : ""
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
          <Link 
            href="/login" 
            onClick={() => setMenuOpen(false)}
            className="w-full text-center mt-2"
          >
            <span className="bg-orange-700 text-white px-4 py-2 rounded-md font-semibold cursor-pointer shadow-md inline-block w-full max-w-[200px]">
              Login
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}