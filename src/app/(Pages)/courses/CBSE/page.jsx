export const metadata = {
  title: "CBSE Coaching Classes in Mumbai | Excellent Classes",
  description:
    "Join Excellent Classes for CBSE coaching in Mumbai. Expert faculty, regular tests, quality study material, and proven results for academic success.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/courses/cbse",
  },
  openGraph: {
    url: "https://www.excellent-classes.nexcorealliance.com/courses/cbse",
    title: "CBSE Coaching Classes in Mumbai | Excellent Classes",
    description:
      "Join Excellent Classes for CBSE coaching in Mumbai with experienced teachers, proven results, and expert guidance.",
    images: [
      {
        url: "/img/cbseBanner.jpg",
        width: 1200,
        height: 630,
        alt: "CBSE Coaching Excellent Classes",
      },
    ],
    siteName: "Excellent Classes",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBSE Coaching Classes in Mumbai | Excellent Classes",
    description:
      "Join Excellent Classes for CBSE coaching in Mumbai with expert faculty and proven results.",
    images: ["/img/cbseBanner.jpg"],
  },
};

import CBSEPage from "@/components/Courses/cbsepage";

export default function ICSEPage() {
  return (
    <>
    

      <CBSEPage/>
    </>
  );
}