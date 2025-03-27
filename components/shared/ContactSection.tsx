import { Container, Title } from "@/components";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
    return (
        <Container className="text-center flex flex-col items-center gap-10 py-16 sm:py-40 scroll-mt-30" id="contact">
            <Title
                text="Drop a letter"
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl"
            />
            <Title
                text="tkorsakov77@gmail.com"
                className="bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent !text-2xl xs:!text-3xl sm:!text-4xl md:!text-5xl"
            />
            <Title
                text="or visit my socials"
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl"
            />
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-6">
                <Link href="https://github.com/skmkqw" target="_blank">
                    <Image
                        src="/github-gradient.png"
                        alt="Github logo"
                        width={60}
                        height={60}
                        className="w-10 h-10 md:w-14 md:h-14"
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/timofei-korsakov-3602a2303/" target="_blank">
                    <Image
                        src="/linkedin-gradient.png"
                        alt="LinkedIn logo"
                        width={60}
                        height={60}
                        className="w-10 h-10 md:w-14 md:h-14"
                    />
                </Link>
                <Link href="https://t.me/tksmkq" target="_blank">
                    <Image
                        src="/tg-gradient.png"
                        alt="Telegram logo"
                        width={60}
                        height={60}
                        className="w-10 h-10 md:w-14 md:h-14" />
                </Link>
            </div>
        </Container>
    );
}