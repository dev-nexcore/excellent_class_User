"use client";
import { useEffect, useState } from "react";

export default function NoticeRibbon() {
  const [notice, setNotice] = useState("Loading latest notice...");

  useEffect(() => {
    async function fetchNotice() {
      try {
        const res = await fetch("/api/notice"); // your backend API endpoint
        const data = await res.json();
        setNotice(data.notice || "No new notices at the moment.");
      } catch (error) {
        console.error("Error fetching notice:", error);
        setNotice("Failed to load notice.");
      }
    }
    fetchNotice();
  }, []);

  return (
    <div className="w-full bg-red-500  text-white py-2 overflow-hidden relative">
      <div className="whitespace-nowrap animate-marquee">
        {notice}
      </div>

      {/* Tailwind keyframes inside JSX */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
