"use client";

import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react"
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "rounded text-center active:ring-4 focus:ring-2 ring-0 focus:outline-none transition-colors",
    {
        variants: {
            variant: {
                cbrown: 
                    "font-bold text-white ring-cbrown-light bg-cbrown hover:bg-cbrown-dark dark:ring-cbrown-light",
                cgreen:
                    "font-bold text-white ring-cgreen-light bg-cgreen hover:bg-cgreen-dark dark:ring-cgreen-light",
                cgray:
                    "font-medium text-gray-700 ring-cgray-outline bg-cgray-dark hover:bg-cgray-hover dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:ring-gray-500"
            },
            size: {
                default: "py-3 px-6",
                small: "py-1 px-4"
            },
        },
        defaultVariants: {
            variant: "cgray",
            size: "default",
        }
        
    }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>  {
    type?: 'submit' | 'reset' | 'button' | undefined;
    href?: string;
}


const Button: React.FunctionComponent<ButtonProps> = ({
    variant,
    size,
    href,
    type = "button",
    className,
    onClick,
    ...buttonProps
}) => {
    const router = useRouter();

    const getOnClick = () => {
        if (onClick) return onClick;
        else if (href) return () => router.push(href);
        //else undefined
    };

    return (
        <button
            className={cn(buttonVariants({ variant, size, className }))}
            onClick={getOnClick()}
            type={type}
            {...buttonProps}
        />
    );
};

export default Button;
