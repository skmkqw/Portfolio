import Image from "next/image";
import { StackBadge, Subtitle } from "@/components";
import Link from "next/link";

interface ProjectProps {
    imageSrc: string;
    name: string;
    description: string;
    stackNames: string[];
    url: string;
}

export default function Project({ imageSrc, name, description, stackNames, url }: ProjectProps) {
    return (
        <Link href={url} target="_blank">
            <div className="flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-2xl border border-white/30 p-2">
                <Image
                    src={imageSrc}
                    alt="Project Image"
                    width={600}
                    height={150}
                    className="rounded-2xl"
                />
                <div className="flex flex-col items-center py-7 px-4">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <p className="font-extrabold text-2xl">{name}</p>
                        <Subtitle text={description} />
                    </div>
                    <div className="flex items-center gap-2 mt-6 flex-wrap justify-center">
                        {stackNames.map((stackName, idx) => (
                            <StackBadge text={stackName} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}