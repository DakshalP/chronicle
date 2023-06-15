"use client"

import { CustomSubmitHandler, Inputs } from "@/components/entries/form_types"
import FormWrapper from "@/components/entries/FormWrapper"

export default function NewEntry() {

    const defaultValues: Partial<Inputs> = {
        dateStr: new Date(new Date().setHours(0, 0, 0, 0)).toISOString().substring(0, 10), //default date is today
    }
    
    const onSubmit: CustomSubmitHandler = async (inputs, customFormState, useFormReturn) => {
        //fill in default 0 and cast to number if needed
        for (let key of Object.keys(inputs)) {
            if(["hours", "publications", "videos", "returnVisits"].includes(key)) {
                inputs[key] = Number(inputs[key]) || 0
            }
        }

        if(inputs.hours === 0 && !customFormState.confirm) {
            console.log(inputs)
            customFormState.setWarn(true)
            return;
        }

        const data = await fetch('/api/entries', {
            method: "POST",
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
    return <FormWrapper label="New" defaultValues={defaultValues} wrappedOnSubmit={onSubmit} />
}