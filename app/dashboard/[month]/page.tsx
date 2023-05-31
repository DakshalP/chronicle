import Calendar from "@/components/Calendar";
import { Entry, columns } from "./columns";
import { DataTable } from "@/components/DataTable";

async function getData(): Promise<Entry[]> {
    // Fetch data from your API here.
    return [
        {
            id: 1,
            date: new Date(),
            hours: 1,
            videos: 2,
            publications: 3,
            returnVisits: 4,
            title: "George's Study",
            comments: "These are some loooooonng comments \n \n really a lot.",
        },
        {
            id: 1,
            date: new Date(),
            hours: 13,
            videos: 22,
            publications: 34,
            returnVisits: 42,
            title: "Somebody Long Name's Study",
            comments:
                "asdfasdfasdfasdfasd asdfasdf asdf some loooooonng comments \n \n really a lot.",
        },
        {
            id: 1,
            date: new Date(),
            hours: 13,
            videos: 22,
            publications: 34,
            returnVisits: 42,
            title: "Metropolitan Witnessing",
            comments: "small",
        },
    ];
}

export default async function DemoPage() {
    const data = await getData();

    return (
        <div className="min-h-screen">
            <Calendar />
            <div className="container mx-auto py-10 px-5">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
}
