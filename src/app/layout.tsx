import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bosta-task-rust.vercel.app"),
  title: {
    default: "BOSTA — Premium E-Commerce",
    template: "%s | BOSTA",
  },
  description:
    "Discover top-quality products at great prices. Free shipping on orders over $50. Shop electronics, fashion, jewelry & more.",
  keywords: [
    "BOSTA",
    "e-commerce",
    "online shopping",
    "premium products",
    "free shipping",
    "electronics",
    "fashion",
    "jewelry",
  ],
  authors: [{ name: "BOSTA" }],
  creator: "BOSTA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bosta-task-rust.vercel.app",
    siteName: "BOSTA",
    title: "BOSTA — Premium E-Commerce",
    description:
      "Discover top-quality products at great prices. Free shipping on orders over $50.",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
