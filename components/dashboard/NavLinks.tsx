import { FiBook } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiFlag2Line } from "react-icons/ri";

const LinkObj: object = {
    "Service Log": <FiBook className="w-8 h-8" />,
    "Hour Goals": <RiFlag2Line className="w-8 h-8" />,
    Notifications: <IoMdNotificationsOutline className="w-8 h-8" />,
    "Return Visits": <HiOutlineLocationMarker className="w-8 h-8" />,
};

const NavLink = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <a className="mr-auto flex items-center w-full">
        <span className="cursor-pointer lg:mr-5 lg:mb-5 lg:py-0 py-5 font-extrabold tracking-wide lg:text-xl text-2xl flex flex-row lg:justify-start justify-center items-center gap-5 w-full">
            {icon}
            {label}
        </span>
    </a>
);
const NavLinks = () => (
    <div className="lg:block flex flex-col justify-between h-1/2 w-full">
        {Object.entries(LinkObj).map(([key, value]) => (
            <NavLink label={key} icon={value} />
        ))}
    </div>
);

export default NavLinks;
