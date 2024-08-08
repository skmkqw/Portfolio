import { Inter } from 'next/font/google';

const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
});

export default function GradientText({ text, className }: { text: string, className?: string }) {
    return <p className={`${inter.className} text-xs font-medium tracking-widest bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent ${className}`}>{text}</p>;
}