
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import NewButton from "./NewButton";

const SideBar = () => (
    <div className="text-gray-700 dark:text-gray-100">
        <Logo href="/dashboard" adaptForDarkMode={true} />
        <NewButton />
        <hr className="w-full h-0.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <NavLinks />
    </div>
);

export default SideBar;