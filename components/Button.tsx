"use client";

import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, forwardRef } from "react"
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
    "rounded text-center tracking-wide active:ring-4 focus:ring-2 ring-0 focus:outline-none transition-colors disabled:opacity-75 disabled:pointer-events-none flex justify-center items-center gap-2",
    {
        variants: {
            variant: {
                cbrown: 
                    "font-bold text-lg text-white ring-cbrown-light bg-cbrown hover:bg-cbrown-dark dark:ring-cbrown-light",
                cgreen:
                    "font-bold text-lg text-white ring-cgreen-light bg-cgreen hover:bg-cgreen-dark dark:ring-cgreen-light",
                cgray:
                    "font-medium text-lg text-gray-700 ring-cgray-outline bg-cgray-dark hover:bg-cgray-hover dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 dark:ring-gray-400",
                nodark:
                    "font-medium text-lg text-gray-700 ring-cgray-outline bg-cgray-dark hover:bg-cgray-hover",
                red:
                    "font-medium text-lg text-white ring-red-300 bg-red-600 hover:bg-red-700"
            },
            size: {
                default: "py-3 px-8",
                small: "py-2 px-4"
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


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant,
    size,
    href,
    type = "button",
    className,
    onClick,
    ...buttonProps
}, ref) => {
    const router = useRouter();

    const getOnClick = () => {
        if (onClick) return onClick;
        else if (href) return () => router.push(href);
        //else undefined
    };

    return (
        <button
            ref={ref}
            className={cn(buttonVariants({ variant, size, className }))}
            onClick={getOnClick()}
            type={type}
            {...buttonProps}
        />
    );
})

Button.displayName = "Button";

export default Button;
