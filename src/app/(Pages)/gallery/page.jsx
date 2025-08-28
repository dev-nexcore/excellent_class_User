export const metadata = {
  title: "Gallery | Excellent Classes",
  description:
    "Explore the photo gallery of Excellent Classes showcasing events, achievements, and student activities.",
  alternates: {
    canonical: "https://www.excellent-classes.nexcorealliance.com/gallery",
  },
  openGraph: {
    url: "https://www.excellent-classes.nexcorealliance.com/gallery",
    title: "Gallery | Excellent Classes",
    description:
      "Explore the photo gallery of Excellent Classes showcasing events, achievements, and student activities.",
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