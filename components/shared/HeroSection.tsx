import { Button, Container, Subtitle, Title } from "@/components";
import Image from "next/image";

export default function HeroSection() {
    return (
        <Container className="mt-28 flex flex-col items-center text-center">
            <Image src="/emoji.png" alt="Portrait emoji" width={200} height={200}
                   className="bg-[#1A1A1A] rounded-full" />
            <Title text="Timofei Korsakov" className="mt-12 text-4xl md:text-5xl lg:text-6xl" />
            <p className="font-semibold text-[#C9C9C9] text-xl md:text-2xl lg:text-3xl mt-4">
                I do <span
                        className="bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent">
                    Code
                </span>
            </p>
            <Subtitle
                text="Passionate Software Engineer with a focus on React + .NET fullstack development, dedicated to crafting elegant and user-friendly web applications."
                className="max-w-xl mt-8 text-base md:text-lg" />
            <Button type="button" text="Contact me"
                    additionalStyles="border border-gray-400 text-white !bg-black hover:!bg-gray-900 mt-9 py-3 px-12 rounded-full text-lg" />
        </Container>
    );
}