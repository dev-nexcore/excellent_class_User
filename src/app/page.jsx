import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ContactUs from "@/components/home/ContactUs";
import ContactCards from "@/components/home/ContactUs";
import ExamSection from "@/components/home/stream2";
import StreamAndCourses from "@/components/home/streamandcourses";
import WhyChooseUs from "@/components/home/whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <WhyChooseUs/>
      <StreamAndCourses/>
      <ExamSection/>
    </div>
  );
}
