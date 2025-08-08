"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-gray-200"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-12 flex flex-col md:flex-row flex-wrap justify-between gap-y-12 gap-x-8">
        
        {/* Left Section */}
        <div className="flex-1 min-w-[250px]">
          <Image
            src="/Logo/logo.png"
            alt="Excellent Classes Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          <p className="font-semibold text-base sm:text-md leading-relaxed mb-4 text-gray-700">
            We at Excellent strongly believe that the best faculty creates the
            best students and that is why we have a faculty who are masters in
            their subjects.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-3xl sm:text-4xl mt-4 flex-wrap justify-center md:justify-start">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]"
            >
              <Image
                src="/Logo/intagram.svg"
                alt="Instagram"
                width={48}
                height={48}
                className="max-w-full h-auto"
              />
            </a>
            <a
              href="https://www.justdial.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[60px] sm:w-[70px] h-auto"
            >
              <Image
                src="/Logo/justdial.svg"
                alt="Justdial"
                width={70}
                height={56}
                className="max-w-full h-auto"
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row flex-[1.5] gap-x-20 gap-y-8">
          {/* Column 2 */}
          <div className="flex-1 w-full sm:w-[150px] min-w-[120px] text-center">
            <h4 className="text-black text-base font-semibold uppercase mb-3">
              Main Menu
            </h4>
            <ul className="space-y-2 text-base text-[#2f4271]">
              {[
                { name: "About", path: "/about" },
                { name: "Result", path: "/result" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>
                    <span className="hover:underline hover:text-[#1e2f5d] cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-[180px] text-center">
            <h4 className="text-black text-base font-semibold uppercase mb-3">
              Our Courses
            </h4>
            <ul className="space-y-2 text-base text-[#2f4271]">
              {[
                { name: "School Section", path: "/courses" },
                { name: "Science Section", path: "/courses" },
                { name: "Commerce Stream", path: "/courses" },
                { name: "CA Foundation", path: "/courses/C.A-Foundation" },
              ].map((course) => (
                <li key={course.name}>
                  <Link href={course.path}>
                    <span className="hover:underline hover:text-[#1e2f5d] cursor-pointer">
                      {course.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#e65100] text-white text-center py-3 text-xs sm:text-sm">
        ©2025 | Developed By{" "}
        <a
          href="https://code4bharat.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium text-[#20356B]"
        >
          Code4Bharat
        </a>{" "}
        | All Rights Reserved.
      </div>
    </footer>
  );
}
