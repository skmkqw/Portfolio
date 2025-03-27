import { Container, GradientText, Project, Title } from "@/components";
import React from "react";

const projects = [
    {
        imageSrc: "/foodieland.webp",
        name: "Foodieland",
        description: "Recipe-sharing social network app",
        stackNames: ["Next.js", ".NET", "C#", "MSSQL"],
        url: "https://github.com/skmkqw/Foodieland"
    },
    {
        imageSrc: "/draus.png",
        name: "Draus Design",
        description: "Portfolio website for thumbnails creator",
        stackNames: ["Next.js", "Tailwind", "Framer"],
        url: "https://draus.studio"
    },
    {
        imageSrc: "/findashboard.png",
        name: "Findashboard Backend",
        description: "Team-focused finance & project management platform",
        stackNames: [".NET", "C#", "PostgreSQL"],
        url: "https://github.com/skmkqw/findashboard"
    },
    {
        imageSrc: "/findashboard.png",
        name: "Findashboard Frontend",
        description: "Team-focused finance & project management platform",
        stackNames: ["Next.js", "Tailwind"],
        url: "https://github.com/skmkqw/findashboard-frontend"
    },
];

export default function ProjectsSection() {
    return (
        <Container className="flex flex-col items-center text-center py-8 sm:py-12 md:py-16 scroll-mt-20" id="projects">
            <Title text="Projects" />
            <GradientText
                text="EXPLORE NOW"
                className="mt-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mt-8 md:mt-12">
                {projects.map((project, idx) => (
                    <Project {...project} key={idx} />
                ))}
            </div>
        </Container>
    );
}