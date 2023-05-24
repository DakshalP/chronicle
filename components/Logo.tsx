import Link from 'next/link'

export default function Logo({href, adaptForDarkMode = false}: {href: string, adaptForDarkMode?: boolean}) {
    return (
        <Link href={href} className="flex title-font font-medium items-center mb-4 md:mb-0 cursor-pointer">
                <img src="/logo.svg" />
                <span className={`ml-3 text-4xl font-display font-extrabold text-cbrown ${adaptForDarkMode ? 'dark:text-gray-100' : ''}`}>
                    chronicle
                </span>
        </Link>
    )
}