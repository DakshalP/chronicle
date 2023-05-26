import { FiBook, FiClock } from "react-icons/fi";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { RiFlag2Line } from "react-icons/ri";
import Link from "next/link"

const LinkObj: object = {
    "Service Log": [<FiBook className="w-8 h-8" />, "/dashboard"],
    "Coming Soon": [<FiClock className="w-8 h-8" />, "/dashboard/coming-soon"],
    // "Hour Goals": [<RiFlag2Line className="w-8 h-8" />, "/dashboard/coming-soon"],
    // "Notifications": [<IoMdNotificationsOutline className="w-8 h-8" />, "/dashboard/coming-soon"],
    // "Return Visits": [<HiOutlineLocationMarker className="w-8 h-8" />, "/dashboard/coming-soon"],
};

const NavLink = ({ properties, label }: { properties: Array<any>; label: string }) => (
    <Link href={properties[1] || ''} className="mr-auto flex items-center w-full">
        <span className="cursor-pointer lg:mr-5 lg:mb-5 lg:py-0 py-5 font-extrabold tracking-wide lg:text-xl text-2xl flex flex-row lg:justify-start justify-center items-center gap-5 w-full">
            {properties[0]}
            {label}
        </span>
    </Link>
);
const NavLinks = () => (
    <div className="lg:block flex flex-col justify-evenly h-1/2 w-full">
        {Object.entries(LinkObj).map(([key, value]) => (
            <NavLink key={key} label={key} properties={value} />
        ))}
    </div>
);

export default NavLinks;
