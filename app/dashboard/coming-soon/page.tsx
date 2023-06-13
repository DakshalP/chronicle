import Button from "@/components/Button";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiFlag2Line } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi"

const comingSoon = {
  "Hour Goals": [<RiFlag2Line key={1} className="w-8 h-8" />, "/dashboard/coming-soon"],
    "Notifications": [<IoMdNotificationsOutline key={2} className="w-8 h-8" />, "/dashboard/coming-soon"],
    "Return Visits": [<HiOutlineLocationMarker key={3} className="w-8 h-8" />, "/dashboard/coming-soon"],
}

export default function ComingSoon() {
  return (
    <div className="flex flex-col p-10 text-center justify-center gap-10 items-center min-h-screen">
                <h1 className="font-extrabold text-6xl font-display tracking-wider">Coming Soon</h1>
                <p>Features planned for a future version of Chronicle:</p>
                <div className="lg:block mx-auto flex flex-col justify-evenly h-1/2 w-fit">
                    {Object.entries(comingSoon).map(([label, properties]) => (
                        <span key={label} className="cursor-pointer lg:mr-5 lg:mb-5 lg:py-0 py-5 font-extrabold tracking-wide lg:text-xl text-2xl flex flex-row lg:justify-start justify-center items-center gap-5 w-full">
                        {properties[0]}
                        {label}
                        </span>
                    ))}
                </div>
                <Button variant={"cgreen"} href="/dashboard">Return to the service log</Button>
    </div>
  )
}