import Button from "@/components/Button"
import Link from "next/link"
import { IoMdClose } from "react-icons/io"

export default function NewEntry() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-full lg:h-fit h-full max-w-4xl lg:mx-10 bg-cgray-light lg:border border-gray-200 rounded-lg lg:shadow lg:p-8 p-10 dark:bg-gray-800 dark:border-gray-700">
                <div className="absolute top-0 right-0 p-5">
                    <Link href="/dashboard"> <IoMdClose className="w-10 h-10 text-cgray-outline dark:text-gray-500"/> </Link>
                </div>
            <form className="space-y-6" action="#">
                <h1 className="text-6xl font-extrabold font-display">New entry</h1>
                <div className="flex justify-center gap-2">
                    <input className="w-20"/>
                    <Button secondary>-1</Button>
                    <Button color="cgreen">+0.5</Button>
                    <Button color="cgreen">+1</Button>
                </div>
                <Button color="cbrown" type="submit">Submit</Button>
            </form>
        </div>
        </div>

    )
}