export const metadata = {
  title: "Contact Us | Excellent Classes",
  description:
    "Get in touch with Excellent Classes for admissions, inquiries, and support. We're here to help you achieve success.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/contact",
  },
  openGraph: {
    url: "https://www.excellent-classes.nexcorealliance.com/contact",
    title: "Contact Us | Excellent Classes",
    description:
      "Get in touch with Excellent Classes for admissions, inquiries, and support. We're here to help you achieve success.",
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
