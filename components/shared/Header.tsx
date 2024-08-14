import { Button, Container, Logo } from "@/components";
import Link from "next/link";

export default function Header() {
    return (
        <Container>
            <header className="px-1 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 flex align-middle justify-between">
                <Logo />
                <div className="flex align-middle gap-2 sm:gap-5">
                    <Link href="/contact">
                        <Button
                            type="button"
                            text="Contact"
                            additionalStyles="h-full"
                        />
                    </Link>
                </div>
            </header>
        </Container>
    );
}