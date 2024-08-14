import { Container, GradientText, Project, Title } from "@/components";
import React from "react";

const projects = [
    {
        imageSrc: "/foodieland.png",
        name: "Foodieland",
        description: "Recipe-sharing social network app",
        stackNames: ["Next.js", ".NET", "C#", "MSSQL"],
        url: "https://github.com/skmkqw/Foodieland"
    }
];

export default function ProjectsSection() {
    return (
        <Container className="flex flex-col items-center text-center">
            <Title text="Projects" />
            <GradientText
                text="EXPLORE NOW"
                className="mt-4"
            />
            <div className="flex flex-col items-center gap-14 mt-8 md:mt-12">
                {projects.map((project, idx) => (
                    <Project {...project} key={idx} />
                ))}
            </div>
        </Container>
    );
}