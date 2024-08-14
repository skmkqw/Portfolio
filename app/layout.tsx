import "./globals.css";

import {Header, Footer, Background} from "@/components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "800"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white bg-[url('/LooperGroup2.png')] bg-no-repeat`}>
        <Background />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
