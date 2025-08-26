export const metadata = {
  title: "Our Courses | ICSE, CBSE, SSC, HSC, JEE, NEET Coaching in Kurla & Mumbai",
  description:
    "Explore Excellent Classes courses – Coaching for 8th–12th (Science & Commerce) and entrance exams like JEE & NEET. Quality notes, regular tests & personalized mentoring",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/courses",
  },
  openGraph: {
    type: "website",
    url: "https://www.excellent-classes.nexcorealliance.com/courses",
    title: "Courses | Excellent Classes",
      description:
    "Explore Excellent Classes courses – Coaching for 8th–12th (Science & Commerce) and entrance exams like JEE & NEET. Quality notes, regular tests & personalized mentoring",
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