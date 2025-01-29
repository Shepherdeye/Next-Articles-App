import type { Metadata } from "next";

// import { Cairo } from "next/font/google";

import NavBar from "@/Components/Navbar/Navbar";
import "./globals.css";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from "react-toastify";
import Footer from "@/Components/Footer/Footer";

// const poppinsFont = Cairo({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Cloud App",
  description: "Cloud App Full stack Using TS",
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en"
    // className={poppinsFont.className}
    >
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
