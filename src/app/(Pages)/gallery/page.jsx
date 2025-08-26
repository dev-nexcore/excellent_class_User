export const metadata = {
  title: "Excellent Classes Gallery | Excellent Classes Kurla, Mumbai – Student Life & Coaching Moments",
  description:
    "View the gallery of Excellent Classes Kurla, Mumbai – Photos of classrooms, faculty, students, and success celebrations. Experience our coaching environment before you join.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/gallery",
  },
  openGraph: {
    url: "https://www.excellent-classes.nexcorealliance.com/gallery",
    title: "Gallery | Excellent Classes",
   description:
    "View the gallery of Excellent Classes Kurla, Mumbai – Photos of classrooms, faculty, students, and success celebrations. Experience our coaching environment before you join.",
    images: [
      {
        url: "/img/galleryBanner.jpg",
        width: 1200,
        height: 630,
        alt: "Gallery Excellent Classes",
      },
    ],
    siteName: "Excellent Classes",
  },
  twitter: {
    card: "summary_large_image",
  },
};


import ImageComponent from "@/components/Gallery/imagecomponent";


export default function Home (){
    return (
        <>
     
        <ImageComponent/>
        </>
    )
}