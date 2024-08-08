'use client';

import {ButtonPrimary, Logo} from "@/components";

export default function Header()
{
    function handleContactClick()
    {
        console.log("Contact button clicked");
    }

    function handleAboutClick()
    {
        console.log("About button clicked");
    }

    return (
        <header className={'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 flex align-middle justify-between'}>
            <Logo/>
            <div className="flex align-middle gap-5">
                <ButtonPrimary text="About me" handleClick={handleAboutClick} additionalStyles="hidden xs:block border border-gray-400 !text-white !bg-transparent hover:bg-gray-800"/>
                <ButtonPrimary text="Contact" handleClick={handleContactClick}/>
            </div>
        </header>
    );
}