export default function Title({ text, className }: { text: string, className?: string }) {
    return <h1 className={`${className} font-bold text-4xl md:text-5xl lg:text-6xl`}>{text}</h1>;
}