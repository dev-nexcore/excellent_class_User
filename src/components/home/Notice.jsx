"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NoticeRibbon() {
  const [notice, setNotice] = useState("Loading latest notice...");

//   useEffect(() => {
//   async function fetchNotice() {
//     try {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/notices`); 
//       console.log("notice", res.data);

//       // Har object ka description aur date join karke ek string bana rahe hain
//       const noticeText = res.data
//         .map(item => `${item.description} (${item.date})`)
//         .join(" | ");

//       setNotice(noticeText || "No new notices at the moment.");
//     } catch (error) {
//       console.error("Error fetching notice:", error);
//       setNotice("Failed to load notice.");
//     }
//   }
//   fetchNotice();
// }, []);


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
