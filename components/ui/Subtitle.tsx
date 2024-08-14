export default function Subtitle({ text, className }: { text: string, className?: string }) {
    return <p className={`${className} font-medium text-base md:text-lg`}>{text}</p>;
}