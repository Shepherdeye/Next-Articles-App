import type { Metadata } from "next";

// Import the Inter font from Google Fonts
import { Inter } from "next/font/google";

import NavBar from "@/Components/Navbar/Navbar";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from "react-toastify";

// Integrate Inter font with appropriate weights
const interFont = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Cloud App",
  description: "Cloud App Full stack Using TS",
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={interFont.className}>
      <body
        style={{
          background: "#efefef"
        }}
      >
        <NavBar />
        <ToastContainer transition={Zoom} position="top-center" theme="colored" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
