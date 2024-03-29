import { arrOfLength, cn, getDaysInMonth, getFirstWeekdayNum } from "@/lib/utils";
import Day from "./Day";


type Props = { loading: boolean, month: number; year: number, enteredDays: number[], zeroedDays: number[], className?: string}

const Calendar = ({ loading, month, year, enteredDays, zeroedDays, className = "" }: Props) => {

    const monthIndex = month - 1;
    const currentDate = new Date();

    const renderDays = () => {

        const nums = arrOfLength(getDaysInMonth(monthIndex, year)); //ex: [1, 2, ... , 31]
        const days = nums.map((dayNum) => {

            if(loading) {
                return <Day variant="blank" key={dayNum}>_</Day>;
            }

            const isToday = year === currentDate.getFullYear() && monthIndex === currentDate.getMonth() && dayNum === currentDate.getDate()
            
            
            if(!enteredDays.includes(dayNum)) {
                if(zeroedDays.includes(dayNum)) {
                    return <Day key={dayNum} variant="cancelled" isToday={isToday}>{dayNum}</Day>;
                }
                return <Day key={dayNum} isToday={isToday}>{dayNum}</Day>;
            }
            else {
                return <Day key={dayNum} variant="green" isToday={isToday}>{dayNum}</Day>;
            }
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

    const baseStyles = `xl:p-10 lg:p-5 p-5 w-full bg-white md:dark:bg-gray-900 dark:bg-gray-900 md:mb-0 mb-10 rounded text-sm ${loading ? 'animate-pulse' : ''}`

    return (
        <div className={cn(baseStyles, className)}>
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
