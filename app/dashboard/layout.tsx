import { IoMdArrowDropdown } from 'react-icons/io';
import Logo from '../logo'

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className='dark:bg-gray-700 dark:text-gray-100'>
        {/* Include shared UI here e.g. a header or sidebar */}
        <header>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Logo href="/dashboard" adaptForDarkMode={true} />
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 font-extrabold tracking-wide text-lg flex flex-row items-center">FIELD SERVICE LOG</a>
                </nav>
                <div>
                    <div className="px-4">
                        <h2 className="title-font font-display text-2xl font-extrabold">123 Hours</h2>
                        <p className="leading-relaxed text-right">in 2023</p>
                    </div>
                </div>
            </div>
        </header>
   
        {children}
      </section>
    );
  }