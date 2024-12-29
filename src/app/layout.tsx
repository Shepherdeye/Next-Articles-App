

import { Noto_Kufi_Arabic } from "next/font/google";
import NavBar from "@/Components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
const noto_Kufi_Arabic = Noto_Kufi_Arabic({ subsets: ["latin"], weight: "300" });




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#efefef"
        }}
        className={noto_Kufi_Arabic.className}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
