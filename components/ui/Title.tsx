export default function Title({ text, className }: { text: string, className?: string }) {
    return <h1 className={`font-bold text-6xl ${className}`}>{text}</h1>;
}