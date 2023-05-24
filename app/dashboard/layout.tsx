import Logo from "../logo";
import { AiOutlinePlus } from "react-icons/ai";
import { FiBook } from "react-icons/fi"
import { BsMoon, BsSun } from "react-icons/bs"
import { RiFlag2Line } from "react-icons/ri"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { IoMdNotificationsOutline } from "react-icons/io"


const NewButton = () => (
    <button className="active:scale-95 transition-transform mt-16 font-extrabold font-display tracking-wide text-white px-10 py-5 text-xl w-fit bg-gradient-to-tr from-cgreen to-green-500 rounded-lg flex flex-row items-center gap-2">
        <AiOutlinePlus className="w-8 h-8" /> New entry
    </button>
);

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="dark:bg-gray-700 dark:text-gray-100 flex flex-row">
            {/* Shared UI here e.g. a sidebar */}
            <nav className="container sticky top-0 h-screen flex flex-col justify-between p-5 bg-cdarkgray dark:bg-gray-600 w-1/6  items-center">
                <div className='text-gray-700'>
                    <Logo href="/dashboard" adaptForDarkMode={true} />
                    <NewButton />
                    <hr className="w-full h-0.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                    <div className="mr-auto flex items-center">
                        <a className="cursor-pointer mr-5 mb-5 font-extrabold tracking-wide text-xl flex flex-row items-center gap-5 w-full">
                            <FiBook className="w-8 h-8" /> Service Log
                        </a>
                    </div>
                    <div className="mr-auto flex items-center">
                        <a className="cursor-pointer mr-5 mb-5 font-extrabold tracking-wide text-xl flex flex-row items-center gap-5 w-full">
                            <RiFlag2Line className="w-8 h-8" /> Hour Goals
                        </a>
                    </div>
                    <div className="mr-auto flex items-center">
                        <a className="cursor-pointer mr-5 mb-5 font-extrabold tracking-wide text-xl flex flex-row items-center gap-5 w-full">
                            <IoMdNotificationsOutline className="w-8 h-8" /> Notifications
                        </a>
                    </div>
                    <div className="mr-auto flex items-center">
                        <a className="cursor-pointer mr-5 mb-5 font-extrabold tracking-wide text-xl flex flex-row items-center gap-5 w-full">
                            <HiOutlineLocationMarker className="w-8 h-8" /> Return Visits
                        </a>
                    </div>
                </div>
                <div className="mr-auto flex flex-row items-center justify-between w-full">
                     <div>
                          <p className="text-4xl font-extrabold font-display">
                            75 Hours
                          </p>
                          <p>
                            recorded in 2023
                          </p>
                     </div>
                     <div className="p-4 cursor-pointer">
                      <BsSun className="w-6 h-6 dark:hidden" title="You are in light mode" />
                      <BsMoon className="w-6 h-6 hidden dark:block" title="You are in dark mode" />
                     </div>
                </div>
            </nav>
            <div className="w-full">{children}</div>
        </section>
    );
}
