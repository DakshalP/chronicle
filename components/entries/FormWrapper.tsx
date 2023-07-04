'use client'


import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"

import { dateFromYYYYMMDD } from "@/lib/utils"
import { Inputs, CustomFormState, CustomSubmitHandler } from "@/components/entries/form_types"


import Button from "@/components/Button"
import Link from "next/link"
import Form from "@/components/entries/Form"
import { IoMdClose } from "react-icons/io"

type Props = {
    label: "Edit" | "New",
    defaultValues: Partial<Inputs>,
    wrappedOnSubmit: CustomSubmitHandler
}

export default function FormWrapper({label, defaultValues, wrappedOnSubmit}: Props) {
    const useFormReturn = useForm<Inputs>();

    const [successful, setSuccessful] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [warn, setWarn] = useState(false);

    const customFormState: CustomFormState =  {
        successful,
        setSuccessful,
        warn,
        setWarn
    }

    const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
        await wrappedOnSubmit(inputs, customFormState, useFormReturn)
    }

    return (
        <div className={` flex justify-center items-center min-h-screen  bg-gradient-to-tr from-gray-300 to-cgray-dark dark:from-gray-700 dark:to-gray-700`}>
            <div className={`fixed transition-all h-screen w-screen flex flex-col gap-5 items-center justify-center p-2 duration-200 ${customFormState.successful ? '' : ' translate-y-10 opacity-0 h-0'}`}>
                <h1 className="font-bold md:text-7xl text-5xl font-display text-center">{label === "Edit" ? "Updated!" : "Time recorded!"}</h1>
                {customFormState.successful && <p>{`${useFormReturn.watch('hours') || 0} hours recorded for ${dateFromYYYYMMDD(useFormReturn.watch('dateStr').toString()).toLocaleDateString()}.`}</p>}
                <Button href="/dashboard" variant="cgreen">Return to dashboard</Button>
            </div>
            <div className={` ${customFormState.successful ? 'hidden' : ''} relative w-full lg:h-fit h-full max-w-4xl lg:mx-10 md:m-5 bg-cgray-light lg:border border-gray-200 md:rounded-lg lg:shadow lg:p-9 p-10 dark:bg-gray-800 dark:border-gray-700`}>
                    <div className="absolute top-0 right-0 p-5">
                        <Link href="/dashboard"> <IoMdClose className="w-10 h-10 active:text-cgreen text-cgray-outline dark:text-gray-500"/> </Link>
                    </div>
                <Form label={label} defaultValues={defaultValues} onSubmit={onSubmit} customFormState={customFormState} useFormReturn={useFormReturn} />            
            </div>
        </div>

    )
}