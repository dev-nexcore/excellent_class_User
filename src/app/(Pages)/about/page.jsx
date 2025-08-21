import About from "@/components/about/about";
import { NextSeo } from "next-seo";

export default function AboutPage() {
  return (
    <>
       <NextSeo
        title="About Us | Excellent Classes"
        description="Learn more about Excellent Classes, our vision, experienced teachers, and commitment to student success."
        openGraph={{
          url: "https://www.excellentclasses.nexcorealliance.com/about",
          title: "About Us | Excellent Classes",
          description:
            "Learn more about Excellent Classes, our vision, experienced teachers, and commitment to student success.",
        }}
      />
    <About/>
    </>
  )
}