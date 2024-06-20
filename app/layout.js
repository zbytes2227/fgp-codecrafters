import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code Crafters Community",
  description: "Free Notes, Study Materials and Job Updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/image/favicon.ico"/>
      <link rel="manifest" href="/manifest.json"/>
      <meta name="theme-color" content="#0088ff" />
      <meta property="og:title" content="Code Crafters FGP" />
      <meta property="og:type" content="website" />
      <meta property="og:URL" content="http://fgpcodecrafters.site" />
      <meta property="og:image" content="https://fgpcodecrafters.site/192.png" />
      <meta name="keywords" content="Feroze Gandhi Polytechnic, FGP raebareli, code crafters, codecrfaters, fgpcodecrafters,code-crafters fgp, codecraftersfgp"/>
      <meta property="og:description" content="Welcome to Code Crafters Community, your hub for student collaboration and innovation. Join us to explore coding, share ideas, and create together!" />
      <meta name="robots" content="index, follow"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
