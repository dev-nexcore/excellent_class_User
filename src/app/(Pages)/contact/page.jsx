export const metadata = {
  title: "Contact Excellent Classes | Coaching in Kurla & Mumbai",
  description:
    "Get in touch with Excellent Classes - Best coaching classes in Kurla & Mumbai for ICSE, CBSE, SSC, HSC, JEE & NEET. Call us or visit our center today!",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/contact",
  },
  openGraph: {
    url: "https://www.excellent-classes.nexcorealliance.com/contact",
    title: "Contact Us | Excellent Classes",
    description:
    "Get in touch with Excellent Classes - Best coaching classes in Kurla & Mumbai for ICSE, CBSE, SSC, HSC, JEE & NEET. Call us or visit our center today!",
    images: [
      {
        url: "/img/contactBanner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Excellent Classes",
      },
    ],
    siteName: "Excellent Classes",
  },
  twitter: {
    card: "summary_large_image",
  },
};

import React from 'react'
import Navbar from '@/components/common/Navbar'
import ContactUs from '@/components/home/contact'
import Footer from '@/components/common/Footer'

export default function page() {
  return (
    <>
    

    <ContactUs />
    
    </>
  )
}
