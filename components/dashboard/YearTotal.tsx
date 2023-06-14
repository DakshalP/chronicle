"use client"

import { useEffect, useState } from "react"

const YearTotal = () => {
    //client component since used in mobile nav

    const currentYear = new Date().getFullYear();
    const [hourTotal, setHourTotal] = useState<number>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${process.env.BASE_URL}/api/statistics?year=${currentYear}`, {
                method: "GET"
            })
            const res = await data.json()
            if(!data.ok) {
                console.log(res)
            } else {
                setHourTotal(Math.floor(res.hours))
            }
        }

        fetchData()

    }, [currentYear])

    return (
        <div className="lg:p-3 flex flex-row items-center justify-between w-full">
        <div className="lg:block lg:mx-0 mx-auto flex flex-col items-center">
            <p className="text-4xl font-extrabold font-display">{hourTotal === 0 ? hourTotal : !!hourTotal ? hourTotal : '...'} Hours</p>
            <p>total in {currentYear}</p>
        </div>
        </div>
    )
};

export default YearTotal;