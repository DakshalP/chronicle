import { ClassValue, clsx } from "clsx"
import { twMerge } from 'tailwind-merge'

const cn  = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

const arrOfLength = (n: number): Array<number> => Array.from({ length: n }, (_, i) => i + 1);

const getDaysInMonth = (monthIndex: number, year: number) => new Date(year, monthIndex + 1, 0).getDate();

const getFirstWeekdayNum = (monthIndex: number, year: number) => new Date(year, monthIndex, 1).getDay();

export {
    cn,
    arrOfLength,
    getDaysInMonth,
    getFirstWeekdayNum,
}