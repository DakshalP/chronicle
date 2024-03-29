"use client";

import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Inputs } from "./form_types";
import Button from "../Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/Dialog";
import { CustomFormState } from "./form_types";

const sumConvert = (x: any, y: any) => {
    return +x + +y;
};

type Props = {
    label: "Edit" | "New";
    defaultValues: Partial<Inputs>;
    onSubmit: SubmitHandler<Inputs>;
    customFormState: CustomFormState;
    useFormReturn: UseFormReturn<Inputs>;
};

const Form = ({
    label,
    defaultValues,
    onSubmit,
    customFormState: {
        successful,
        setSuccessful,
        warn,
        setWarn,
    },
    useFormReturn: {
        handleSubmit,
        register,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    },
}: Props) => {
    return (
        <form
            className="lg:space-y-10 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="text-6xl font-extrabold font-display">{label} entry</h1>
            {errors.root && (
                <p
                    tabIndex={1}
                    autoFocus
                    className="p-2 my-2 bg-red-700 rounded outline-none focus:ring-4 ring-red-300 font-bold text-white"
                >
                    {errors.root.message}
                </p>
            )}
            <div>
                <label
                    htmlFor="large-input"
                    className="block mb-2 font-bold text-gray-900 dark:text-white"
                >
                    Date
                </label>
                <Input
                    defaultValue={defaultValues.dateStr}
                    max={new Date(new Date().setHours(0, 0, 0, 0))
                        .toISOString()
                        .substring(0, 10)}
                    {...register("dateStr", {
                        valueAsDate: false,
                    })}
                    type="date"
                    className="w-full"
                />
            </div>
            <div>
                <label
                    htmlFor="large-input"
                    className="block mb-2 font-bold text-gray-900 dark:text-white"
                >
                    Title
                </label>
                <Input
                    defaultValue={defaultValues.title}
                    autoFocus={!errors.root}
                    maxLength={50}
                    {...register("title")}
                    placeholder="Optional title"
                />
            </div>
            <div>
                <label
                    htmlFor="large-input"
                    className="block mb-2 font-bold text-gray-900 dark:text-white"
                >
                    Hours
                </label>
                <div className="flex gap-2">
                    <Input
                        defaultValue={defaultValues.hours}
                        type="number"
                        step="0.5"
                        pattern="^\d*(\.\d{0,1})?$"
                        {...register("hours")}
                        placeholder="0"
                        className="flex-grow"
                        variant={"number"}
                    />
                    <Button
                        onClick={() =>
                            setValue("hours", sumConvert(watch("hours"), 0.5))
                        }
                        variant={"cgreen"}
                        className="text-2xl"
                        tabIndex={-1}
                    >
                        +½
                    </Button>
                    <Button
                        onClick={() =>
                            setValue("hours", sumConvert(watch("hours"), 1))
                        }
                        variant={"cgreen"}
                        className="text-xl"
                        tabIndex={-1}
                    >
                        <span className="text-3xl">+</span>
                    </Button>
                </div>
            </div>
            <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col gap-6">
                <div className="w-full">
                    <label
                        htmlFor="large-input"
                        className="block mb-2 font-bold text-gray-900 dark:text-white"
                    >
                        Publications
                    </label>
                    <div className="flex justify-center gap-2">
                        <Input
                            defaultValue={defaultValues.publications}
                            {...register("publications")}
                            type="number"
                            placeholder="0"
                            variant={"number"}
                        />
                        <Button
                            onClick={() =>
                                setValue(
                                    "publications",
                                    sumConvert(watch("publications"), 1)
                                )
                            }
                            variant={"cgreen"}
                            className="text-xl"
                            tabIndex={-1}
                        >
                            <span className="text-3xl">+</span>
                        </Button>
                    </div>
                </div>
                <div className="w-full">
                    <label
                        htmlFor="large-input"
                        className="block mb-2 font-bold text-gray-900 dark:text-white"
                    >
                        Videos
                    </label>
                    <div className="flex justify-center gap-2">
                        <Input
                            defaultValue={defaultValues.videos}
                            {...register("videos")}
                            type="number"
                            placeholder="0"
                            variant={"number"}
                        />
                        <Button
                            onClick={() =>
                                setValue(
                                    "videos",
                                    sumConvert(watch("videos"), 1)
                                )
                            }
                            variant={"cgreen"}
                            className="text-xl"
                            tabIndex={-1}
                        >
                            <span className="text-3xl">+</span>
                        </Button>
                    </div>
                </div>
                <div className="w-full lg:col-span-1 col-span-2">
                    <label
                        htmlFor="large-input"
                        className="block mb-2 font-bold text-gray-900 dark:text-white"
                    >
                        Return Visits
                    </label>
                    <div className="flex justify-center gap-2">
                        <Input
                            defaultValue={defaultValues.returnVisits}
                            {...register("returnVisits")}
                            type="number"
                            placeholder="0"
                            variant={"number"}
                        />
                        <Button
                            onClick={() =>
                                setValue(
                                    "returnVisits",
                                    sumConvert(watch("returnVisits"), 1)
                                )
                            }
                            variant={"cgreen"}
                            className="text-xl"
                            tabIndex={-1}
                        >
                            <span className="text-3xl">+</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <label
                    htmlFor="large-input"
                    className="block mb-2 font-bold text-gray-900 dark:text-white"
                >
                    Notes
                </label>
                <TextArea
                    defaultValue={defaultValues.comments}
                    maxLength={500}
                    {...register("comments")}
                    placeholder="Optional notes"
                />
            </div>
            <div className="flex gap-5">
                <Button
                    className="w-full"
                    variant={"cbrown"}
                    type="submit"
                    disabled={successful || isSubmitting}
                >
                    {!isSubmitting ? (label === "Edit" ? "Update" : "Submit") : "Submitting..."}
                </Button>
                <Button
                    disabled={successful || isSubmitting}
                    className="w-full"
                    href="/dashboard"
                >
                    Cancel
                </Button>
            </div>
            <Dialog open={warn} onOpenChange={setWarn}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            You are about to submit zero hours.
                        </DialogTitle>
                        <DialogDescription>
                            This is useful for
                            marking that you did not do service on this day.
                            It will be marked as an X on the calendar.
                            <span className="p-5 pb-0 flex gap-5 justify-end">
                                <Button
                                    size="small"
                                    variant="cgreen"
                                    onClick={() => {
                                        setWarn(false);
                                    }}
                                >
                                    Okay
                                </Button>
                            </span>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </form>
    );
};

export default Form;
