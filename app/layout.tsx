import "./globals.css";

import {Header, Footer, Background} from "@/components";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "800"]
})

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000/"),
    title: "Timofei Korsakov",
    description:
        "Fullstack developer from Poland. Junior software engineer. Specializing web apps, Javascript and .NET technologies.",
    keywords: [
        "Developer",
        "Portfolio",
        "Developer Portflio",
        "Ibrahim Memon",
        "Next.js",
        "React",
        "ReactNative",
        "Android",
    ],
    openGraph: {
        title: "Timofei Korsakov",
        description:
            "Fullstack developer from Poland. Junior software engineer. Specializing web apps, Javascript and .NET technologies.",
        images: "/emoji.png",
    }
};

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
