export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="dark:bg-gray-700 dark:text-gray-100 flex lg:flex-row flex-col">
            <div className="w-full">{children}</div>
        </section>
    );
}
