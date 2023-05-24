import { FiBook } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiFlag2Line } from "react-icons/ri";

const NavLinks = () => (
    <div>
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
)

export default NavLinks;
