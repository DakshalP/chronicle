import React from 'react'
import { BsLightbulbFill } from 'react-icons/bs'

const Tip = ({ children, mobileOnly = false } : { children: React.ReactNode, mobileOnly?: boolean }) => {
  return (
    <div className={mobileOnly ? 'lg:hidden block': ''} >
        <div className="px-10 py-5 w-96 bg-gray-200 border-2 border-gray-500 rounded-lg flex flex-row items-start gap-8 shadow text-left">
                <div className="flex items-center gap-2 text-xl font-bold uppercase font-display tracking-wider"><BsLightbulbFill /> Tip</div>
                <div>
                    {children}
                </div>
        </div>
    </div>
  )
}

export default Tip