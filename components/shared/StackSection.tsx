import { Container, GradientText, Title } from "@/components";
import Image from "next/image";
import React from "react";

const stackIcons = [
    {
        src: "/csharp.png",
        alt: "C# icon",
    },
    {
        src: "/dotnet.png",
        alt: ".NET icon",
    },
    {
        src: "/typescript.png",
        alt: "TypeScript icon",
    },
    {
        src: "/javascript.png",
        alt: "Javascript icon",
    },
    {
        src: "/reactjs.png",
        alt: "React icon",
    },
    {
        src: "/nodejs.png",
        alt: "Node.js icon",
    },
    {
        src: "/sql.png",
        alt: "SQL icon",
    },
    {
        src: "/html.png",
        alt: "HTML icon",
    },
    {
        src: "/css.png",
        alt: "CSS icon",
    },
    {
        src: "/github.png",
        alt: "Github icon",
    }
];

export default function StackSection() {
    return (
        <Container className="mt-28 flex flex-col items-center text-center">
            <Title text="Tech Stack" className="text-4xl lg:text-5xl" />
            <GradientText text="EXPERIENCE WITH" className="mt-4" />
            <div className="max-w-2xl w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 mt-10 justify-center">
                {stackIcons.map((icon, idx) => (
                    <div className="flex items-center justify-center" key={idx}>
                        <Image src={icon.src} alt={icon.alt} width={50} height={50} />
                    </div>
                ))}
            </div>
        </Container>
    );
}