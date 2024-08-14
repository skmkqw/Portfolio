import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex gap-4 items-center cursor-pointer">
                <div className={"text-right"}>
                    <b className={"font-bold text-2xl"}>Timofei</b>
                    <p className={"text-xs tracking-widest"}>KORSAKOV</p>
                </div>
            </div>
        </Link>
    );
}