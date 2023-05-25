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

    const primaryStyles = `px-4 py-2 text-white font-bold rounded text-center 
    focus:ring-4 focus:outline-none focus:ring-${color}-light 
    bg-${color} hover:bg-${color}-dark dark:focus:ring-${color}-light 
    transition-colors`


    const secondaryStyles = `
    px-4 py-2
    text-gray-700 rounded  text-center font-medium
    focus:ring-4 focus:outline-none focus:ring-cgray-outline
    bg-cgray-dark hover:bg-cgray-hover transition-colors
    `

    return (
        <button
            onClick={getOnClick()}
            type={type}
            {...buttonProps}
            className={!secondary ? primaryStyles : secondaryStyles}
        >
            {children}
        </button>
    );
};

export default Button;
