"use client"; // ✅ this makes it a client component

import { DefaultSeo } from "next-seo";
import SEO from "/next-seo.config";

export default function SeoWrapper() {
  return <DefaultSeo {...SEO} />;
}
