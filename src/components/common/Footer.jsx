"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-y-12 gap-x-36">
        {/* Left Section: Column 1 */}
        <div className="flex-1 min-w-[250px]">
          <Image
            src="/Logo/logo.png"
            alt="Excellent Classes Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          <p className="font-bold text-md leading-relaxed mb-4">
            We at Excellent strongly believe that the best faculty creates the
            best students and that is why we have a faculty who are masters in
            their subjects.
          </p>

          {/* Social Icons */}
          <div className="flex items-center  gap-6 text-4xl mt-4">
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
              className="text-pink-600 hover:text-pink-700"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.justdial.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Logo/justdial.png"
                alt="Justdial"
                width={56}
                height={56}
              />
            </a>
          </div>
        </div>

        {/* Right Section: Columns 2 and 3 */}
        <div className="flex flex-col sm:flex-row flex-[1.5] gap-x-8 gap-y-8 ">
          {/* Column 2 */}
          <div className="flex-1 min-w-[180px]">
            <h4 className="text-black text-md font-semibold uppercase mb-3 ">
              Main Menu
            </h4>
            <ul className="space-y-2 text-md text-[#2f4271]">
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
          <div className="flex-1 min-w-[180px] ">
            <h4 className="text-black text-md font-semibold uppercase mb-3 ">
              Our Courses
            </h4>
            <ul className="space-y-2 text-md text-[#2f4271]">
              {[
                "School Section",
                "Science Section",
                "Commerce Stream",
                "CA Foundation",
              ].map((course) => (
                <li key={course}>
                  <Link href={`/${course.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="hover:underline hover:text-[#1e2f5d] cursor-pointer">
                      {course}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#e65100] text-white text-center py-3 text-sm">
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
