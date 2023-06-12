import { ClassValue, clsx } from "clsx"
import { twMerge } from 'tailwind-merge'

export const cn  = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const arrOfLength = (n: number): Array<number> => Array.from({ length: n }, (_, i) => i + 1);

export const getDaysInMonth = (monthIndex: number, year: number) => new Date(year, monthIndex + 1, 0).getDate();

export const getFirstWeekdayNum = (monthIndex: number, year: number) => new Date(year, monthIndex, 1).getDay();

//due to Date() constructor returning incorrect dates when initialized with string yyyy-mm-dd
export const dateFromYYYYMMDD = (yyyy_mm_dd: string): Date  => 
    new Date(
        parseInt(yyyy_mm_dd.substring(0,4)), 
        (parseInt(yyyy_mm_dd.substring(5, 7)) - 1), 
        parseInt(yyyy_mm_dd.substring(8, 10))
    )