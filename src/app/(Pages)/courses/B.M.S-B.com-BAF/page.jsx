import CourseDetailsPage from '@/components/Courses/coursedetailspage'
import React from 'react'


// export const metadata = {
//   title: "BMS, B.Com & BAF Coaching in Mumbai | Excellent Classes",
//   description:
//     "Join Excellent Classes for expert coaching in BMS, B.Com, and BAF. Learn from experienced faculty, clear concepts, and excel in your academic journey with top results.",
//   alternates: {
//     canonical: "https://excellent-classes.nexcorealliance.com/courses/B.M.S-B.com-BAF",
//   },
//   openGraph: {
//     url: "https://www.excellentclasses.nexcorealliance.com/courses/BMS-BCOM_BAF",
//     title: "BMS, B.Com & BAF Coaching in Mumbai | Excellent Classes",
//     description:
//       "Enroll in BMS, B.Com, and BAF coaching at Excellent Classes. Best-in-class guidance for academic excellence and career growth.",
//     images: [
//       {
//         url: "/img/cbseBanner.jpg",
//         width: 1200,
//         height: 630,
//         alt: "CBSE Coaching Excellent Classes",
//       },
//     ],
//     siteName: "Excellent Classes",
//   },
//   twitter: {
//     card: "summary_large_image",
//   },
// };

export const metadata = {
  title: "BMS, BCOM & BAF Coaching in Mumbai | Excellent Classes",
  description:
    "Excellent Classes provides specialized BMS, BCOM, and BAF coaching in Mumbai. Expert faculty and focused study material for top results.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/bms-bcom-baf",
  },
  openGraph: {
    title: "BMS, BCOM & BAF Coaching in Mumbai | Excellent Classes",
    description:
      "Enroll in Excellent Classes for BMS, BCOM & BAF coaching. Personalized learning, expert teachers, and high success rates in Mumbai.",
    url: "https://www.excellent-classes.nexcorealliance.com/bms-bcom-baf",
    siteName: "Excellent Classes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BMS BCOM BAF Coaching in Mumbai",
      },
    ],
  },
};


function page() {
  return (
    <>
    
      <CourseDetailsPage/>
    </>
  )
}

export default page
