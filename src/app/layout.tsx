import Navbar from "@/components/Navbar";
import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "csworld.com",
  description:
    "csworld is the official website for the computer science students to find study materials.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <div className="text-3xl sm:text-6xl py-2">-</div>
        {children}
        <Footer />
        <div className="h-16 lg:h-0 text-white"></div>
        <div className="fixed bottom-0 w-full">
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
