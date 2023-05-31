import { arrOfLength, getDaysInMonth, getFirstWeekdayNum } from "@/lib/utils";
import Day from "./Day";

const Calendar = ({ month, year }: { month: number; year: number }) => {
    const monthIndex = month - 1;

    const selected = [6, 20, 27, 19, 22];

    const renderDays = () => {
        const nums = arrOfLength(getDaysInMonth(monthIndex, year)); //ex: [1, 2, ... , 31]
        const days = nums.map((dayNum) => {
            if (selected.includes(dayNum))
                return <Day variant="green">{dayNum}</Day>;
            else return <Day>{dayNum}</Day>;
        });

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
        <div className="p-5 w-full bg-neutral-100 shadow dark:bg-gray-800 rounded">
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
