
import { BsMoon, BsSun } from "react-icons/bs";

const YearTotal = () => (
    <div className="mr-auto flex flex-row items-center justify-between w-full">
        <div>
            <p className="text-4xl font-extrabold font-display">75 Hours</p>
            <p>recorded in 2023</p>
        </div>
        <div className="p-4 cursor-pointer">
            <BsSun
                className="w-6 h-6 dark:hidden"
                title="You are in light mode"
            />
            <BsMoon
                className="w-6 h-6 hidden dark:block"
                title="You are in dark mode"
            />
        </div>
    </div>
);

export default YearTotal;