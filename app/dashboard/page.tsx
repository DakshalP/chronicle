import Month from "@/components/dashboard/Month";

export default async function Dashboard() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <Month />
                <Month />
                <Month />
                <Month />
            </div>
        </div>
    );
}
