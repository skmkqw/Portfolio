export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`w-full mx-auto max-w-screen-xl px-6 ${className}`}>{children}</div>
    );
}