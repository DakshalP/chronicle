const Month = () => (
    <div className="2xl:w-1/2 xl:w-2/3 my-5 p-10 w-full cursor-pointer active:scale-95 transition-transform">
        <div className="px-5 py-2 text-3xl shadow-md dark:text-white rounded-t-lg bg-cgray-light dark:bg-gray-800 font-extrabold font-display w-fit">
            April
        </div>
        <div className="p-4 bg-cgray-light shadow-md rounded-e-lg rounded-b-lg md:p-8 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 md:grid-cols-4 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-6xl font-extrabold font-display">
                        0
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400">Hours</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-6xl font-extrabold font-display">
                        0
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                        Publications
                    </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-6xl font-extrabold font-display">
                        0
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400">Videos</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-6xl font-extrabold font-display">
                        0
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                        Returns
                    </dd>
                </div>
            </dl>
        </div>
    </div>
);

export default Month;