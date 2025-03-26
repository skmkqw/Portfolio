export default function Container({ children, className, id }: { children: React.ReactNode, className?: string, id?:string }) {
    return (
        <div className={`w-full mx-auto max-w-screen-xl px-6 ${className}`} id={id}>
            {children}
        </div>
    );
}