/** @type {import('tailwindcss').Config} */
module.exports = {
    // darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["var(--font-dm-serif-display)", "DM Serif Display","Georgia", "Times New Roman", "serif"]
            },
            colors: {
                cgray: {
                    DEFAULT: "#EEEEEE",
                    light: "#fafafa",
                    dark: "#e2e2e2",
                    hover: "#d6d6d6",
                    outline: "#b2b2b2", 
                },
                cbrown: {
                    DEFAULT: "#79443B",
                    light: "#9b574c",
                    dark: "#57312a", 
                },
                cgreen: {
                    DEFAULT: "#41644A",
                    light: "#708a77",
                    dark: "#304b37",
                },
            }
        }
    }
}