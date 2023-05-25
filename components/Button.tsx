"use client";

import { useRouter } from "next/navigation";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    color?: "cgreen" | "cbrown";
    scale?: "small";
    secondary?: boolean;
    href?: string;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
}


const Button: React.FunctionComponent<ButtonProps> = ({
    color = "cgreen",
    scale,
    secondary = false,
    children,
    href,
    type = "button",
    onClick,
    ...buttonProps
}) => {
    const router = useRouter();

    const getOnClick = () => {
        if (onClick) return onClick;
        else if (href) return () => router.push(href);
        //else undefined
    };

    const primaryStyles = `
    text-white font-bold  rounded text-center
    focus:ring-4 focus:outline-none focus:ring-${color}-light 
    bg-${color} hover:bg-${color}-dark
    dark:focus:ring-${color}-light
    transition-colors
    `


    const secondaryStyles = `
    text-gray-700 rounded  text-center font-medium
    focus:ring-4 focus:outline-none focus:ring-cgray-outline
    bg-cgray-dark hover:bg-cgray-hover transition-colors
    `

    return (
        <button
            onClick={getOnClick()}
            type={type}
            {...buttonProps}
            className={`${!secondary ? primaryStyles : secondaryStyles} 
            ${scale == "small" ? 'text-sm py-1.5 px-4 tracking-wide mx-1.5' : 'text-lg py-2 px-6 mx-2'}`}
        >
            {children}
        </button>
    );
};

export default Button;
