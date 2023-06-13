import { Decimal } from "@prisma/client/runtime";
import {
    BiBookAlt,
    BiDoorOpen,
    BiHourglass,
    BiPlayCircle,
} from "react-icons/bi";

type Props = {
    loading: boolean;
    hours?: number | null;
    publications?: number | null;
    videos?: number | null;
    returnVisits?: number | null;
    [key: string]: number | boolean | null | undefined;
};

type iconObj = {
    [key: string]: React.ReactNode;
};

const statIcons: iconObj = {
    hours: <BiHourglass className="w-1/2 h-1/2" />,
    publications: <BiBookAlt className="w-1/2 h-1/2" />,
    videos: <BiPlayCircle className="w-1/2 h-1/2" />,
    returnVisits: <BiDoorOpen className="w-1/2 h-1/2" />,
};

type labelObj = {
    [key: string]: string | React.ReactNode;
};

const statLabels: labelObj = {
    hours: "Hours",
    publications: (
        <span>
            <span className="2xl:block xl:hidden block">Publications</span>
            <span className="2xl:hidden xl:block hidden">Publ.</span>
        </span>
    ),
    videos: "Videos",
    returnVisits: (
        <span>
            <span className="2xl:block xl:hidden block">Return Visits</span>
            <span className="2xl:hidden xl:block hidden">Returns</span>
        </span>
    ),
};

const Statistics = ({ loading, ...stats }: Props) => {
    return (
        <div className="grid grid-cols-12 gap-6 mt-5">
            {Object.keys(statIcons).map((key, index) => (
                <div className="p-8 shadow-lg rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-900 relative">
                    {/* <div className="absolute w-fit my-5 mx-4 right-0 top-0">
                <div className="bg-cgreen rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                    <span className="flex items-center">
                        30%
                    </span>
                </div>
            </div> */}
                    <div className={`flex items-center ${loading ? 'animate-pulse' : ''}`}>
                        <div className={`${loading ? 'bg-gray-50 text-transparent' : index % 2 === 0 ? 'text-cgreen bg-green-50' : 'text-cbrown bg-orange-50'} inline-flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-full mr-6`}>
                            {statIcons[key]}
                        </div>
                        <div>
                            <span className="block text-3xl font-bold">
                                {loading ? "..." : (Number(stats[key]) || "-")}
                            </span>
                            <span className="block text-gray-500 dark:text-gray-300">
                                {loading ? "" : statLabels[key]}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Statistics;
