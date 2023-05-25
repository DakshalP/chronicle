import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

const path = "/entries/new"

const NewButton = () => (
    <Link href={path} className="active:scale-95 transition-transform lg:mt-16 lg:mb-0 my-5 text-white px-8 py-5  w-fit bg-gradient-to-tr from-cgreen to-emerald-600 rounded-lg flex flex-row items-center gap-2">
        <AiOutlinePlus className="w-8 h-8" />
        <span className="lg:flex hidden flex-row gap-2 tracking-wider text-xl font-extrabold font-display">
            <span>New</span>
            <span>entry</span>
        </span>
        <span className="lg:hidden inline-block tracking-wider text-2xl font-extrabold font-display">Entry</span>
    </Link>
);

export default NewButton;