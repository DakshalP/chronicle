"use client"

import { BiLogOutCircle } from "react-icons/bi";

import { signOut } from "next-auth/react"

export default function SettingToggle() {

    return (
                <button title="Sign out" onClick={() => signOut()}>
                    <BiLogOutCircle
                    className="w-6 h-6 cursor-pointer"
                    />
                </button>
    );
}
