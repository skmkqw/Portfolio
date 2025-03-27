import { AboutSection, ContactSection, HeroSection, ProjectsSection, StackSection } from "@/components";

export default function Home() {
    return (
        <main className="h-full w-full mt-16 xs:mt-24 sm:mt-32 flex flex-col items-center">
            <HeroSection />
            <AboutSection />
            <StackSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
}
