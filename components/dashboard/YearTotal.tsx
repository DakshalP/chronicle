import DarkModeToggle from "./SettingToggle";


const YearTotal = () => (
    <div className="lg:p-3 mr-auto flex flex-row items-center justify-between w-full">
        <div className="lg:block lg:mx-0 mx-auto flex flex-col items-center">
            <p className="text-4xl font-extrabold font-display">75 Hours</p>
            <p>total in 2023</p>
        </div>
       <DarkModeToggle />
    </div>
);

export default YearTotal;