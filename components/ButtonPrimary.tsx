'use client';


export default function ButtonPrimary({ text, additionalStyles = '', handleClick } : { text: string, additionalStyles?: string, handleClick: () => void }) {
    return (
        <button
            type="button"
            className={`text-black text-sm px-6 py-0.5 rounded-2xl bg-white hover:bg-gray-200 transition ease-out duration-300 font-medium  ${additionalStyles}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}