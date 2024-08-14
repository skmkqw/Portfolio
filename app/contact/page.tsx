import { Container, Title } from "@/components";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="w-full">
            <Container className="text-center flex flex-col items-center gap-10 py-10">
                <Title text="Drop a letter" className="" />
                <Title text="tkorsakov77@gmail.com"
                       className="bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent leading-normal" />
                <Title text="or visit my socials" className="" />
                <div className="flex items-center gap-12">
                    <Link href="https://github.com/skmkqw" target="_blank">
                        <Image src="/github-gradient.png" alt="Github logo" width={80} height={80} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/timofei-korsakov-3602a2303/" target="_blank">
                        <Image src="/linkedin-gradient.png" alt="LinkedIn logo" width={80} height={80} />
                    </Link>
                    <Link href="https://t.me/tksmkq" target="_blank">
                        <Image src="/tg-gradient.png" alt="Telegram logo" width={80} height={80} />
                    </Link>
                </div>
            </Container>
        </main>
    );
}