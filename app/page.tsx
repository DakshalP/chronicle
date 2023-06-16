import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { TbFlag3 } from "react-icons/tb"
import Logo from "@/components/Logo"
import Button from "@/components/Button"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import Image from "next/image"
import { redirect } from "next/navigation"

import heroImage from "/public/journal.jpg"
import { BiBell, BiCalendarAlt, BiCloud, BiQuestionMark } from "react-icons/bi"

const Header = () => (
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Logo href="/" />
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                {/* <a className="mr-5 hover:text-gray-900">Join</a> */}
            </nav>
            <div className="flex gap-3">
            <Button size="small" variant="nodark" href="/auth/signup" >Sign up</Button>
            <Button size="small" variant="cbrown" href="/auth/signin">Sign in</Button>
            </div>
        </div>
    </header>
);

const Hero = () => (
    <div className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-between">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font lg:text-8xl md:text-6xl sm:text-8xl text-6xl mb-4 font-display font-bold text-gray-900">
                    An easier way to track your time
                </h1>
                <p className="mb-8 mt-2 text-xl leading-relaxed">
                   With Chronicle you can keep track of your service hours across all your devices. With automated totals and other features to make reporting easier.
                </p>
                <div className="flex lg:flex-row md:flex-col sm:flex-row flex-col lg:justify-start justify-center w-full gap-5">
                    <Button variant={"cgreen"} href="/auth/signup" className="md:w-fit w-full">Get Started</Button>
                    <Button variant="nodark" href="/auth/signin" className="md:w-fit w-full">Sign in</Button>            
                </div>
            </div>
            <div className="lg:w-2/3 md:w-1/2 w-5/6">
                <Image className="object-cover object-center rounded" alt="hero" src={heroImage} />
            </div>
        </div>
    </div>
);

const Statistic = () => (
  <section className="text-gray-600 body-font">
  <div className="container px-5 pt-5 pb-20 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 lg:w-1/4 w-1/2">
            <h2 className="title-font font-display sm:text-4xl xs:text-3xl text-2xl text-gray-900 font-extrabold">Hours</h2>
            <p className="leading-relaxed text-cbrown">✓</p>
          </div>
      
      <div className="p-4 lg:w-1/4 w-1/2">
        <h2 className="title-font font-display sm:text-4xl xs:text-3xl text-2xl text-gray-900 font-extrabold">Videos</h2>
        <p className="leading-relaxed text-cbrown">✓</p>
      </div>
      <div className="p-4 lg:w-1/4 w-1/2">
        <h2 className="title-font font-display sm:text-4xl xs:text-3xl text-2xl text-gray-900 font-extrabold">
          Publications
        </h2>
        <p className="leading-relaxed text-cbrown">✓</p>
      </div>
      <div className="p-4 lg:w-1/4 w-1/2">
        <h2 className="title-font font-display sm:text-4xl xs:text-3xl text-2xl text-gray-900 font-extrabold">Returns</h2>
        <p className="leading-relaxed text-cbrown">✓</p>
      </div>
    </div>
  </div>
</section>
)

const Feature = () => (
  <section className="text-gray-600 body-font min-h-screen flex flex-col justify-evenly bg-gradient-to-b from-gray-100 to-gray-200">
  <div className="container px-5 py-10 mx-auto">
    <div className="text-center mb-20">
      <h1 className="md:text-7xl text-5xl font-display font-extrabold  title-font text-gray-900 mb-4">Features</h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-cbrown inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-cbrown mb-5 flex-shrink-0">
          <AiOutlineAppstoreAdd className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-3xl title-font font-extrabold font-display mb-3">Month-end totals</h2>
          <p className="leading-relaxed text-base">Month-end totals are automatically calculated for easy reporting. Yearly totals are also available.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-cbrown mb-5 flex-shrink-0">
          {/* <TbFlag3 className="w-10 h-10" /> */}
          <BiCloud className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-3xl title-font font-extrabold font-display mb-3">Cloud backups</h2>
          <p className="leading-relaxed text-base">Your entries are backed up securely in the cloud, so you can use Chronicle on any of your devices.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-cbrown mb-5 flex-shrink-0">
          <BiCalendarAlt className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-3xl title-font font-extrabold font-display mb-3">Calendar summary</h2>
          <p className="leading-relaxed text-base">Service days are highlighted on a calendar, making it easy to check if you missed recording a day.</p>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center mt-24">
      <Button variant="cbrown" href="/auth/signup">Start using these features</Button>
    </div>
  </div>
</section>
)

const ComingSoon = () => (
  <section className="text-gray-600 body-font min-h-screen flex flex-col justify-evenly bg-gradient-to-b from-gray-200 to-gray-300">
  <div className="container px-5 py-32 mx-auto">
    <div className="text-center mb-20">
      <h1 className="md:text-7xl text-5xl font-display font-extrabold  title-font text-gray-900 mb-4">Coming Soon</h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-cgreen inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-cgreen mb-5 flex-shrink-0">
          <BiBell className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-3xl title-font font-extrabold font-display mb-3">Notifications</h2>
          <p className="leading-relaxed text-base">Enable custom notifications that will remind you of your goals and keep you on track to reach them.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-cgreen mb-5 flex-shrink-0">
          {/* <TbFlag3 className="w-10 h-10" /> */}
          <TbFlag3 className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-3xl title-font font-extrabold font-display mb-3">Hour goals</h2>
          <p className="leading-relaxed text-base">Enter a goal and Chronicle will keep track of how many hours you need to reach it.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-cgreen mb-5 flex-shrink-0">
          <BiQuestionMark className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-3xl title-font font-extrabold font-display mb-3">Your suggestions</h2>
          <p className="leading-relaxed text-base">If you have a suggestion for a feature you want to add to Chronicle, please get in touch!</p>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center mt-24">
      <Button variant="cgreen" href="/auth/signup">Sign up for a free account</Button>
    </div>
  </div>
</section>
)

/*
const Contact = () =>  (
  <section className="text-gray-600 body-font relative bg-gradient-to-b from-gray-200 to-gray-300">
  <div className="container px-5 py-24 mx-auto min-h-screen flex flex-col justify-center">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="md:text-7xl text-5xl font-extrabold font-display title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Use this form to get in touch with us.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-300 focus:border-cgreen focus:bg-white focus:ring-2 focus:ring-emerald-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-50 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-300 focus:border-cgreen focus:bg-white focus:ring-2 focus:ring-emerald-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-300 focus:border-cgreen focus:bg-white focus:ring-2 focus:ring-emerald-50 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full flex justify-center">
          <Button variant="cgreen">Send</Button>
        </div>
      </div>
    </div>
  </div>
</section>

)
*/

const Footer = () => (
  <footer className="text-gray-600 body-font bg-cgray">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Logo href="/" />
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Logo uses an icon from Pro Icons on The Noun Project.
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Button size="small" variant="cbrown" href="#">Got to top</Button>
    </span>
  </div>
</footer>
)

export default async function Home() {
    const session = await getServerSession(authOptions);

    if(!!session) redirect("/dashboard")

    return (
        <main className="text-black">
            <div className="p-5 min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-gray-100">
              <Header />
              <Hero />
            <Statistic />
            </div>
            <Feature />
            <ComingSoon />
            <Footer />
        </main>
    );
}
