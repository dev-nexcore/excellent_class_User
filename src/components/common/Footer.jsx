"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-y-10">
        {/* Left: Column 1 & Column 2 grouped with spacing */}
        <div className="flex flex-col md:flex-row gap-x-16 flex-[2]">
          {/* Column 1 */}
          <div className="flex-1 min-w-[250px]">
            <Image
              src="/Logo/logo.png"
              alt="Excellent Classes Logo"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-700 text-base leading-relaxed mb-4 max-w-sm">
              We at Excellent strongly believe that the best faculty creates the
              best students and that is why we have a faculty who are masters in
              their subjects.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3">
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
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-black text-base font-semibold uppercase mb-3">
              Main Menu
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About", path: "/Aboutus" },
                { name: "Result", path: "/result" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/Contactuss" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>
                    <span className="text-[#2f4271] hover:underline hover:text-[#1e2f5d] cursor-pointer text-sm">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-black text-base font-semibold uppercase mb-3">
            Our Courses
          </h4>
          <ul className="space-y-2">
            {[
              "School Section",
              "Science Section",
              "Commerce Stream",
              "CA Foundation",
            ].map((course) => (
              <li key={course}>
                <Link
                  href={`/${course.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="text-[#2f4271] hover:underline hover:text-[#1e2f5d] cursor-pointer text-sm">
                    {course}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
