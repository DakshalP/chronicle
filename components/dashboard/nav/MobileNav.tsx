"use client"
import NewButton from "@/components/dashboard/NewButton";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import NavLinks from "../NavLinks";
import Logo from "@/components/Logo";
import { IoMdClose } from "react-icons/io";


const MenuToggle = ({menuOpen, setMenuOpen} : {menuOpen: boolean, setMenuOpen: Function}) => (
    <div className={`flex items-center text-gray-800 dark:text-gray-100`}>
                  <button onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer font-bold tracking-wide text-3xl flex flex-row items-center gap-5 w-full">
                      {menuOpen ? <IoMdClose className="w-8 h-8" /> : <RiMenu2Line className="w-8 h-8" />}Menu
                  </button>
    </div>
)

const MobileMenu = () => (
    <div className="h-full relative overflow-hidden flex flex-col justify-evenly items-center text-3xl">
        <Logo href="/dashboard" adaptForDarkMode={true}/>
        <NavLinks />
    </div>
)
  

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={`lg:hidden w-screen ${menuOpen? 'fixed h-screen': 'sticky bottom-0'} bg-cdarkgray dark:bg-gray-600  shadow-2xl shadow-black dark:shadow-none`}>
            {menuOpen ? <MobileMenu /> : null }
            <div className={`w-full flex flex-row ${menuOpen? 'fixed bottom-0': ''} justify-evenly items-center z-50 bg-cdarkgray dark:bg-gray-600 `}>
                <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <NewButton />
            </div>
        </nav>
    )
};

export default MobileNav;