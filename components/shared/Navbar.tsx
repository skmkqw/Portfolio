"use client";

import { memo, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components";

const MENU_ITEMS = [
    { title: "About Me", href: "#about" },
    { title: "Stack", href: "#stack" },
    { title: "Projects", href: "#projects" },
];

export default function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("#about");

    const toggleDrawer = useCallback(() => {
        document.body.style.overflow = isDrawerOpen ? "auto" : "hidden";
        setIsDrawerOpen(!isDrawerOpen);
    }, [isDrawerOpen]);

    useEffect(() => {
        const sections = MENU_ITEMS.map(item => document.querySelector(item.href) as HTMLElement);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop - sectionHeight / 3 &&
                        scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
                    ) {
                        setActiveSection(MENU_ITEMS[index].href);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-[#1f1f1f] flex flex-col items-center transition-all duration-1000 ease-in-out">
            <div className="flex max-w-screen-xl items-center justify-between w-full px-8 py-4">
                <Logo />
                <nav className="hidden md:flex items-center gap-4">
                    {MENU_ITEMS.map((item, idx) => (
                        <Link
                            className={`font-medium hover:text-foreground transition-all duration-300 ease-out ${activeSection === item.href
                                ? "text-foreground !font-bold"
                                : "text-secondary-foreground"}
                            `}
                            key={idx}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(item.href)?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden">
                    <MenuButton onClick={toggleDrawer} isActive={isDrawerOpen} />
                </div>
            </div>

            <div
                className={`overflow-hidden self-start transition-all z-50 relative duration-700 ease-in-out md:hidden ${isDrawerOpen ? "h-screen opacity-100 py-4" : "h-0 opacity-0"}`}
            >
                <nav className="flex flex-col gap-6 text-md px-8 py-6">
                    {MENU_ITEMS.map((item, idx) => (
                        <Link
                            className={`font-medium hover:text-foreground transition-all duration-300 ease-out ${activeSection === item.href
                                ? "text-foreground !font-bold"
                                : "text-secondary-foreground"
                                } 
                            `}
                            key={idx}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(item.href)?.scrollIntoView({
                                    behavior: "smooth"
                                });
                                toggleDrawer();
                            }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}


const MenuButton = memo(({ onClick, isActive }: {
    onClick: () => void,
    isActive: boolean
}) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-col justify-center items-center z-20"
            aria-expanded={isActive}
            aria-label={isActive ? "Close menu" : "Open menu"}
        >
            <span className={`bg-white block transition-all duration-300 ease-out 
                            h-[2px] w-6 rounded-[2px] ${isActive ? "rotate-45 translate-y-[6px]" : "-translate-y-0.5"}`} />
            <span className={`bg-white block transition-all duration-300 ease-out 
                    h-[2px] w-6 my-1 rounded-[2px] ${isActive ? "opacity-0" : "opacity-100"}`} />
            <span className={`bg-white block transition-all duration-300 ease-out
                        h-[2px] w-6 rounded-[2px] ${isActive ? "-rotate-45 -translate-y-[6px]" : "translate-y-0.5"}`} />
        </button>
    );
});

MenuButton.displayName = "MenuButton";