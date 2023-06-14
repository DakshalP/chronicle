'use client'

import Button from "@/components/Button"
import Link from "next/link"
import { IoMdClose } from "react-icons/io"
import Input from "@/components/Input"
import TextArea from "@/components/TextArea"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { dateFromYYYYMMDD } from "@/lib/utils"

type Inputs = {
    title: string,
    dateStr: string,
    hours: number,
    publications: number,
    videos: number,
    returnVisits: number, 
    comments: string,
    [key: string]: string | number
}

const sumConvert = (x: any, y: any) => {
    return +x + +y
}

export default function NewEntry() {
    const [successful, setSuccessful] = useState(false);
    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
        //fill in default 0 and cast to number if needed
        for (let key of Object.keys(inputs)) {
            if(["hours", "publications", "videos", "returnVisits"].includes(key)) {
                inputs[key] = Number(inputs[key]) || 0
            }
        }

        const data = await fetch('/api/entries', {
            method: "POST",
            body: JSON.stringify(inputs)
        })
        const res = await data.json()
        if(!data.ok) {
            console.log(res)
        }
        else {
            setSuccessful(true)
        }
    }
    return (
        <div className={` flex justify-center items-center min-h-screen  bg-gradient-to-tr from-gray-300 to-cgray-dark dark:from-gray-700 dark:to-gray-700`}>
            <div className={`fixed transition-all h-screen w-screen flex flex-col gap-5 items-center justify-center p-2 duration-200 ${successful ? '' : ' translate-y-10 opacity-0 h-0'}`}>
                <h1 className="font-bold md:text-7xl text-5xl font-display text-center">Time recorded!</h1>
                {successful && <p>+{`${watch('hours') || 0} hours recorded for ${dateFromYYYYMMDD(watch('dateStr').toString()).toLocaleDateString()}.`}</p>}
                <Button href="/dashboard" variant="cgreen">Return to dashboard</Button>
            </div>
            <div className={` ${successful ? 'hidden' : ''} relative w-full lg:h-fit h-full max-w-4xl lg:mx-10 md:m-5 bg-cgray-light lg:border border-gray-200 md:rounded-lg lg:shadow lg:p-9 p-10 dark:bg-gray-800 dark:border-gray-700`}>
                <div className="absolute top-0 right-0 p-5">
                    <Link href="/dashboard"> <IoMdClose className="w-10 h-10 active:text-cgreen text-cgray-outline dark:text-gray-500"/> </Link>
                </div>
            <form className="lg:space-y-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-6xl font-extrabold font-display">New entry</h1>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Date</label>
                    <Input
                    defaultValue={new Date(new Date().setHours(0,0,0,0)).toISOString().substring(0, 10)}
                    {...register("dateStr", {
                        valueAsDate: false
                    })} type="date" />
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Title</label>
                    <Input autoFocus maxLength={50} {...register("title")} placeholder="Optional title" />
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Hours</label>
                    <div className="flex gap-2">
                        <Input type="number" step="0.5" pattern="^\d*(\.\d{0,1})?$" {...register('hours')} placeholder="0" className="flex-grow" variant={"number"} />
                        <Button onClick={() => setValue('hours', sumConvert(watch('hours'), 0.5))} variant={"cgreen"} className="text-2xl" tabIndex={-1}>+½</Button>
                        <Button onClick={() => setValue('hours', sumConvert(watch('hours'), 1))} variant={"cgreen"} className="text-xl" tabIndex={-1}><span className="text-3xl">+</span></Button>
                    </div>
                    {errors.hours && <p>{errors.hours.message}</p>}
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
                    <div className="w-full">
                        <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Publications</label>
                        <div className="flex justify-center gap-2">
                            <Input {...register('publications')} type="number" placeholder="0" variant={"number"} />
                            <Button onClick={() => setValue('publications', sumConvert(watch('publications'), 1))} variant={"cgreen"} className="text-xl" tabIndex={-1}><span className="text-3xl">+</span></Button>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Videos</label>
                        <div className="flex justify-center gap-2">
                            <Input {...register('videos')} type="number" placeholder="0" variant={"number"} />
                            <Button onClick={() => setValue('videos', sumConvert(watch('videos'), 1))} variant={"cgreen"} className="text-xl" tabIndex={-1}><span className="text-3xl">+</span></Button>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-1 col-span-2">
                        <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Return Visits</label>
                        <div className="flex justify-center gap-2">
                            <Input {...register('returnVisits')} type="number" placeholder="0" variant={"number"} />
                            <Button onClick={() => setValue('returnVisits', sumConvert(watch('returnVisits'), 1))} variant={"cgreen"} className="text-xl" tabIndex={-1}><span className="text-3xl">+</span></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Notes</label>
                    <TextArea maxLength={500} {...register("comments")} placeholder="Optional notes" />
                </div>
                <div className="flex gap-5">
                <Button className="w-full" variant={"cbrown"} type="submit" disabled={successful || isSubmitting}>{!isSubmitting ? 'Submit' : 'Submitting...'}</Button>
                <Button className="w-full" href="/dashboard">Cancel</Button>
                </div>
            </form>
        </div>
        </div>

    )
}