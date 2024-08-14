import { AboutSection, HeroSection, ProjectsSection, StackSection } from "@/components";

export default function Home() {
    return (
        <main className="h-full w-full mt-10 xs:mt-16 sm:mt-20 flex flex-col items-center gap-14 xs:gap-18 md:gap-28">
            <HeroSection />
            <AboutSection />
            <StackSection />
            <ProjectsSection />
        </main>
    );
}
