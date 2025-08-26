// export const metadata = {
//   title: "XI-XII Commerce Coaching - Excellent Classes",
//   description:
//     "Learn Commerce subjects for XI-XII at Excellent Classes. Get expert guidance in Accountancy, Economics, and Business Studies.",
//   openGraph: {
//     title: "XI-XII Commerce Coaching - Excellent Classes",
//     description:
//       "Commerce coaching for 11th & 12th students. Accountancy, Economics, Business Studies taught by expert faculty.",
//     url: "https://www.excellentclasses.nexcorealliance.com/courses/XI-XII-Commerce",
//     siteName: "Excellent Classes",
//     type: "website",
//     locale: "en_IN",
//   },
// };

export const metadata = {
  title: "Class 11 & 12 Commerce Coaching in Mumbai | Excellent Classes",
  description:
    "Excellent Classes offers Class 11 and 12 Commerce coaching in Mumbai. Expert teachers for Accounts, Economics, Business Studies & more.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/commerce-11-12",
  },
  openGraph: {
    title: "Class 11 & 12 Commerce Coaching in Mumbai | Excellent Classes",
    description:
      "Join Excellent Classes for 11th & 12th Commerce coaching in Mumbai. Personalized guidance for Accounts, Economics, Business Studies & more.",
    url: "https://www.excellent-classes.nexcorealliance.com/commerce-11-12",
    siteName: "Excellent Classes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Class 11 & 12 Commerce Coaching in Mumbai",
      },
    ],
  },
};

import React from 'react'
import XIXIICommercepage from '@/components/Courses/xixiicommercepage'

function page() {
  return (
    <>
   

            <XIXIICommercepage />
      
    </>
  )
}

export default page
