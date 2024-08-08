import { Container, SocialIcons } from "@/components";
import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <Container>
            <footer className="w-full flex justify-center mt-24 py-10">
                <div className="max-w-2xl text-center flex flex-col items-center">
                    <SocialIcons />
                    <p className="mt-4 text-sm text-gray-400 px-6">
                        Designed in Figma. Built with Next.js and Tailwind CSS, deployed with Vercel. Developed by <Link
                        href="https://github.com/skmkqw"
                        className="text-blue-500">skmkqw</Link>
                    </p>
                </div>
            </footer>
        </Container>
    );
}
