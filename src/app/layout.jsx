import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";

// Load fonts using next/font/google
import { Poppins } from 'next/font/google';
import { Radley } from 'next/font/google';
import { Lisu_Bosa } from "next/font/google";

const lisuBosa = Lisu_Bosa({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: '--font-lisu-bosa', // ✅ Needed to use in Tailwind
});

// Define font imports with variable names
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap', // recommended for better performance
});

const radley = Radley({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-radley',
  display: 'swap',
});

// Metadata for the site
// export const metadata = {
//   title: "Excellent Classes",
//   description:
//     "Excellent Classes provides expert coaching with top results, experienced faculty, and personalized guidance. Join the best institute for academic success.",
//   keywords: [
//     "Excellent Classes",
//     "Best Coaching Classes",
//     "Coaching Institute",
//     "Tuition for Students",
//     "Top Classes in Mumbai", // yahan apna city name daalo
//     "Board Exam Coaching",
//     "NEET Coaching",
//     "IIT JEE Coaching",
//   ],
//     alternates: {
//     canonical: "https://www.excellent-classes.nexcorealliance.com", // ✅ add this
//   },
//     icons: {
//     icon: [
//       { url: "/favicon.ico", sizes: "any" },
//       { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
//       { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
//     ],
//     apple: [
//       { url: "/apple-touch-icon.png", sizes: "180x180" },
//     ],
//   },
//   manifest: "/site.webmanifest",
//   openGraph: {
//     title: "Excellent Classes",
//     description:
//       "Join Excellent Classes for expert coaching, personalized guidance, and proven results. Your success is our mission!",
//     url: "https://www.excellent-classes.nexcorealliance.com", // Apna domain daalo
//     siteName: "Excellent Classes",
//     images: [
//       {
//         url: "/og-image.jpg", // Public folder me SEO image rakho
//         width: 1200,
//         height: 630,
//         alt: "Excellent Classes",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Excellent Classes ",
//     description:
//       "Best coaching institute with expert teachers, top results, and guidance for success.",
//     images: ["/og-image.jpg"],
//   },
// };

export const metadata = {
  title: "Excellent Classes | Best Coaching in Kurla & Mumbai for ICSE, CBSE, SSC & HSC",
  description:
    "Excellent Classes in Kurla, Mumbai offers coaching for 8th–12th (ICSE, CBSE, SSC & HSC), along with JEE & NEET preparation. Experienced faculty, personalized guidance, and proven results.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com",
  },
  keywords: [
  "Excellent Classes",
  "coaching classes in Kurla",
  "best coaching in Mumbai",
  "SSC coaching Kurla",
  "ICSE CBSE tuition Kurla",
  "11 12 Science Commerce coaching",
  "NEET JEE preparation Mumbai"
],

  openGraph: {
    title: "Excellent Classes | Coaching in Mumbai",
    description:
      "Join Excellent Classes in Kurla & Mumbai – Coaching for ICSE, CBSE, SSC, HSC, JEE & NEET. Expert teachers, quality notes & 100% result-driven training.",
    url: "https://www.excellent-classes.nexcorealliance.com",
    siteName: "Excellent Classes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Excellent Classes Coaching in Mumbai",
      },
    ],
    
  },
};


// Layout structure
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${radley.variable} ${lisuBosa.variable} scrollbar-thin scrollbar-thumb-[#f26722] scrollbar-track-blue-900`}>
      <body className="antialiased">
       

        <Navbar />
        <BreadCrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}

