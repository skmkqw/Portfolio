export default function StackBadge({ text }: { text: string }) {
    return (
        <div className="rounded-full bg-gradient-to-r from-indigo-500 to-orange-500 p-[2px] w-[110px]">
            <div className="bg-black rounded-full py-1.5 text-sm">{text}</div>
        </div>
    );
}