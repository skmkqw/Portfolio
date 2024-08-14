import { Container, GradientText, Project, Title } from "@/components";
import React from "react";

const projects = [
    {
        imageSrc: "/foodieland.png",
        name: "Foodieland",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur necessitatibus quo sequi.",
        stackNames: ["Next.js", ".NET", "C#", "MSSQL"],
        url: "https://pagespeed.web.dev/analysis?url=http%3A%2F%2Flocalhost%3A3000%2F"
    }
];

export default function ProjectsSection() {
    return (
        <Container className="my-28 flex flex-col items-center text-center">
            <Title text="Projects" className="text-4xl lg:text-5xl" />
            <GradientText text="EXPLORE NOW" className="mt-4" />
            <div className="flex flex-col items-center gap-14 mt-14">
                {projects.map((project, idx) => (
                    <Project {...project} key={idx} />
                ))}
            </div>
        </Container>
    );
}