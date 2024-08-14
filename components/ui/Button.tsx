"use client";

import { MouseEventHandler } from "react";

interface ButtonProps {
    type: "button" | "submit" | "reset",
    text: string,
    additionalStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    children?: React.ReactNode
}

export default function Button({ type, text, additionalStyles, handleClick, children }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={handleClick}
            className={`${additionalStyles} text-black text-sm px-6 py-0.5 rounded-2xl bg-white hover:bg-gray-200 transition ease-out duration-300 font-medium`}
        >
            <p>{text}</p>
            {children}
        </button>
    );
}