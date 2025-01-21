import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import NavBar from "@/Components/Navbar/Navbar";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from "react-toastify";

const poppinsFont = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Cloud App",
  description: "Cloud App Full stack Using TS",
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={poppinsFont.className}>
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
