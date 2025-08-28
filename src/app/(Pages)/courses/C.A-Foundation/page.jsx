import React from 'react'

import CAFoundation from '@/components/Courses/cafoundation'
export const metadata = {
  title: "C.A. Foundation Coaching in Mumbai | Excellent Classes",
  description:
    "Prepare for your C.A. Foundation exam with Excellent Classes. Get expert guidance, conceptual clarity, mock tests, and result-oriented coaching in Mumbai.",
  alternates: {
    canonical: "https://www.excellentclasses.nexcorealliance.com/courses/ca-foundation",
  },
  openGraph: {
    url: "https://www.excellentclasses.nexcorealliance.com/courses/ca-foundation",
    title: "C.A. Foundation Coaching in Mumbai | Excellent Classes",
    description:
      "Join Excellent Classes for the best C.A. Foundation coaching in Mumbai. Experienced faculty, structured study plans, and mock test series for exam success.",
    images: [
      {
        url: "/img/caFoundationBanner.jpg", // replace with actual image path
        width: 1200,
        height: 630,
        alt: "C.A. Foundation Coaching at Excellent Classes",
      },
    ],
    siteName: "Excellent Classes",
  },
  twitter: {
    card: "summary_large_image",
    title: "C.A. Foundation Coaching in Mumbai | Excellent Classes",
    description:
      "Crack your C.A. Foundation exam with Excellent Classes. Expert coaching, personalized guidance, and proven success strategies.",
    images: ["/img/caFoundationBanner.jpg"], // replace with actual path
  },
};

function page() {
  return (
    <>
      <CAFoundation/>
    </>
  )
}

export default page
