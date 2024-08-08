"use client";

import { Button, Container, Logo } from "@/components";

export default function Header() {
    function handleContactClick() {
        console.log("Contact button clicked");
    }

    function handleAboutClick() {
        console.log("About button clicked");
    }

    return (
        <Container>
            <header
                className={"px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 flex align-middle justify-between"}>
                <Logo />
                <div className="flex align-middle gap-5">
                    <Button type="button" text="About me" handleClick={handleAboutClick}
                            additionalStyles="hidden xs:block border border-gray-400 !text-white !bg-transparent hover:!bg-gray-900" />
                    <Button type="button" text="Contact" handleClick={handleContactClick} />
                </div>
            </header>
        </Container>
    );
}