"use client";
import NewButton from "@/components/dashboard/NewButton";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import NavLinks from "./NavLinks";
import Logo from "@/components/Logo";
import { IoMdClose } from "react-icons/io";
import YearTotal from "../YearTotal";

const MenuToggle = ({
    menuOpen,
    setMenuOpen,
}: {
    menuOpen: boolean;
    setMenuOpen: Function;
}) => (
    <div className="flex items-center text-gray-800 dark:text-gray-100">
        <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer font-bold tracking-wide sm:text-3xl text-2xl flex flex-row items-center justify-center gap-3 w-fit"
        >
            {menuOpen ? (
                <IoMdClose className="sm:w-8 sm:h-8 w-6 h-6" />
            ) : (
                <RiMenu2Line className="sm:w-8 sm:h-8 w-6 h-6" />
            )}
            Menu
        </button>
    </div>
);

const MobileMenu = ({
    menuOpen,
    setMenuOpen,
}: {
    menuOpen: boolean;
    setMenuOpen: Function;
}) => (
    <div onClick={() => setMenuOpen(false)} className={`flex flex-col justify-evenly items-center ${menuOpen ? 'opacity-100 h-full' : 'translate-y-10 opacity-0 h-0 fixed top-0 invisible'} transition`}>
        <Logo href="/dashboard" adaptForDarkMode={true} />
        <div className="shadow bg-cgray dark:bg-gray-900 py-5 px-20 rounded">
            <YearTotal />
        </div>
        <div className="h-1/3">
            <NavLinks />
        </div>
        
        <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
);

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <nav
            className={`lg:hidden w-screen ${
                menuOpen ? "fixed bottom-0 h-screen" : "sticky bottom-0"
            } bg-cgray-light dark:bg-gray-700  shadow-2xl shadow-black dark:shadow-none`}
        >
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div
                className={`w-full  ${
                    menuOpen ? "hidden" : ""
                } bg-cgray-light dark:bg-gray-600 flex flex-row justify-evenly items-center py-3`}
            >
                <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <NewButton />
            </div>
        </nav>
    );
};

export default MobileNav;
