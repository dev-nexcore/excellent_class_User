// export const metadata = {
//   title: "VIII-IX SSC Coaching | Excellent Classes",
//   description:
//     "Join Excellent Classes that  provides SSC coaching for VIII and IX students with expert teachers and easy learning methods.",
//   openGraph: {
//     title: "VIII-IX SSC Coaching | Excellent Classes",
//     description:
//       "Expert SSC coaching for classes VIII & IX. Build strong foundation with personalized guidance.",
//     url: "https://www.excellentclasses.nexcorealliance.com/courses/VIII-IX-SSC",
//     type: "website",
//   },
// };

export const metadata = {
  title: "Class 8, 9 & 10 Coaching in Mumbai | Excellent Classes",
  description:
    "Excellent Classes offers Class 8, Class 9, and Class 10 coaching in Mumbai. Expert teachers, personalized guidance, and proven success in board exams.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/class-8-9-10",
  },
  openGraph: {
    title: "Class 8, 9 & 10 Coaching in Mumbai | Excellent Classes",
    description:
      "Join Excellent Classes for Class 8, 9, and 10 coaching in Mumbai. Result-driven training, expert faculty, and top performance in board exams.",
    url: "https://www.excellent-classes.nexcorealliance.com/class-8-9-10",
    siteName: "Excellent Classes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Class 8, 9 & 10 Coaching in Mumbai",
      },
    ],
  },
};


import React from 'react'
import VIIIIXsscpage from '@/components/Courses/viiixsscpage'
export default function page() {
  return (
    <>
   
    
          <VIIIIXsscpage />

    
    </>
  )
}
