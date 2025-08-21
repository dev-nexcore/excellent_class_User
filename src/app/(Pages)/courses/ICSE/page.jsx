export const metadata = {
  title: "ICSE Coaching Classes in Mumbai | Excellent Classes",
  description:
    "Excellent Classes offers ICSE coaching in Mumbai with expert teachers, personalized study plans, and regular performance tracking.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/courses/icse",
  },
  openGraph: {
    url: "https://www.excellent-classes.nexcorealliance.com/courses/icse",
    title: "ICSE Coaching Classes in Mumbai | Excellent Classes",
    description:
      "Excellent Classes provides ICSE coaching with quality notes, expert faculty, and excellent results.",
    images: [
      {
        url: "/img/icseBanner.jpg",
        width: 1200,
        height: 630,
        alt: "ICSE Coaching Excellent Classes",
      },
    ],
    siteName: "Excellent Classes",
  },
  twitter: {
    card: "summary_large_image",
  },
};


import ICSEpage from "@/components/Courses/icsepage";   

export default function ICSEPage() {
  return (
    <>

   

      <ICSEpage />
    </>
  );
}