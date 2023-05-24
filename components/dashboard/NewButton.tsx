import { AiOutlinePlus } from "react-icons/ai";

const NewButton = () => (
    <button className="active:scale-95 transition-transform lg:mt-16 lg:mb-0 my-5 text-white px-8 py-5  w-fit bg-gradient-to-tr from-cgreen to-green-500 rounded-lg flex flex-row items-center gap-2">
        <AiOutlinePlus className="w-8 h-8" />
        <span className="lg:flex hidden flex-row gap-2 tracking-wide text-xl font-extrabold">
            <span>New</span>
            <span>entry</span>
        </span>
        <span className="lg:hidden inline-block tracking-wider text-2xl font-extrabold ">Entry</span>
    </button>
);

export default NewButton;