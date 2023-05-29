import { BsMoon, BsSun } from "react-icons/bs";

export default function DarkModeToggle() {

    return (
            <div className="lg:block hidden cursor-pointer">
                <BsSun
                    className="w-6 h-6 dark:hidden"
                />
                <BsMoon
                    className="w-6 h-6 hidden dark:block"
                />
            </div>
    );
}
