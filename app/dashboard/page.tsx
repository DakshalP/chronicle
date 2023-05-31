import Button from "@/components/Button";
import Calendar from "@/components/calendar/Calendar";
import Month from "@/components/dashboard/Month";
import { DataTable } from "@/components/DataTable";

import { Entry, columns } from "./[month]/columns";

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
    return (
        <>
            <div className="bg-stone-200 dark:bg-gray-800 xl:p-10 p-5 mx-auto">
                <div className="flex md:flex-nowrap flex-wrap gap-5">
                <div className="xl:w-2/3 md:w-1/2 w-full bg-neutral-100 dark:bg-slate-600 rounded px-5">
                        <div className="flex flex-col justify-center h-full">
                            <div className="font-extrabold font-display text-7xl text-center">
                                May 2023
                            </div>
                            <div className="p-5">
                                {/* <div className="h-72 overflow-y-scroll">
                                <DataTable columns={columns} data={data} />
                                </div> */}
                                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto md:grid-cols-4 sm:p-8 2xl:text-9xl text-6xl">
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            20
                                        </dt>
                                        <dd className="text-base text-gray-500 dark:text-gray-400">
                                            Hours
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            34
                                        </dt>
                                        <dd className="text-base text-gray-500 dark:text-gray-400">
                                            Publications
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            10
                                        </dt>
                                        <dd className="text-base text-gray-500 dark:text-gray-400">
                                            Videos
                                        </dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <dt className="mb-2 font-extrabold font-display">
                                            12
                                        </dt>
                                        <dd className="text-base text-gray-500 dark:text-gray-400">
                                            Returns
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full">
                        <Calendar month={5} year={2023} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="mt-10 font-display font-extrabold text-3xl">
                    Previous Months
                </h2>
                <Month />
                <Month />
                <Month />
                <Month />
            </div>
        </>
    );
}
