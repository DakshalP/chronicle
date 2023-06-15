import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';

const dayVariants = cva(
    "rounded aspect-square flex justify-center items-center font-bold xl:text-base lg:text-sm text-xs",
    {
        variants: {
            variant: {
                default: "bg-neutral-200 text-neutral-400 dark:bg-gray-700 dark:text-gray-500",
                blank: "bg-neutral-200 text-neutral-200 dark:bg-gray-700 dark:text-gray-700",
                header: "bg-inherit",
                green: "bg-cgreen text-white",
                cancelled: "bg-neutral-200 text-neutral-400 dark:bg-gray-700 dark:text-gray-500 cancel-x"
            },
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

interface DayProps extends VariantProps<typeof dayVariants> {
    isToday?: boolean,
    className?: string,
    children: React.ReactNode,
}

const Day: React.FunctionComponent<DayProps> = ({ isToday = false, variant, className, children,...props}) => {
    return <span {...props} className={cn(dayVariants({variant, className}))}>
        <span className={`${variant === 'green' && isToday ? 'bg-white text-cgreen' : isToday ? 'bg-neutral-400 dark:bg-gray-800 text-white'  : '' } xl:px-2 xl:py-1.5 px-1 py-0.5 aspect-square rounded-full`}>
            {children}
        </span>
    </span>;
};

export default Day;