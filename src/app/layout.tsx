import type { Metadata } from "next";

// import { Noto_Kufi_Arabic } from "next/font/google";
import NavBar from "@/Components/Navbar/Navbar";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from "react-toastify";
// const noto_Kufi_Arabic = Noto_Kufi_Arabic({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: " EG Magazine",
  description: "EG Magazine Full stack Using TS",
}

interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#efefef"
        }}
      // className={noto_Kufi_Arabic.className}
      >
        <NavBar />
        <ToastContainer transition={Zoom} position="top-center" theme="colored" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
