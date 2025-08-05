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
export default function page() {
  return (
    <div>
      <QualityBanner/>
      <WhyChooseUs/>
      
      <StreamAndCourses/>
      <ExamSection/>
      <HomeTestimonial/>
      
    </div>
  );
}
