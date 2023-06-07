import "./globals.css";
import { Inter, DM_Serif_Display } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const display = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dm-serif-display" });

export const metadata = {
    title: "Chronicle",
    description: "Log time and display reports.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en" className="text-neutral-700 dark:bg-gray-700 dark:text-gray-100">
            <body className={`${inter.className} ${display.variable}`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
