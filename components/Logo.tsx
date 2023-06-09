import Link from 'next/link'
import Image from 'next/image'

import logoSVG from "/public/logo.svg"

export default function Logo({href, adaptForDarkMode = false}: {href: string, adaptForDarkMode?: boolean}) {
    return (
        <Link href={href} className="flex title-font font-medium items-center mb-4 md:mb-0 cursor-pointer">
                <Image src={logoSVG} alt="notebook and pen logo" />
                <span className={`ml-3 text-4xl font-display font-extrabold text-cbrown ${adaptForDarkMode ? 'dark:text-gray-100' : ''}`}>
                    chronicle
                </span>
        </Link>
    )
}