import { InputHTMLAttributes } from "react"
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from "@/lib/utils";

const inputVariants = cva(
    `transition-all font-semibold bg-white border-4 border-cgray text-gray-900 rounded outline-none
     focus:ring-cgreen focus:border-cgreen block w-full 
     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cgray-outline dark:focus:border-cgray-dark`,
    {
        variants: {
            variant: {
                default: "p-3 text-xl",
                number: "p-6 tracking-wide text-3xl"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}


const Input: React.FunctionComponent<InputProps> = ({
    variant,
    className,
    ...inputProps
}) => {
    return (            
            <input className={cn(inputVariants({variant, className}))} {...inputProps} />
    );
};

export default Input;
