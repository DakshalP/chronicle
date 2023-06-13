import { Entry, columns } from "./columns";
import { DataTable } from "@/components/DataTable";
import { headers } from "next/headers"

async function getEntries(month: string): Promise<Entry[]> {
    const data = await fetch(`${process.env.BASE_URL}/api/entries/?year=${month.substring(0,4)}&month=${month.substring(5)}`,{
        method: "GET",
        next: { revalidate: 0 },
        headers: headers()
    })
    const res = await data.json()
    return res
}

export default async function MonthPage ({ params }: { params: { month: string }}) {
    const { month } = params
    if(!month || !month.match(/\d\d\d\d-\d/)) return <p>Page not found</p>

    const data = await getEntries(month);

    return (
        <div className="min-h-screen">
                <h1 className="text-9xl text-center font-bold font-display">
                    { params.month }
                </h1>
                <div className="container mx-auto py-10 px-5">
                    <DataTable columns={columns} data={data} filter={true} />
                </div>
        </div>
    );
}
