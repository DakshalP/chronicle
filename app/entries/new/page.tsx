'use client'

import Button from "@/components/Button"
import Link from "next/link"
import { IoMdClose } from "react-icons/io"
import Input from "@/components/Input"
import TextArea from "@/components/TextArea"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    title: string,
    date: string,
    hours: number,
    publications: number,
    videos: number,
    returnVisits: number, 
    comments: string,
}

const sumConvert = (x: any, y: any) => {
    if(y < 0 && x <= 1) return 0;
    return +x + +y
}

export default function NewEntry() {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>  console.log(data)

    return (
        <div className="flex justify-center items-center min-h-screen  bg-gradient-to-tr from-gray-300 to-cgray-dark dark:from-gray-500 dark:via-gray-600 dark:to-gray-700">
            <div className="relative w-full lg:h-fit h-full max-w-4xl lg:mx-10 md:m-5 bg-cgray-light lg:border border-gray-200 md:rounded-lg lg:shadow lg:p-9 p-10 dark:bg-gray-800 dark:border-gray-700">
                <div className="absolute top-0 right-0 p-5">
                    <Link href="/dashboard"> <IoMdClose className="w-10 h-10 active:text-cgreen text-cgray-outline dark:text-gray-500"/> </Link>
                </div>
            <form className="lg:space-y-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-6xl font-extrabold font-display">New entry</h1>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Date</label>
                    <Input
                    defaultValue={new Date(new Date().setHours(0,0,0,0)).toISOString().substring(0, 10)}
                    {...register("date", {
                        valueAsDate: false
                    })} type="date" />
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 font-bold text-gray-900 dark:text-white">Title</label>
                    <Input autoFocus maxLength={50} {...register("title")} placeholder="Optional title (Ex: George's study)" />
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
                <div className="flex gap-4">
                <Button className="w-full" variant={"cbrown"} type="submit">Submit</Button>
                <Button className="w-full">Cancel</Button>
                </div>
            </form>
        </div>
        </div>

    )
}