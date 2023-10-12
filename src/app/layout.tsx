import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "csworld.com",
  description:
    "csworld is the official website for the computer science students to find study materials.",
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <div className="text-3xl sm:text-6xl py-2">-</div>
        {children}
        <Footer />
        <BottomNavigation />
      </body>
    </html>
  );
}
