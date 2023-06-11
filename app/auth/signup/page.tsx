"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsQuestionCircle } from "react-icons/bs";
import Image from "next/image";

import signupImage from "/public/writing.jpg"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/Dialog";
import { useState } from "react";

export default function SignUp() {
    const { data: session } = useSession();
    const [loggingIn, setLoggingIn] = useState(false);

    const {
        watch,
        register,
        setError,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<Inputs>();

    if (!!session) redirect("/dashboard");

    type Inputs = {
        code: string;
        email: string;
        password: string;
        confirm_password: string;
        contact_me_by_mail_pigeon_only: boolean; //anti-spam
    };

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password, confirm_password, code, contact_me_by_mail_pigeon_only }) => {
        if(contact_me_by_mail_pigeon_only || password !== confirm_password) return;
        
        const data = await fetch('/api/user', {
            method: "POST",
            body: JSON.stringify({ email, password, code })
        })
        const res = await data.json();
        if(!res.ok) {
            console.log(res.error)
            setError("root", { message: res.message })
        }
        else {
            setLoggingIn(true)
            signIn("credentials", {email: email, password: password})
        }
    };

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-cgreen hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <Image
                    src={signupImage}
                    alt="a calligraphy pen"
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-2/3 xl:w-1/3 px-14 h-full md:px-16 xl:px-24
        flex items-center justify-center"
            >
                <div className="w-full">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                        Sign up for a new account
                    </h1>

                    {errors.root &&  <p tabIndex={1} autoFocus className="p-2 my-2 bg-red-700 rounded outline-none focus:ring-4 ring-red-300 font-bold text-white">{errors.root.message}</p>}
                    {loggingIn &&  <p tabIndex={1} autoFocus className="p-2 my-2 bg-cgreen rounded outline-none focus:ring-4 ring-red-300 font-bold text-white">Successful account creation. Signing in...</p>}

                    <form
                        className="mt-6 space-y-8"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label
                                htmlFor="code"
                                className="font-bold flex items-center gap-2"
                            >
                                Signup code 
                                <Dialog>
                                    <DialogTrigger className="dark:hover:text-gray-300 hover:text-gray-800">
                                         <BsQuestionCircle />
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Sign up code
                                            </DialogTitle>
                                            <DialogDescription className="whitespace-pre-wrap">
                                                Currently new accounts are restricted to those who have a Sign Up code. If you would like a code, please get in touch.
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </label>
                            <Input
                                id="code"
                                type="number"
                                autoFocus={!errors.root}
                                required
                                {...register("code")}
                            />
                            {errors.code && <p>{errors.code.message}</p>}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block font-semibold"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@domain.com"
                                required
                                {...register("email")}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block font-semibold"
                            >
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                {...register("password")}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="confirm_password"
                                className="block font-semibold"
                            >
                                Confirm Password
                            </label>
                            <Input
                                id="confirm_password"
                                type="password"
                                required
                                {...register("confirm_password", {
                                    validate: (val: string) => {
                                        if(watch("password") !== val) {
                                            return "Passwords do not match."
                                        }
                                    }
                                })}
                            />
                            {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
                        </div>

                        <input type="checkbox" {...register("contact_me_by_mail_pigeon_only")} className="hidden" tabIndex={-1} autoComplete="not_valid_value"></input>

                        <Button
                            variant="cgreen"
                            className="w-full"
                            type="submit"
                            disabled={isSubmitting || loggingIn}
                        >
                            {isSubmitting ? "Loading..." : loggingIn ? "Signing in...": "Sign up"}
                        </Button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />

                    {/* <Button
                        variant="cgray"
                        className="w-full flex justify-center items-center"
                    >
                        <FcGoogle />
                        <span className="ml-4">Sign in with Google</span>
                    </Button> */}

                    <p className="mt-8">
                        Already have an account?{" "}
                        <Link
                            href="/auth/signin"
                            className="text-cgreen dark:text-white hover:text-cgreen-light font-semibold"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
