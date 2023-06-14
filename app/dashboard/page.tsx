"use client"

import { useState, useEffect } from "react"

import Calendar from "@/components/calendar/Calendar";
import Statistics from "@/components/dashboard/Statistics";
import Header from "@/components/dashboard/Header";
import Table from "@/components/dashboard/Table";
import { dateFromYYYYMMDD } from "@/lib/utils";

async function getStatistics(month: number, year: number) {
    const data = await fetch(`${process.env.BASE_URL}/api/statistics?month=${month}&year=${year}`, {
        method: "GET"
    })
    const res = data.json();
    if(!data.ok) {
        console.log(res)
    }
    else {
        return res
    }
}

async function getEntries(month: number, year: number) {
    const data = await fetch(`${process.env.BASE_URL}/api/entries?month=${month}&year=${year}`, {
        method: "GET"
    })
    const res = data.json();
    if(!data.ok) {
        console.log(res)
    }
    else {
        return res
    }
}

type Statistics = {
    hours: number,
    publications: number,
    videos: number,
    returnVisits: number,
}

export type Entries = {
   id: number,
   date: string,
   hours: number,
   videos: number,
   publications: number,
   returnVisits: number,
   title?: string,
   comments?: string,
}[]


export default function Dashboard() {

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const [loading, setLoading] = useState(true)
    const [deletedID, setDeletedID] = useState(0)

    const [month, setMonth] = useState(currentMonth)
    const [year, setYear] = useState(currentYear)

    const [stats, setStats] = useState<Statistics>()
    const [entries, setEntries] = useState<Entries>()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const statistics = await getStatistics(month, year)
            const entries = await getEntries(month, year)
            setStats(statistics)
            setEntries(entries)
            setLoading(false)
        }
        fetchData()
    }, [month, year, deletedID])

    return (
        <div className="grid mb-4 pb-10 px-8 md:mx-6 mx-2 min-h-screen">
            <div className="grid grid-cols-12 gap-6">
                <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                    <div className="col-span-12 mt-8">
                        <Header noEntries={!loading && !!entries && entries.length === 0} {...{ currentMonth, currentYear, month, year, setMonth, setYear }} />
                        <Statistics loading={loading} {...stats} />
                    </div>
                    <div className="col-span-12 mt-5">
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
                            <div
                                className="bg-white dark:bg-gray-900 shadow-lg rounded-lg"
                                id="chartline"
                            >
                                <h2 className={`font-bold text-base px-4 pt-4 ${loading ? '' : '-mb-4'}`}>Service Days</h2>
                                <Calendar month={month} year={year} loading={loading} selectedDays={entries ? entries.map(entry => dateFromYYYYMMDD(entry.date).getDate()) : []} />
                            </div>
                            <div
                                className="bg-white dark:bg-gray-900 shadow-lg rounded-lg 2xl:col-span-2 md:h-full h-96"
                                id="chartpie"
                            >
                                <div className="flex items-center justify-center h-full overflow-hidden">
                                    <div className="-rotate-12 flex flex-col">
                                        <span className="transform xl:text-6xl text-5xl font-bold uppercase opacity-25 select-none">Under Construction</span>
                                        <span className="transform font-bold uppercase opacity-25 text-center select-none">Content coming soon</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mt-5">
                        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                            <div className="bg-white dark:bg-gray-900 p-4 shadow-lg rounded-lg">
                                <h2 className="font-bold text-base">Records</h2>
                                <div className="mt-4">
                                    <div className="flex flex-col">
                                        <div className="-my-2 overflow-x-auto">
                                            <div className="py-2 align-middle inline-block min-w-full">
                                                <Table setDeletedID={setDeletedID} loading={loading} entries={entries ? entries : []} />
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
