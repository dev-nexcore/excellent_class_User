"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NoticeRibbon() {
  const [notice, setNotice] = useState("Loading latest notice...");


  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/notices`);
        if (response.data && response.data.length > 0) {
          // Get the latest notice
          setNotice(response.data[0].description);
        } else {
          setNotice("No notice available");
        }
      } catch (err) {
        console.error("Error fetching notice:", err);
        setNotice("Failed to load notice");
      }
    };

    fetchNotice();
  }, []);

  return (
    <div className="w-full bg-[#E85222]  text-white py-2 overflow-hidden relative">
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
