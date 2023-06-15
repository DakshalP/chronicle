import { monthIndexToWord } from "@/lib/utils";
import Button from "../Button";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

type Props = {
    currentYear: number;
    currentMonth: number;
    month: number;
    year: number;
    setMonth: Function;
    setYear: Function;
    noEntries: boolean;
};

const Header = ({
    currentMonth,
    currentYear,
    month,
    year,
    setMonth,
    setYear,
    noEntries,
}: Props) => {
    const currentMonthIndex = month - 1;
    const previousMonthIndex = month - 2;
    const nextMonthIndex = month;

    const increase = () => {
        if (month == 12) {
            setMonth(1);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    const decrease = () => {
        if (month == 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    return (
        <div className="w-full md:my-10">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                <div>
                    <h1 className="xl:text-6xl text-5xl font-bold mb-2 md:text-left text-center">
                        {monthIndexToWord(currentMonthIndex).substring(0, 3)}{" "}
                        {year}
                    </h1>
                    {noEntries && (
                        <h2 className="text-gray-600 ml-0.5 font-bold bg-white dark:bg-gray-300 my-5 p-3 rounded md:text-start text-center w-full">
                            No entries this month. Create one using
                            <span className="lg:hidden inline"> the +Entry button below.</span>
                            <span className="lg:inline hidden"> New Entry button to the right.</span>
                        </h2>
                    )}
                </div>
                <div className="flex items-start md:justify-end justify-center md:-mb-3 gap-5">
                    <Button size="small" onClick={decrease}>
                        <BiCaretLeft className="w-7 h-7" />
                    </Button>
                    <Button
                        onClick={() => {
                            setMonth(currentMonth);
                            setYear(currentYear);
                        }}
                        variant={
                            currentMonth === month && currentYear === year
                                ? "cgray"
                                : "cgreen"
                        }
                        disabled={
                            currentMonth === month && currentYear === year
                        }
                        size="small"
                        className="font-medium whitespace-nowrap"
                    >
                        This Month
                    </Button>
                    <Button size="small" onClick={increase}>
                        <BiCaretRight className="w-7 h-7" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
