

import MobileNav from "@/components/dashboard/nav/MobileNav";
import DesktopNav from "@/components/dashboard/nav/DesktopNav";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="dark:bg-gray-700 dark:text-gray-100 flex lg:flex-row flex-col">
            {/* Shared UI here e.g. a sidebar */}
            <DesktopNav />
            <div className="w-full">{children}</div>
            <MobileNav />
        </section>
    );
}
