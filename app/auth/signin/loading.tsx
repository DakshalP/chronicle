import Image from "next/image";

import signinImage from "/public/pen.jpg"

export default async function Dashboard() {
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-cgreen hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <Image
                    src={signinImage}
                    alt="a calligraphy pen"
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-2/3 xl:w-1/3 h-screen px-20 md:px-16 xl:px-24
        flex items-center justify-center"
            >
            <div className="flex justify-center items-center min-h-screen w-full bg-cgray dark:bg-gray-700">
                <h1 className="font-extrabold text-6xl font-display tracking-wider animate-pulse">Loading...</h1>
            </div>
            </div>
        </section>
    );
}
