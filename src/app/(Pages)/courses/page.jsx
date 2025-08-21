export const metadata = {
  title: "Courses | Excellent Classes",
  description:
    "Explore our wide range of courses at Excellent Classes, including Maths, Science, English, IIT-JEE, and NEET preparation.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/courses",
  },
  openGraph: {
    type: "website",
    url: "https://www.excellent-classes.nexcorealliance.com/courses",
    title: "Courses | Excellent Classes",
    description:
      "Explore our wide range of courses at Excellent Classes, including Maths, Science, English, IIT-JEE, and NEET preparation.",
    siteName: "Excellent Classes",
    images: [
      {
        url: "/img/coursesBanner.jpg",
        width: 1200,
        height: 630,
        alt: "Excellent Classes Courses",
      },
    ],
  },
};

import CourcesHomePage from "@/components/Courses/home page";

export default function CoursesPage() {
  return (
    <>
  

      <CourcesHomePage />
    </>
  );
}