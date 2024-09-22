import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
import BottomHeader from "@/components/Header/bottom-header";
import SideHeader from "@/components/Header/side-header";
import Footer from "@/components/Footer/footer";
import TopHeader from "@/components/Header/top-header";
import { NewsModal } from "@/components/Home/notice-modal/Modal";





const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sankharnagar Khangepani ",
  description: "Pure Water at your door"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased min-h-screen`}
      >
        <TopHeader />

        <BottomHeader />
        <SideHeader />
        <NewsModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
