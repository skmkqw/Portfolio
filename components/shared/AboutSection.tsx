import { Container, GradientText, Subtitle, Title } from "@/components";
import React from "react";

export default function AboutSection() {
    return (
        <div>
            <Container className="flex flex-col items-center text-center py-8 sm:py-12 md:py-16">
                <Title text="About Me" />
                <GradientText
                    text="EXPLORE NOW"
                    className="mt-4"
                />
                <Subtitle
                    className="max-w-2xl mt-8 text-[#E1E1E1]"
                    text="As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of Next.js, my expertise centers around .NET and React, where I seamlessly blend technology with innovation."
                />
                <Subtitle
                    className="max-w-2xl mt-8 text-[#E1E1E1]"
                    text="With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible"
                />
            </Container>
        </div>
    );
}