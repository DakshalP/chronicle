import { ClassValue, clsx } from "clsx"
import { twMerge } from 'tailwind-merge'

export const cn  = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const arrOfLength = (n: number): Array<number> => Array.from({ length: n }, (_, i) => i + 1);

export const getDaysInMonth = (monthIndex: number, year: number) => new Date(year, monthIndex + 1, 0).getDate();

export const getFirstWeekdayNum = (monthIndex: number, year: number) => new Date(year, monthIndex, 1).getDay();

export const monthIndexToWord = (monthIndex: number) => [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ][monthIndex]

export const getDayRangeOfMonth = (month: number, year: number): { lte: Date, gte: Date } => {
    const monthIndex = month - 1
    return {
        gte: new Date(year, monthIndex, 1),
        lte: new Date(year, monthIndex, getDaysInMonth(monthIndex, year))
    }
}

//due to Date() constructor returning incorrect dates when initialized with string yyyy-mm-dd
export const dateFromYYYYMMDD = (yyyy_mm_dd: string): Date  => 
    new Date(
        parseInt(yyyy_mm_dd.substring(0,4)), 
        (parseInt(yyyy_mm_dd.substring(5, 7)) - 1), 
        parseInt(yyyy_mm_dd.substring(8, 10))
    )