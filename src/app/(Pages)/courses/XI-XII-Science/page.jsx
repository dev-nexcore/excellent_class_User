

// export const metadata = {
//   title: "XI-XII Science Coaching - Excellent Classes",
//   description:
//     "Excellent Classes provides Science coaching for XI-XII students including Physics, Chemistry, and Mathematics.",
//   openGraph: {
//     title: "XI-XII Science Coaching - Excellent Classes",
//     description:
//       "Science coaching for 11th & 12th students with expert faculty in Physics, Chemistry, and Mathematics.",
//     url: "https://www.excellentclasses.nexcorealliance.com/courses/XI-XII-Science",
//     siteName: "Excellent Classes",
//   },
// };

export const metadata = {
  title: "Class 11 & 12 Science Coaching in Kurla | Excellent Classes",
  description:
    "Excellent Classes offers Class 11 and 12 Science coaching in Mumbai with expert faculty for Physics, Chemistry, Maths & Biology.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/science-11-12",
  },
  openGraph: {
    title: "11th & 12th Science Coaching | Excellent Classes Kurla, Mumbai",
   description:
    "Excellent Classes offers Class 11 and 12 Science coaching in Mumbai with expert faculty for Physics, Chemistry, Maths & Biology.",
    url: "https://www.excellent-classes.nexcorealliance.com/science-11-12",
    siteName: "Excellent Classes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Class 11 & 12 Science Coaching in Mumbai",
      },
    ],
  },
};



import React from 'react'
import XIXIIScience from '@/components/Courses/xixiiscience'
export default function page() {
  return (
    <>
    
            <XIXIIScience />
      
    </>
  )
}
