import DarkModeToggle from "./DarkModeToggle";


const YearTotal = () => (
    <div className="p-3 mr-auto flex flex-row items-center justify-between w-full">
        <div>
            <p className="text-4xl font-extrabold font-display">75 Hours</p>
            <p>total in 2023</p>
        </div>
        <DarkModeToggle />
    </div>
);

export default YearTotal;