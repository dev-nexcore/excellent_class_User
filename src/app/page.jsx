export const metadata = {
  title: "Excellent Classes | Best Coaching in Kurla & Mumbai for 8th–12th, Science & Commerce", 
  description:
   "Join Excellent Classes in Kurla, Mumbai – Expert coaching for 8th, 9th, 10th, 11th–12th Science & Commerce. Special focus on NEET, JEE & Board exams with top faculty, quality notes, and proven results."
,
keywords: [
  "Excellent Classes",
  "coaching classes in Kurla",
  "best coaching in Kurla West",
  "class 8 9 10 coaching Kurla",
  "11 12 science tuition Kurla",
  "commerce coaching Kurla",
  "NEET coaching in Kurla",
  "JEE coaching classes Mumbai",
  "SSC coaching Kurla Mumbai",
  "best tuition near me Kurla"
],

  openGraph: {
    title: "Excellent Classes | Best Coaching Classes in Mumbai",
    description:
      "Join Excellent Classes – Best coaching classes in Kurla & Mumbai for 8th–12th Science & Commerce, NEET & JEE prep. Trusted by parents, loved by students."
,
    url: "https://www.excellent-classes.nexcorealliance.com", // <- yaha apni website ka real domain daalna
    siteName: "Excellent Classes",
    images: [
      {
        url: "/img/homeBanner.jpg", // hero banner image
        width: 1200,
        height: 630,
        alt: "Excellent Classes Coaching Classes in Mumbai",
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
