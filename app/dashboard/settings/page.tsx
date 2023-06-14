"use client"

import Button from "@/components/Button";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react"


export default function ComingSoon() {
    return (
        <div className="flex flex-col p-10 text-center justify-center gap-10 items-center min-h-screen">
            <h1 className="font-extrabold text-6xl font-display tracking-wider">
                Settings
            </h1>
            <p>
                Currently in:{" "}
                <span className="dark:hidden font-semibold">Light Mode</span>
                <span className="font-semibold dark:inline-block hidden">
                    Dark Mode
                </span>
                . 
                <br />
                This is synced with your device settings.
            </p>
            <Button onClick={() => signOut()} variant={"cgreen"} href="/dashboard">
                <BiLogOut className="w-6 h-6" />
                Logout
            </Button>
        </div>
    );
}
