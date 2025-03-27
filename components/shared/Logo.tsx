import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="cursor-pointer">
                <p className={"text-2xl tracking-wide"}>{"<skmkqw/>"}</p>
            </div>
        </Link>
    );
}