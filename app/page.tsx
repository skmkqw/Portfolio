import type { Metadata } from "next";
import { AboutSection, HeroSection, StackSection } from "@/components";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Timofei Korsakov developer portfolio"
};


export default function Home() {
    return (
        <main className="h-full w-full">
            <HeroSection />
            <AboutSection />
            <StackSection />
        </main>
    );
}
