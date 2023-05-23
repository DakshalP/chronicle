export default function Home() {
    return (
        <main>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                        <img src="/logo.svg" />
                        <span className="ml-3 text-4xl font-display text-logo">Chronicle</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">Join</a>
                    </nav>
                    <button className="inline-flex items-center bg-logo text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mt-4 md:mt-0">
                        Sign in
                    </button>
                </div>
            </header>
        </main>
    );
}
