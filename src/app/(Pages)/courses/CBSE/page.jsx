// export const metadata = {
//   title: "CBSE Coaching Classes in Mumbai | Excellent Classes",
//   description:
//     "Join Excellent Classes for CBSE coaching in Mumbai. Expert faculty, regular tests, quality study material, and proven results for academic success.",
//   alternates: {
//     canonical: "https://www.excellent-classes.nexcorealliance.com/courses/CBSE",
//   },
//   openGraph: {
//     url: "https://www.excellent-classes.nexcorealliance.com/courses/CBSE",
//     title: "CBSE Coaching Classes in Mumbai | Excellent Classes",
//     description:
//       "Join Excellent Classes for CBSE coaching in Mumbai with experienced teachers, proven results, and expert guidance.",
//     images: [
//       {
//         url: "/img/cbseBanner.jpg",
//         width: 1200,
//         height: 630,
//         alt: "CBSE Coaching Excellent Classes",
//       },
//     ],
//     siteName: "Excellent Classes",
//     type: "website",
//     locale: "en_IN",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "CBSE Coaching Classes in Mumbai | Excellent Classes",
//     description:
//       "Join Excellent Classes for CBSE coaching in Mumbai with expert faculty and proven results.",
//     images: ["/img/cbseBanner.jpg"],
//   },
// };

export const metadata = {
  title: "CBSE Coaching Classes in Mumbai | Excellent Classes",
  description:
    "Excellent Classes offers the best CBSE coaching in Mumbai with experienced teachers, comprehensive study material, and excellent results.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/cbse",
  },
  openGraph: {
    title: "CBSE Coaching in kurla | Excellent Classes",
     description:
    "Excellent Classes offers the best CBSE coaching in Mumbai with experienced teachers, comprehensive study material, and excellent results.",
    url: "https://www.excellent-classes.nexcorealliance.com/cbse",
    siteName: "Excellent Classes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CBSE Coaching Classes in Mumbai",
      },
    ],
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