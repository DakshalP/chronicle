import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';

const dayVariants = cva(
    "text-sm rounded aspect-square flex justify-center items-center font-bold",
    {
        variants: {
            variant: {
                default: "bg-neutral-200 text-neutral-400 dark:bg-gray-700 dark:text-gray-500",
                header: "bg-inherit text-base",
                green: "bg-cgreen text-white",
            }                
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

interface DayProps extends VariantProps<typeof dayVariants> {
    className?: string,
    children: React.ReactNode,
}

const Day: React.FunctionComponent<DayProps> = ({ variant, className, ...props}) => {
    return <span {...props} className={cn(dayVariants({variant, className}))}/>;
};

export default Day;