import ExamSection from "@/components/home/stream2";
import StreamAndCourses from "@/components/home/streamandcourses";
import WhyChooseUs from "@/components/home/whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <WhyChooseUs/>
    <StreamAndCourses/>
    <ExamSection/>
    </div>
  );
}
