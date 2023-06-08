import { InputHTMLAttributes, forwardRef } from "react"
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from "@/lib/utils";

const inputVariants = cva(
    `transition-all font-medium bg-white border-4 border-neutral-200 text-gray-900 rounded outline-none
     focus:ring-cgreen focus:border-cgreen block w-full 
     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cgray-outline dark:focus:border-cgray-dark`,
    {
        variants: {
            variant: {
                default: "lg:p-3 p-2 lg:text-xl text-lg",
                number: "lg:p-6 p-4 tracking-wide text-3xl"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}


const Input = forwardRef<HTMLInputElement, InputProps>(({
    variant,
    className,
    ...inputProps
}, ref) => {
    return (    
            <input ref={ref} className={cn(inputVariants({variant, className}))} {...inputProps} />
    );
})

Input.displayName = "Input";

export default Input;
