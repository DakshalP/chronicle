"use client"

import Button from "@/components/Button";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react"
import Tip from "@/components/Tip";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/Dialog";
import Logo from "@/components/Logo";


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

            <Tip mobileOnly >
                Add Chronicle to your homescreen for easy access.
                <Dialog>
                    <DialogTrigger className="dark:hover:text-gray-300 hover:text-gray-800 font-bold text-cgreen underline decoration-2">
                            Click here to find out how
                    </DialogTrigger>
                    <DialogContent className="py-10">
                        <DialogHeader>
                            <DialogTitle className="flex flex-col justify-center gap-2 items-center">
                                How to add <Logo href="#" /> to your homescreen
                            </DialogTitle>
                            <DialogDescription className="whitespace-pre-wrap p-10 text-justify flex flex-col gap-5">
                                <span className="font-bold">iPhone/iPad</span>
                                Open Chronicle in Safari and tap the share button. Choose "Add to Home Screen" from the menu. 
                                <span className="font-bold">Android</span> 
                                Open Chronicle in Chrome, Edge, or Firefox and select "Add to Home Screen" or "Add to Phone" from the menu.
                                <span className="italic text-xs text-right">Credits: How-To Geek</span>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                
            </Tip>

            <Tip >
                Missed a field service day? You can mark that on the calendar by <span className="font-bold">submitting 0 hours</span> for that day.
            </Tip>
            
        </div>
    );
}
