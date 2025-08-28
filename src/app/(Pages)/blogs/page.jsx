export const metadata = {
  title: "Blog | Excellent Classes",
  description:
    "Read the latest blogs, articles, and insights from Excellent Classes. Stay updated with exam tips, study strategies, and success stories.",
  openGraph: {
    url: "https://www.excellentclasses.nexcorealliance.com/blog",
    title: "Blog | Excellent Classes",
    description:
      "Explore blogs and articles by Excellent Classes – exam tips, preparation strategies, and inspirational student success stories.",
    siteName: "Excellent Classes",
  },
};

import Blogs from '@/components/blogs/blogs'
import React from 'react'

export default function page() {
  return (
    <>
     <Blogs/> 
    </>
  )
}
