// export const metadata = {
//   title: "IIT-JEE & NEET Coaching - Excellent Classes",
//   description:
//     "Join Excellent Classes for expert coaching in IIT-JEE & NEET. Get personalized guidance, experienced faculty, and proven results for your entrance exam success.",
//   openGraph: {
//     title: "IIT-JEE & NEET Coaching - Excellent Classes",
//     description:
//       "Best coaching for IIT-JEE and NEET. Experienced teachers, mock tests, and complete preparation.",
//     url: "https://www.excellentclasses.nexcorealliance.com/courses/Entrance-Exam",
//     siteName: "Excellent Classes",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "IIT-JEE & NEET Coaching - Excellent Classes",
//     description:
//       "Best coaching for IIT-JEE and NEET with expert teachers and complete preparation.",
//   },
// };
export const metadata = {
  title: "JEE & NEET Coaching in Mumbai | Excellent Classes",
  description:
    "Crack JEE & NEET with Excellent Classes in Mumbai. Experienced faculty, focused preparation, and proven success results.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/jee-neet",
  },
  openGraph: {
    title: "JEE/NEET Coaching in Mumbai | Excellent Classes",
    description:
      "Enroll in Mumbai’s top JEE & NEET coaching at Excellent Classes. Expert guidance, rigorous practice, and 100% commitment to student success.",
    url: "https://www.excellent-classes.nexcorealliance.com/jee-neet",
    siteName: "Excellent Classes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JEE NEET Coaching in Mumbai",
      },
    ],
  },
};


import React from 'react'
import EntranceCoursePlan from '@/components/Courses/entrancecourseplan'
function page() {
  return (
    <>
   
           <EntranceCoursePlan />
 
    </>
  )
}

export default page
