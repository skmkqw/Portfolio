import Image from "next/image";

export default function Logo() {
    return (
        <div className={'flex gap-4 align-middle'}>
            <Image src="/logo.svg" alt="Logo image" width={24} height={27}/>
            <div className={'text-right'}>
                <b className={'font-bold text-2xl'}>Timofei</b>
                <p className={'text-xs tracking-widest'}>KORSAKOV</p>
            </div>
        </div>
    );
}