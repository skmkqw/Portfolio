import "./globals.css";

import { Background, Footer, NavBar } from "@/components";
import { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"]
})

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000/"),
    title: "Timofei Korsakov",
    description:
        "Fullstack developer from Poland. Junior software engineer with focus on building scalable backends. Specializing web apps, Javascript and .NET technologies.",
    keywords: [
        "Developer",
        "Portfolio",
        "Developer Portflio",
        "Timofei Korsakov",
        "Next.js",
        "React",
        ".NET",
        "ASP.NET Core",
        "C#"
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
      <body className={`${jetBrainsMono.className} bg-black text-white bg-[url('/LooperGroup2.png')] bg-no-repeat overflow-x-hidden`}>
        <Background />
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
