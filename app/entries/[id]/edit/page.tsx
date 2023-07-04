"use client"

import { CustomSubmitHandler, Inputs } from "@/components/entries/form_types"
import FormWrapper from "@/components/entries/FormWrapper"

import { Entry } from "@/components/entries/entry_types"
import { useState, useEffect } from "react"
import FormLoading from "@/components/entries/FormLoading"

export default function EditEntry({ params }: { params: { id: string }}) {

    const [entry, setEntry] = useState<Entry>()

    useEffect(() => {
        const getEntry = async () => {
            const data = await fetch(`/api/entries/${params.id}`, {
                method: "GET"
            })
            const res = await data.json()
            if(!data.ok) {
                console.log(res.message)
            } else {
                res.dateStr = res.date.substring(0, 10)
                console.log(res)
                setEntry(res)
            }
        }

        getEntry()
    }, [params.id])

    if(!entry) return <FormLoading />
    const defaultValues: Partial<Inputs> = entry || {}
    
    const onSubmit: CustomSubmitHandler = async (inputs, customFormState, useFormReturn) => {
        //fill in default 0 and cast to number if needed
        for (let key of Object.keys(inputs)) {
            if(["hours", "publications", "videos", "returnVisits"].includes(key)) {
                inputs[key] = Number(inputs[key]) || 0
            }
        }

        if(inputs.hours === 0 && !localStorage.getItem('confirmedZeroHourWarning')) {
            customFormState.setWarn(true)
            localStorage.setItem('confirmedZeroHourWarning', 'confirmed')
            return;
        }

        const data = await fetch(`/api/entries/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(inputs)
        })
        const res = await data.json()
        if(!data.ok) {
            console.log(res)
            useFormReturn.setError('root', {
                message: res.message
            })
        }
        else {
            customFormState.setSuccessful(true)
        }
    }
    return <FormWrapper label="Edit" defaultValues={defaultValues} wrappedOnSubmit={onSubmit} />
}