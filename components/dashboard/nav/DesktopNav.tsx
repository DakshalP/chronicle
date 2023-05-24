import SideBar from "@/components/dashboard/SideBar";
import YearTotal from "@/components/dashboard/YearTotal";

const DesktopNav = () => (
    <nav className="hidden lg:flex 2xl:w-1/6 lg:w-1/4 flex-col justify-between container sticky top-0 h-screen p-5 bg-cdarkgray dark:bg-gray-600  items-center">
        <SideBar />
        <YearTotal />
    </nav>
);

export default DesktopNav;