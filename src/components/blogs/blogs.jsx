"use client";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
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
  const [blogs,setBlogs] = useState([])
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/blogs`
  console.log(url)
  const getBlogsData = async () => {
    try {
      const response = await axios.get(url)
      setBlogs(response.data)
    } catch (error) {
      console.log('Error fetching blogs:', error.message)
    }
  }

  useEffect(() => {
    getBlogsData()
  }, [])
  console.log(blogs)
  return (
    <div className="min-h-screen bg-white px-0 py-8 flex flex-col items-center gap-6">
      
      {/* 🔹 Banner Image Left Aligned */}
      <div className="w-full flex justify-start">
        <img 
          src="/img/blog.png" 
          alt="Our Blogs" 
          className="w-[320px] md:w-[480px] h-auto object-contain"
        />
      </div>

      { blogs.length > 0 && blogs.map((blog, index) => (
        <div
          key={index}
          className="w-full max-w-[800px] rounded-lg overflow-hidden border border-gray-300 shadow-sm font-semibold"
        >
          {/* Top Date Section */}
          <div className="bg-[#E64B1C] text-white px-4 py-2 rounded-t-lg">
            Posted on{" "}
            <a href={blog.link} className="underline hover:text-gray-200">
              {blog.date}
            </a>
          </div>

          {/* Content Section */}
          <div className="p-3">
            {/* Title & Category Centered */}
            <div className="text-center mb-7">
             
              <h2 className="text-lg font-bold mt-2 underline hover:text-blue-600 cursor-pointer">
                {blog.title}
              </h2>
            </div>

            {/* Image Left - Description Right */}
           <div className="flex flex-col md:flex-row items-start -mt-3 gap-4">
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full md:w-1/2 h-[200px] object-cover rounded-md"
  />
  <p className="text-sm text-black md:w-1/2 text-center md:text-left m-0">
    {blog.content}
  </p>
</div>


          </div>
        </div>
      ))}
    </div>
  );
}
