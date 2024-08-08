import { Container, SocialIcons } from "@/components";

export default function Footer() {
    return (
        <Container>
            <footer className="w-full flex justify-center mt-24">
                <div className="max-w-2xl text-center flex flex-col items-center">
                    <SocialIcons />
                    <p className="mt-4 text-sm text-gray-400 px-6">
                        Loosely designed in <span className="text-blue-500">Figma</span> and coded in Visual Studio Code
                        by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in
                        the Inter typeface.
                    </p>
                </div>
            </footer>
        </Container>
    );
}
