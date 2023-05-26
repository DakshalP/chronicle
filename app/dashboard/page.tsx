import Month from "@/components/dashboard/Month";

export default async function Dashboard() {
    return (
        <>
            <div className="bg-cgray-dark dark:bg-gray-900 lg:pt-10">
                <div className="2xl:w-1/2 lg:w-2/3 h-full bg-cgray-light lg:dark:bg-gradient-to-tr  from-gray-800 to-gray-700 dark:bg-gray-800  p-10 mx-auto">
                    <h2 className="m-5 font-display font-extrabold text-6xl">
                        May 2023
                    </h2>
                    <div className="p-4 md:p-8">
                        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 md:grid-cols-4 dark:text-white sm:p-8">
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
