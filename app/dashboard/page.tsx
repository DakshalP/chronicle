import Button from "@/components/Button";
import Calendar from "@/components/time/Calendar";
import Month from "@/components/dashboard/Month";

export default async function Dashboard() {
    return (
        <>
                <div className="bg-gray-200 dark:bg-gray-800 xl:p-10 p-5 mx-auto">
                    <h2 className="m-5 font-display font-extrabold text-6xl">
                        May 2023
                    </h2>
                    <div className="md:flex lg:h-1/6">
                        <div className="md:px-5 2xl:w-1/3 md:w-1/2 py-5">
                            <Calendar month={5} year={2023} />
                        </div>
                        <div className="md:w-1/2 flex justify-center items-center">
                            <dl className="w-full grid grid-cols-2 text-gray-900  dark:text-white">
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2 text-7xl font-extrabold font-display">
                                        16
                                    </dt>
                                    <dd className="text-gray-500 dark:text-gray-400">
                                        Hours
                                    </dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2 text-7xl font-extrabold font-display">
                                        10
                                    </dt>
                                    <dd className="text-gray-500 dark:text-gray-400">
                                        Publications
                                    </dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2 text-7xl font-extrabold font-display">
                                        3
                                    </dt>
                                    <dd className="text-gray-500 dark:text-gray-400">
                                        Videos
                                    </dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2 text-7xl font-extrabold font-display">
                                        4
                                    </dt>
                                    <dd className="text-gray-500 dark:text-gray-400">
                                        Returns
                                    </dd>
                                </div>
                            </dl>
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
