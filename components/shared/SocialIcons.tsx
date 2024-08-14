import Image from "next/image";
import Link from "next/link";

export default function SocialIcons() {
    return (
        <div className="flex gap-4 items-center">
            <Link href="https://github.com/skmkqw" target="_blank">
                <Image
                    src="/github.svg"
                    alt="Github logo"
                    height={24}
                    width={24}
                    className="h-6 w-6"
                />
            </Link>
            <Link href="https://www.linkedin.com/in/timofei-korsakov-3602a2303/" target="_blank">
                <Image
                    src="/linkedin.svg"
                    alt="LinkedIn logo"
                    height={24}
                    width={24}
                    className="h-6 w-6"
                />
            </Link>
        </div>
    );
}
