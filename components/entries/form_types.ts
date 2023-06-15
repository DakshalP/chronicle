import { Dispatch, SetStateAction } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"

export type Inputs = FieldValues & {
    title: string,
    dateStr: string,
    hours: number,
    publications: number,
    videos: number,
    returnVisits: number, 
    comments: string,
}


export type CustomFormState = {
    successful: boolean,
    setSuccessful: Dispatch<SetStateAction<boolean>>,
    confirm: boolean,
    setConfirm: Dispatch<SetStateAction<boolean>>,
    warn: boolean,
    setWarn: Dispatch<SetStateAction<boolean>>,
}

export type CustomSubmitHandler = (
    inputs: Inputs,
    customFormState: CustomFormState,
    useFormReturn: UseFormReturn<Inputs>,
) => Promise<undefined>