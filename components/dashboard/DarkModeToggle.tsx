"use client"
import { BsMoon, BsSun } from "react-icons/bs";
import Dropdown from "../Dropdown";
import { Menu } from "@headlessui/react"
import Button from "../Button";

const MenuItems = (
    <div className="p-3 flex flex-col gap-2">
        <Menu.Item>
                    {({ active }) => (
                        <Button onClick={() => null} className='w-full flex flex-row gap-2 items-center justify-center' variant={active ? "cgreen" : "cgray"}><BsMoon /> Dark Mode</Button>
                    )}
        </Menu.Item>
        <Menu.Item>
                    {({ active }) => (
                        <Button onClick={() => null} className='w-full flex flex-row gap-2 items-center justify-center' variant={active ? "cgreen" : "cgray"}><BsSun /> Light Mode</Button>
                    )}
        </Menu.Item>
        <Menu.Item>
                    {({ active }) => (
                        <Button onClick={() => null} className='w-full' variant={active ? "cgreen" : "cgray"}>System Preference</Button>
                    )}
        </Menu.Item>
    </div>
)
export default function DarkModeToggle() {

    return (
        <Dropdown menu={MenuItems}>
            <div className="lg:block hidden cursor-pointer">
                <BsSun
                    className="w-6 h-6 dark:hidden"
                />
                <BsMoon
                    className="w-6 h-6 hidden dark:block"
                />
            </div>
        </Dropdown>
    );
}
