import { Dispatch, SetStateAction } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"
import { Entry } from "./entry_types"

export type Inputs = FieldValues & Entry

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