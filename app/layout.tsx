import "./globals.css";

import {Header, Footer, Background} from "@/components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white`}>
        <Background />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
