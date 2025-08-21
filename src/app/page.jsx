export const metadata = {
  title: "Excellent Classee | Best Coaching Classes in Mumbai",
  description:
    "Excellent Classee offers the best coaching classes in Mumbai for Maths, Science, and English. Expert faculty, quality notes, regular tests, and 100% result-oriented coaching.",
  keywords: [
    "Excellent Classee",
    "coaching classes in Mumbai",
    "maths tuition Mumbai",
    "science coaching classes",
    "best classes near me",
    "SSC coaching Mumbai",
    "CBSE coaching Mumbai",
  ],
  openGraph: {
    title: "Excellent Classee | Best Coaching Classes in Mumbai",
    description:
      "Join Excellent Classee – Top coaching classes in Mumbai with expert teachers, modern study material, and a proven track record of success.",
    url: "https://www.excellent-classes.nexcorealliance.com", // <- yaha apni website ka real domain daalna
    siteName: "Excellent Classee",
    images: [
      {
        url: "/img/homeBanner.jpg", // hero banner image
        width: 1200,
        height: 630,
        alt: "Excellent Classee Coaching Classes in Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
