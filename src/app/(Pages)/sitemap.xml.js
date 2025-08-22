// pages/sitemap.xml.js

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.excellentclasses.nexcorealliance.com"; // apna domain yaha daalo

  // ✅ Static pages list
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/results",
    "/courses",
    "/blogs",
  ];

  // ✅ Agar tumhare paas courses/blogs DB/API se aate hain
  // For now mai dummy array bana raha hoon, baad me API connect kar lena
  const courses = [
    { slug: "maths-10th" },
    { slug: "science-12th" },
  ];

  const blogs = [
    { slug: "how-to-score-95-in-board-exam" },
    { slug: "neet-preparation-tips" },
  ];

  const urls = [
    ...staticPages.map((page) => ({
      loc: `${baseUrl}${page}`,
      lastmod: new Date().toISOString(),
    })),
    ...courses.map((course) => ({
      loc: `${baseUrl}/courses/${course.slug}`,
      lastmod: new Date().toISOString(),
    })),
    ...blogs.map((blog) => ({
      loc: `${baseUrl}/blogs/${blog.slug}`,
      lastmod: new Date().toISOString(),
    })),
  ];

  // ✅ XML banao
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
        </url>`;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
