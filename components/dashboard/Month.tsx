import Calendar from "../calendar/Calendar";

const Month = () => (
    <div className="my-5 w-full cursor-pointer active:scale-95 transition-transform">
        <div className="px-5 py-2 text-3xl dark:text-white rounded-t-lg bg-cgray-dark dark:bg-gray-800 font-extrabold w-fit">
            April
        </div>
        <div className="p-4 bg-cgray-dark shadow-md rounded-e-lg rounded-b-lg md:p-8 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 flex md:flex-row flex-col-reverse gap-5">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-8 mx-auto md:grid-cols-4 2xl:text-6xl md:text-4xl text-5xl">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-extrabold font-display">
                        15.5
                    </dt>
                    <dd className="2xl:text-sm text-xs text-gray-500 dark:text-gray-400">Hours</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-extrabold font-display">
                        34
                    </dt>
                    <dd className="2xl:text-sm text-xs text-gray-500 dark:text-gray-400">
                        Publications
                    </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-extrabold font-display">
                        10
                    </dt>
                    <dd className="2xl:text-sm text-xs text-gray-500 dark:text-gray-400">Videos</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-extrabold font-display">
                        12
                    </dt>
                    <dd className="2xl:text-sm text-xs text-gray-500 dark:text-gray-400">
                        Returns
                    </dd>
                </div>
            </dl>
        </div>
    </div>
);

export default Month;