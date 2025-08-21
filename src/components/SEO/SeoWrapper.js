// app/layout.js
import { DefaultSeo } from "next-seo";
import SEO from "/next-seo.config";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DefaultSeo {...SEO} />
        {children}
      </body>
    </html>
  );
}
