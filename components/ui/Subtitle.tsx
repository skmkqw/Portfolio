export default function Subtitle({ text, className }: { text: string, className?: string }) {
    return <p className={`font-medium text-lg ${className}`}>{text}</p>;
}