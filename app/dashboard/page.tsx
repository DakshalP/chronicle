import Button from "@/components/Button";
import Calendar from "@/components/calendar/Calendar";
import Month from "@/components/dashboard/Month";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import { getDayRangeOfMonth, monthIndexToWord } from "@/lib/utils";
import { BsBack } from "react-icons/bs";
import { BiBook, BiBookAlt, BiCaretLeft, BiCaretRight, BiDoorOpen, BiHourglass, BiPlayCircle } from "react-icons/bi";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    if (!session) return;

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const currentStats = await prisma.serviceEntry.aggregate({
        _sum: {
            hours: true,
            publications: true,
            videos: true,
            returnVisits: true,
        },
        where: {
            date: getDayRangeOfMonth(currentMonth, currentYear),
            userId: parseInt(session.user.id),
        },
    });

    const entries = await prisma.serviceEntry.findMany({
        select: {
            date: true,
        },
        where: {
            date: getDayRangeOfMonth(currentMonth, currentYear),
            userId: parseInt(session.user.id),
        },
    });

    const selectedDays = entries.map((entry) => entry.date.getDate());

    return (
        <div className="grid mb-4 pb-10 px-8 mx-6 min-h-screen">
            <div className="grid grid-cols-12 gap-6">
                <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                    <div className="col-span-12 mt-8">
                        <div className="w-full md:my-10">
                            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                                <div className="mr-6">
                                    <h1 className="xl:text-6xl text-5xl font-bold mb-2 md:text-left text-center">
                                        June 2023
                                    </h1>
                                    {/* <h2 className="text-gray-600 ml-0.5">
                                        Your Dashboard
                                    </h2> */}
                                </div>
                                <div className="flex items-start md:justify-end justify-center md:-mb-3 gap-5">
                                    <Button>
                                        <BiCaretLeft />
                                        May
                                    </Button>
                                    <Button>
                                        July
                                        <BiCaretRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-6 mt-5">
                            <div className="p-8 shadow-lg rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-900 relative">
                                {/* <div className="absolute w-fit my-5 mx-4 right-0 top-0">
                                    <div className="bg-cgreen rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span className="flex items-center">
                                            30%
                                        </span>
                                    </div>
                                </div> */}
                                <div className="flex items-center">
                                    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-cgreen bg-emerald-50 rounded-full mr-6">
                                        <BiHourglass className="w-1/2 h-1/2" />
                                    </div>
                                    <div>
                                        <span className="block text-3xl font-bold">
                                            14.5
                                        </span>
                                        <span className="block text-gray-500 dark:text-gray-300">
                                            Hours
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 shadow-lg rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-900 relative">
                                {/* <div className="absolute w-fit my-5 mx-4 right-0 top-0">
                                    <div className="bg-cbrown rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span className="flex items-center">
                                            30%
                                        </span>
                                    </div>
                                </div> */}
                                <div className="flex items-center">
                                    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-cbrown bg-orange-100 rounded-full mr-6">
                                        <BiBookAlt className="w-1/2 h-1/2" />
                                    </div>
                                    <div>
                                        <span className="block text-3xl font-bold">
                                            12
                                        </span>
                                        <span className="block text-gray-500 dark:text-gray-300">
                                            <span className="2xl:block xl:hidden block">Publications</span>
                                            <span className="2xl:hidden xl:block hidden">Pub.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 shadow-lg rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-900 relative">
                                {/* <div className="absolute w-fit my-5 mx-4 right-0 top-0">
                                    <div className="bg-cgreen rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span className="flex items-center">
                                            30%
                                        </span>
                                    </div>
                                </div> */}
                                <div className="flex items-center">
                                    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-cgreen bg-emerald-50 rounded-full mr-6">
                                        <BiPlayCircle className="w-1/2 h-1/2" />
                                    </div>
                                    <div>
                                        <span className="block text-3xl font-bold">
                                            10
                                        </span>
                                        <span className="block text-gray-500 dark:text-gray-300">
                                            Videos
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 shadow-lg rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-900 relative">
                                {/* <div className="absolute w-fit my-5 mx-4 right-0 top-0">
                                    <div className="bg-cbrown rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                        <span className="flex items-center">
                                            30%
                                        </span>
                                    </div>
                                </div> */}
                                <div className="flex items-center">
                                    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-cbrown bg-orange-100 rounded-full mr-6">
                                        <BiDoorOpen className="w-1/2 h-1/2" />
                                    </div>
                                    <div>
                                        <span className="block text-3xl font-bold">
                                            14
                                        </span>
                                        <span className="block text-gray-500 dark:text-gray-300">
                                            <span className="2xl:block xl:hidden block">Return Visits</span>
                                            <span className="2xl:hidden xl:block hidden">Returns</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mt-5">
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
                            <div
                                className="bg-white dark:bg-gray-900 shadow-lg rounded-lg"
                                id="chartline"
                            >
                                <Calendar month={6} year={2023} selectedDays={[3, 10, 16, 17, 24, 11]} />
                            </div>
                            <div
                                className="bg-white dark:bg-gray-900 shadow-lg rounded-lg 2xl:col-span-2 md:h-full h-96"
                                id="chartpie"
                            >
                                <div className="flex items-center justify-center h-full">
                                    <span className="transform -rotate-45 text-xl">Coming soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mt-5">
                        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                            <div className="bg-white dark:bg-gray-900 p-4 shadow-lg rounded-lg">
                                <h1 className="font-bold text-base">Records</h1>
                                <div className="mt-4">
                                    <div className="flex flex-col">
                                        <div className="-my-2 overflow-x-auto">
                                            <div className="py-2 align-middle inline-block min-w-full">
                                                <div className="shadow-lg overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg bg-white dark:bg-gray-900">
                                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                        <thead>
                                                            <tr>
                                                                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">
                                                                            PRODUCT
                                                                            NAME
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">
                                                                            Stock
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">
                                                                            STATUS
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">
                                                                            ACTION
                                                                        </span>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        Apple
                                                                        MacBook
                                                                        Pro 13
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        PC &
                                                                        Laptop
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>77</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-5 h-5 mr-1"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                stroke-width="2"
                                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                            />
                                                                        </svg>
                                                                        <p>
                                                                            Active
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        Apple
                                                                        MacBook
                                                                        Pro 13
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        PC &
                                                                        Laptop
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>77</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-5 h-5 mr-1"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                stroke-width="2"
                                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                            />
                                                                        </svg>
                                                                        <p>
                                                                            Active
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        Apple
                                                                        MacBook
                                                                        Pro 13
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        PC &
                                                                        Laptop
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>77</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-5 h-5 mr-1"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                stroke-width="2"
                                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                            />
                                                                        </svg>
                                                                        <p>
                                                                            Active
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>
                                                                        Apple
                                                                        MacBook
                                                                        Pro 13
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        PC &
                                                                        Laptop
                                                                    </p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>77</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-5 h-5 mr-1"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                stroke-width="2"
                                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                            />
                                                                        </svg>
                                                                        <p>
                                                                            Active
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a
                                                                            href="#"
                                                                            className="text-blue-500 hover:text-blue-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Edit
                                                                            </p>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="text-red-500 hover:text-red-600"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1 ml-3"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                            <p>
                                                                                Delete
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
