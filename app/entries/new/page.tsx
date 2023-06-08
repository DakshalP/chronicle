import Button from "@/components/Button"
import Link from "next/link"
import { IoMdClose } from "react-icons/io"
import { BsPlus } from "react-icons/bs"
import Input from "@/components/Input"
import TextArea from "@/components/TextArea"

export default function NewEntry() {
    return (
        <div className="flex justify-center items-center min-h-screen  bg-gradient-to-tr from-gray-300 to-cgray-dark dark:from-gray-500 dark:via-gray-600 dark:to-gray-700">
            <div className="relative w-full lg:h-fit h-full max-w-4xl lg:mx-10 md:m-5 bg-cgray-light lg:border border-gray-200 md:rounded-lg lg:shadow lg:p-9 p-10 dark:bg-gray-800 dark:border-gray-700">
                <div className="absolute top-0 right-0 p-5">
                    <Link href="/dashboard"> <IoMdClose className="w-10 h-10 active:text-cgreen text-cgray-outline dark:text-gray-500"/> </Link>
                </div>
            <form className="lg:space-y-10 space-y-6" action="#">
                <h1 className="text-6xl font-extrabold font-display">New entry</h1>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Title</label>
                    <Input placeholder="Optional title" />
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Date</label>
                    <Input type="date" />
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Hours</label>
                    <div className="flex gap-2">
                        <Input placeholder="0" className="flex-grow" variant={"number"} />
                        {/* <Button><FaUndoAlt /></Button> */}
                        <Button variant={"cgreen"} className="text-2xl" tabIndex={-1}>+½</Button>
                        <Button variant={"cgreen"} className="text-xl" tabIndex={-1}>+1</Button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
                    <div className="w-full">
                        <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Publications</label>
                        <div className="flex justify-center gap-2">
                            <Input placeholder="0" variant={"number"} />
                            <Button variant={"cgreen"} className="text-xl" tabIndex={-1}><span className="text-3xl">+</span></Button>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Videos</label>
                        <div className="flex justify-center gap-2">
                            <Input placeholder="0" variant={"number"} />
                            <Button variant={"cgreen"} className="text-xl" tabIndex={-1}><span className="text-3xl">+</span></Button>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-1 col-span-2">
                        <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Return Visits</label>
                        <div className="flex justify-center gap-2">
                            <Input placeholder="0" variant={"number"} />
                            <Button variant={"cgreen"} className="text-xl" tabIndex={-1}><span className="text-3xl">+</span></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Notes</label>
                    <TextArea placeholder="Optional notes" />
                </div>
                <div className="flex gap-5">
                <Button className="w-full" variant={"cbrown"} type="submit">Submit</Button>
                <Button  className="w-full flex justify-center gap-2 items-center">Cancel</Button>
                </div>
            </form>
        </div>
        </div>

    )
}