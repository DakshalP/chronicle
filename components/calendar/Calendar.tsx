import { arrOfLength, cn, getDaysInMonth, getFirstWeekdayNum } from "@/lib/utils";
import Day from "./Day";

const Calendar = ({ month, year, className = "" }: { month: number; year: number, className?: string}) => {

    const selected = [6, 20, 27, 19, 22];

    const monthIndex = month - 1;
    const currentDate = new Date();

    const renderDays = () => {

        const nums = arrOfLength(getDaysInMonth(monthIndex, year)); //ex: [1, 2, ... , 31]
        const days = nums.map((dayNum) => {

            const isToday = year === currentDate.getFullYear() && monthIndex === currentDate.getMonth() && dayNum === currentDate.getDate()

            if (selected.includes(dayNum)) {
                return <Day key={dayNum} variant="green" isToday={isToday}>{dayNum}</Day>;
            }
            else return <Day key={dayNum} isToday={isToday}>{dayNum}</Day>;
        });
        
        //start first day on correct weekday
        for (let d = 0; d < getFirstWeekdayNum(monthIndex, year); d++) {
            days.unshift(
                <Day className="invisible" aria-hidden>
                    _
                </Day>
            );
        }

        return days;
    };

    return (
        <div className={cn("p-5 w-full bg-neutral-100 md:dark:bg-gray-800 dark:bg-gray-900 md:mb-0 mb-10 rounded text-sm", className)}>
            <span className="grid grid-cols-7 font-bold">
                <Day variant="header">S</Day>
                <Day variant="header">M</Day>
                <Day variant="header">T</Day>
                <Day variant="header">W</Day>
                <Day variant="header">T</Day>
                <Day variant="header">F</Day>
                <Day variant="header">S</Day>
            </span>
            <span className="grid grid-cols-7 gap-2">{renderDays()}</span>
        </div>
    );
};

export default Calendar;
