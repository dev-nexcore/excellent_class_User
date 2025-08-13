"use client";
import React from "react";

const posts = [
  {
    date: "September 26, 2022",
    category: "Uncategorized",
    title: "Best Classes for Commerce & Science in Kurla , Kalina",
    description:
      "Best Classes for Commerce & Science in Kurla , Kalina Excellent Classes provides a conducive atmosphere to our students, where they are encouraged to channelize [...]",
    image: "/img/girl.png",
    link: "#",
  },
  {
    date: "March 04, 2021",
    category: "Uncategorized",
    title: "S.S.C Exams to be postponed to April",
    description:
      "Excellent Classes has been catering to the S.S.C. students from the past 30 years and producing spectacular results. We are also imparting education to post S.S.C. [...]",
    image: "/img/girl.png",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center gap-6">
      {posts.map((post, index) => (
        <div
          key={index}
          className="w-full max-w-[800px] rounded-lg overflow-hidden border border-gray-300 shadow-sm font-semibold"
        >
          {/* Top Date Section */}
          <div className="bg-[#E64B1C] text-white px-4 py-2 rounded-t-lg">
            Posted on{" "}
            <a href={post.link} className="underline hover:text-gray-200">
              {post.date}
            </a>
          </div>

          {/* Content Section */}
          <div className="p-3">
            {/* Title & Category Centered */}
            <div className="text-center mb-2">
              <p className="font-semibold underline text-black">
                {post.category}
              </p>
              <h2 className="text-lg font-bold mt-2 underline hover:text-blue-600 cursor-pointer">
                {post.title}
              </h2>
            </div>

            {/* Image Left - Description Right */}
         <div className="flex flex-col md:flex-row items-center -mt-3 justify-center gap-2 ">
  <img
    src={post.image}
    alt={post.title}
    className="w-full md:w-1/3 h-[150px] object-contain rounded-md block"
  />
  <p className="text-sm text-black md:w-2/3 text-center md:text-left m-0">
    {post.description}
  </p>
</div>


          </div>
        </div>
      ))}
    </div>
  );
}
