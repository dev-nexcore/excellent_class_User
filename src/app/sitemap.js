// // src/app/sitemap.js

// export default async function sitemap() {
//   const baseUrl = "https://excellent-classes.nexcorealliance.com";

//   // Static pages
//   const staticPages = [
//     "/",
//     "/about",
//     "/contact",
//     "/gallery",
//     "/results",
//     "/testimonial",
    
//     "/courses",
//     "/blogs",
//   ];

//   // Example dynamic data (dummy for now)
//   const courses = [
//     { slug: "maths-10th" },
//     { slug: "science-12th" },
//     { slug: "commerce-12th" },
//     { slug: "bms-bcom-baf" },
//     { slug: "ca-foundation" },
//     { slug: "iit-jee" },
//     { slug: "NEET" },
//     { slug: "SSC-CGL" },
//     { slug: "SSC-JE" },
//     { slug: "ssc-bank" },
//     { slug: "CBSE-Coaching" },
//     { slug: "ICSE-Coaching" },
//     { slug: "HSC-Coaching" },
//     { slug: "Foundation-Courses" },
//     { slug: "Crash-Courses" },
//     { slug: "Online-Courses" },

//   ];

//   const blogs = [
//     { slug: "how-to-score-95-in-board-exam" },
//     { slug: "neet-preparation-tips" },
//     { slug: "top-10-study-tips-for-students" },
//     { slug: "time-management-for-students" },
//     { slug: "importance-of-regular-revision" },
//     { slug: "effective-note-taking-strategies" },
//     { slug: "how-to-choose-the-right-coaching-class" },
//     { slug: "benefits-of-group-study" },
//     { slug: "stress-management-for-students" },
//     { slug: "how-to-improve-concentration" },
//     { slug: "best-books-for-competitive-exams" },
//     { slug: "role-of-parents-in-students-success" },
//     { slug: "how-to-develop-a-positive-mindset" },
//     { slug: "importance-of-physical-fitness-for-students" },
//     { slug: "how-to-balance-study-and-extracurricular-activities" },
//     { slug: "tips-for-effective-online-learning" },
//     { slug: "how-to-overcome-procrastination" },
//     { slug: "importance-of-goal-setting-for-students" },
//     { slug: "how-to-improve-memory-retention" },
//     { slug: "tips-for-writing-effective-essays" },
//   ];
//   const gallery = [
//     { slug: "annual-function-2025" },
//     { slug: "republic-day-celebration" },
//     { slug: "students-achievements" },
//   ];
//   // Return in Next.js App Router sitemap format
//   return [
//     ...staticPages.map((page) => ({
//       url: `${baseUrl}${page}`,
//       lastModified: new Date(),
//     })),
//     ...courses.map((course) => ({
//       url: `${baseUrl}/courses/${course.slug}`,
//       lastModified: new Date(),
//     })),
//     ...blogs.map((blog) => ({
//       url: `${baseUrl}/blogs/${blog.slug}`,
//       lastModified: new Date(),
//     })),
//      ...gallery.map((blog) => ({
//       url: `${baseUrl}/gallery/${blog.slug}`,
//       lastModified: new Date(),
//     })),
//   ];
// }

// src/app/sitemap.js
export default async function sitemap() {
  const baseUrl = "https://excellent-classes.nexcorealliance.com";

  // Static pages
  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/gallery",
    "/result",
    "/testimonial",
    "/courses",
    "/blogs",
  ];

  // Courses (slugs lowercase + hyphenated)
  const courses = [
    { slug: "maths-10th" },
    { slug: "science-12th" },
    { slug: "commerce-12th" },
    { slug: "bms-bcom-baf" },
    { slug: "ca-foundation" },
    { slug: "iit-jee" },
    { slug: "neet" },
    { slug: "ssc-cgl" },
    { slug: "ssc-je" },
    { slug: "ssc-bank" },
    { slug: "cbse-coaching" },
    { slug: "icse-coaching" },
    { slug: "11-12-commerce" }, // ✅ replacing HSC
    { slug: "11-12-science" }, // ✅ replacing HSC
    { slug: "foundation-courses" },
    { slug: "crash-courses" },
    { slug: "online-courses" },
  ];

  // Blogs
  const blogs = [
    { slug: "how-to-score-95-in-board-exam" },
    { slug: "neet-preparation-tips" },
    { slug: "top-10-study-tips-for-students" },
    { slug: "time-management-for-students" },
    { slug: "importance-of-regular-revision" },
    { slug: "effective-note-taking-strategies" },
    { slug: "how-to-choose-the-right-coaching-class" },
    { slug: "benefits-of-group-study" },
    { slug: "stress-management-for-students" },
    { slug: "how-to-improve-concentration" },
    { slug: "best-books-for-competitive-exams" },
    { slug: "role-of-parents-in-students-success" },
    { slug: "how-to-develop-a-positive-mindset" },
    { slug: "importance-of-physical-fitness-for-students" },
    { slug: "how-to-balance-study-and-extracurricular-activities" },
    { slug: "tips-for-effective-online-learning" },
    { slug: "how-to-overcome-procrastination" },
    { slug: "importance-of-goal-setting-for-students" },
    { slug: "how-to-improve-memory-retention" },
    { slug: "tips-for-writing-effective-essays" },
  ];

  // Gallery
  const gallery = [
    { slug: "annual-function-2025" },
    { slug: "republic-day-celebration" },
    { slug: "students-achievements" },
  ];

  // Final Sitemap
  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),
    ...courses.map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: new Date(),
    })),
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(),
    })),
    ...gallery.map((item) => ({
      url: `${baseUrl}/gallery/${item.slug}`,
      lastModified: new Date(),
    })),
  ];
}
