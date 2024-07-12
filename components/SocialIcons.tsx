import Image from "next/image";

export default function SocialIcons() {
    return (
        <div className="flex gap-6 sm:gap-8 md:gap-10 xl:gap-12 items-center justify-center">
            <Image src="/github.svg" alt="Github logo" height={24} width={24} />
            <Image src="/instagram.svg" alt="Instagram logo" height={24} width={24} />
            <Image src="/linkedin.svg" alt="LinkedIn logo" height={24} width={24} />
            <Image src="/twitter.svg" alt="Twitter logo" height={24} width={24} />
        </div>
    );
}
