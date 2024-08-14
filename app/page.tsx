import { AboutSection, HeroSection, ProjectsSection, StackSection } from "@/components";

export default function Home() {
    return (
        <main className="h-full w-full">
            <HeroSection />
            <AboutSection />
            <StackSection />
            <ProjectsSection />
        </main>
    );
}
