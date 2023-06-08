import Button from "@/components/Button";
import Calendar from "@/components/calendar/Calendar";
import Month from "@/components/dashboard/Month";
import { DataTable } from "@/components/DataTable";

import { Entry, columns } from "./[month]/columns";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function getData(): Promise<Entry[]> {
    // Fetch data from your API here.
    return [
        {
            id: 1,
            date: new Date(),
            hours: 1,
            videos: 2,
            publications: 3,
            returnVisits: 4,
            title: "George's Study",
            comments: "These are some loooooonng comments \n \n really a lot.",
        },
        {
            id: 1,
            date: new Date(),
            hours: 13,
            videos: 22,
            publications: 34,
            returnVisits: 42,
            title: "Somebody Long Name's Study",
            comments:
                "asdfasdfasdfasdfasd asdfasdf asdf some loooooonng comments \n \n really a lot.",
        },
        {
            id: 1,
            date: new Date(),
            hours: 13,
            videos: 22,
            publications: 34,
            returnVisits: 42,
            title: "Metropolitan Witnessing",
            comments: "small",
        },
        {
            id: 1,
            date: new Date(),
            hours: 1,
            videos: 2,
            publications: 3,
            returnVisits: 4,
            title: "George's Study",
            comments: "These are some loooooonng comments \n \n really a lot.",
        },
        {
            id: 1,
            date: new Date(),
            hours: 1,
            videos: 2,
            publications: 3,
            returnVisits: 4,
            title: "George's Study",
            comments: "These are some loooooonng comments \n \n really a lot.",
        },
        {
            id: 1,
            date: new Date(),
            hours: 1,
            videos: 2,
            publications: 3,
            returnVisits: 4,
            title: "George's Study",
            comments: "These are some loooooonng comments \n \n really a lot.",
        },
        {
            id: 1,
            date: new Date(),
            hours: 1,
            videos: 2,
            publications: 3,
            returnVisits: 4,
            title: "George's Study",
            comments: "These are some loooooonng comments \n \n really a lot.",
        },
    ];
}

export default async function Dashboard() {
    const data = await getData();
    const session = await getServerSession(authOptions);
    return (
        <>
            <div className="bg-stone-200 dark:bg-gray-800 xl:p-10 p-5 mx-auto">
                <div className="flex md:flex-nowrap flex-wrap gap-5">
                <div className="xl:w-2/3 md:w-1/2 w-full rounded 2xl:p-10 p-5">
                        <div className="flex flex-col justify-center md:gap-14 gap-10 h-full">
                            <div className="font-extrabold 2xl:text-7xl text-5xl text-center">
                                JUNE 2023
                            </div>
                            <div className="p-5 rounded">
                                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-5 md:p-0 mx-auto md:grid-cols-4 sm:p-8 2xl:text-8xl md:text-5xl text-6xl">
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            11.5
                                        </dt>
                                        <dd className="2xl:font-bold text-base text-gray-500 dark:text-gray-400">
                                            Hours
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            34
                                        </dt>
                                        <dd className="2xl:font-bold text-base text-gray-500 dark:text-gray-400">
                                            Publications
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            10
                                        </dt>
                                        <dd className="2xl:font-bold text-base text-gray-500 dark:text-gray-400">
                                            Videos
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            12
                                        </dt>
                                        <dd className="2xl:font-bold text-base text-gray-500 dark:text-gray-400">
                                            Returns
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            
                        <div className="flex justify-center">
                            <Button href="/dashboard/may-2023">See entries</Button>
                        </div>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full">
                        <Calendar month={6} year={2023} className="2xl:text-lg" />
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
