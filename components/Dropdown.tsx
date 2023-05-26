"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from "react"

export default function Dropdown({children, menu}: {children: React.ReactNode, menu: React.ReactNode}) {
  return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 bottom-0 mt-2 w-56 origin-bottom-right rounded-lg dark:text-white font-medium bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {menu}
          </Menu.Items>
        </Transition>
      </Menu>
  )
}