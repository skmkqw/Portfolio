import { Button, Container, Subtitle, Title } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <Container className="flex flex-col items-center text-center">
            <Image
                src="/emoji.png"
                alt="Portrait emoji"
                width={200}
                height={200}
                className="bg-gradient-to-t from-indigo-500 to-orange-500 rounded-full"
            />
            <Title
                text="Timofei Korsakov"
                className="mt-6 md:mt-12"
            />
            <p className="font-semibold text-[#C9C9C9] text-2xl lg:text-3xl mt-4">
                I do <span
                        className="bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent">
                    Code
                </span>
            </p>
            <Subtitle
                text="Passionate Software Engineer with a focus on React + .NET fullstack development, dedicated to crafting elegant and user-friendly web applications."
                className="max-w-xl mt-4 md:mt-8"
            />
            <Link href="/contact">
                <Button
                    type="button"
                    text="Contact me"
                    additionalStyles="border border-gray-400 text-white !bg-black hover:!bg-gray-900 mt-5 md:mt-9 py-3 px-12 rounded-full text-lg"
                />
            </Link>
        </Container>
    );
}