
export const metadata = {
  title: "Testimonials | Excellent Classes Mumbai – Parents & Students Reviews",
  description:
    "Read genuine reviews and testimonials from students and parents of Excellent Classes, Mumbai. Trusted coaching with proven success and personal guidance.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/testimonials",
  },
  openGraph: {
    url: "https://www.excellent-classes.nexcorealliance.com/testimonials",
    title: "Testimonials | Excellent Classes Mumbai – Parents & Students Reviews",
    description:
      "Read genuine reviews and testimonials from students and parents of Excellent Classes, Mumbai. Trusted coaching with proven success and personal guidance.",
    images: [
      {
        url: "/img/testimonialsBanner.jpg",
        width: 1200,
        height: 630,
        alt: "Student Testimonials Excellent Classes",
      },
    ],
    siteName: "Excellent Classes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Testimonials | Excellent Classes",
    description:
      "Hear from our students and parents about their experiences with Excellent Classes. Proven results and trusted coaching.",
    images: ["/img/testimonialsBanner.jpg"],
  },
};

import Testimonial from '@/components/testimonial/testimonial'
import React from 'react'

export default function () {
  return (
    <>
 
      

      <Testimonial/>
    </>
  )
}
