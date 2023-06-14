"use client"

import { FiBook, FiClock, FiHome, FiSettings } from "react-icons/fi";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { RiFlag2Line } from "react-icons/ri";
import Link from "next/link"
import { usePathname } from "next/navigation";

const LinkObj: object = {
    "Dashboard": [<FiHome key={1} className="w-6 h-6" />, "/dashboard"],
    "Upcoming": [<FiClock key={2} className="w-6 h-6" />, "/dashboard/coming-soon"],
    "Settings": [<FiSettings key={2} className="w-6 h-6" />, "/dashboard/settings"],
    // "Hour Goals": [<RiFlag2Line className="w-6 h-6" />, "/dashboard/coming-soon"],
    // "Notifications": [<IoMdNotificationsOutline className="w-6 h-6" />, "/dashboard/coming-soon"],
    // "Return Visits": [<HiOutlineLocationMarker className="w-6 h-6" />, "/dashboard/coming-soon"],
};

const NavLink = ({ properties, label, active }: { properties: Array<any>; label: string, active: boolean}) => (
    <Link href={properties[1] || ''} className="mr-auto flex items-center w-full">
        <span className="cursor-pointer lg:mr-5 lg:mb-5 lg:py-0 py-5 tracking-wide lg:text-xl text-2xl flex flex-row lg:justify-start justify-center items-center gap-5 w-full">
            {properties[0]}
            <span className={active ? 'font-bold' : ''}>{label}</span>
        </span>
    </Link>
);
const NavLinks = () => {
    const pathname = usePathname();

    return (
        <div className="lg:block flex flex-col justify-evenly h-1/2 w-full">
            {Object.entries(LinkObj).map(([key, value]) => (
                <NavLink active={pathname === value[1]} key={key} label={key} properties={value} />
            ))}
        </div>
    )
};

export default NavLinks;
