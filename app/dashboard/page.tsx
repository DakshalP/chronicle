import Button from "@/components/Button";
import Calendar from "@/components/calendar/Calendar";
import Month from "@/components/dashboard/Month";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import { getDayRangeOfMonth, monthIndexToWord } from "@/lib/utils";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    if(!session) return;

    const currentMonth = new Date().getMonth() + 1
    const currentYear = new Date().getFullYear()
    
    const currentStats = await prisma.serviceEntry.aggregate({
        _sum: {
            hours: true,
            publications: true,
            videos: true,
            returnVisits: true
        },
        where: {
            date: getDayRangeOfMonth(currentMonth, currentYear), 
            userId: parseInt(session.user.id)
        }
    })
    
    const entries = await prisma.serviceEntry.findMany({
        select: {
            date: true
        },
        where: {
            date: getDayRangeOfMonth(currentMonth, currentYear),
            userId: parseInt(session.user.id)
        }
    })
    
    const selectedDays = entries.map(entry => entry.date.getDate())

    return (
        <>
            <div className="bg-stone-200 dark:bg-gray-800 xl:p-10 p-5 mx-auto">
                <div className="flex md:flex-nowrap flex-wrap gap-5">
                <div className="xl:w-2/3 md:w-1/2 w-full rounded 2xl:p-10 p-5">
                        <div className="flex flex-col justify-center md:gap-14 gap-10 h-full">
                            <div className="font-extrabold 2xl:text-7xl text-5xl text-center">
                                {monthIndexToWord(currentMonth - 1)} {currentYear}
                            </div>
                            <div className="p-5 rounded">
                                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-5 md:p-0 mx-auto md:grid-cols-4 sm:p-8 2xl:text-8xl md:text-5xl text-6xl">
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            {Number(currentStats._sum.hours)}
                                        </dt>
                                        <dd className="2xl:font-bold text-base text-gray-500 dark:text-gray-400">
                                            Hours
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            {Number(currentStats._sum.publications)}
                                        </dt>
                                        <dd className="2xl:font-bold text-base text-gray-500 dark:text-gray-400">
                                            Publications
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            {Number(currentStats._sum.videos)}
                                        </dt>
                                        <dd className="2xl:font-bold text-base text-gray-500 dark:text-gray-400">
                                            Videos
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            {Number(currentStats._sum.returnVisits)}
                                        </dt>
                                        <dd className="2xl:font-bold text-base text-gray-500 dark:text-gray-400">
                                            Returns
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            
                        <div className="flex justify-center">
                            <Button href={`/dashboard/${currentYear}-${currentMonth}`}>See entries</Button>
                        </div>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full">
                        <Calendar selectedDays={selectedDays} month={currentMonth} year={currentYear} className="2xl:text-lg" />
                    </div>
                </div>
            </div>
            <h2 className="my-20 font-extrabold text-3xl text-center">
                    Previous Months
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-10 m-14">
                    <Month />
                    <Month />
                    <Month />
                    <Month />
            </div>
        </>
    );
}
