export const metadata = {
  title: "Best Coaching Classes in Mumbai | Bright Future Classes",
  description:
    "Bright Future Classes offers the best coaching classes in Mumbai for Maths, Science, and English. Join now for expert faculty, affordable fees, and excellent results.",
  keywords: [
    "coaching classes in Mumbai",
    "maths tuition",
    "science coaching",
    "best classes near me",
  ],
};

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ContactUs from "@/components/home/contact";
import ContactCards from "@/components/home/contact";
import QualityBanner from "@/components/home/hero";
import ExamSection from "@/components/home/stream2";
import StreamAndCourses from "@/components/home/streamandcourses";
import WhyChooseUs from "@/components/home/whychooseus";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import NoticeRibbon from "@/components/home/Notice";
export default function page() {
  return (
    <div>
      <>      
    
      <NoticeRibbon/>
      <QualityBanner/>
      
      <WhyChooseUs/>
      
      <StreamAndCourses/>
      <ExamSection/>
      <HomeTestimonial/>
      </>

    </div>
    
  );
}
