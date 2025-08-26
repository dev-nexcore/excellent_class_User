// src/app/locations/[slug]/page.js
import { notFound } from "next/navigation";

const locations = {
  "kurla": {
    title: "Best Coaching Classes in Kurla - Excellent Classes",
    description: "Join Excellent Classes in Kurla for SSC, HSC, NEET, JEE, Commerce & Science.",
  },
  "mumbai": {
    title: "Top Coaching Classes in Mumbai - Excellent Classes",
    description: "Leading coaching institute in Mumbai for 8th-12th, NEET, JEE, CA Foundation & more.",
  },
  "kurla-east": {
    title: "Best Coaching Classes in Kurla East - Excellent Classes",
    description: "Excellent Classes Kurla East branch for Science & Commerce students.",
  },
  "kurla-west": {
    title: "Best Coaching Classes in Kurla West - Excellent Classes",
    description: "Top SSC, HSC & Competitive Exam coaching in Kurla West.",
  },
};

export async function generateMetadata({ params }) {
  const location = locations[params.slug];
  if (!location) return notFound();

  return {
    title: location.title,
    description: location.description,
  };
}

export default function LocationPage({ params }) {
  const location = locations[params.slug];
  if (!location) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{location.title}</h1>
      <p className="mt-2">{location.description}</p>
      <p className="mt-4">📍 Visit our branch in {params.slug.replace("-", " ")}.</p>
    </div>
  );
}
