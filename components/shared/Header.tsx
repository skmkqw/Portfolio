"use client";

import { Button, Container, Logo } from "@/components";
import Link from "next/link";

export default function Header() {

    function handleAboutClick() {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <Container>
            <header
                className={"px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 flex align-middle justify-between"}>
                <Logo />
                <div className="flex align-middle gap-5">
                    <Button type="button" text="About me" handleClick={handleAboutClick}
                            additionalStyles="hidden xs:block border border-gray-400 !text-white !bg-transparent hover:!bg-gray-900" />
                    <Link href="/contact">
                        <Button type="button" text="Contact" additionalStyles="h-full" />
                    </Link>
                </div>
            </header>
        </Container>
    );
}