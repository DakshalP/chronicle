'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

export default function SignIn({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const { error } = searchParams;
    const { data: session } = useSession();
    const { register, handleSubmit, formState: {isSubmitted} } = useForm<Inputs>();

    if(!!session) redirect("/dashboard")


    type Inputs = {
        email: string,
        password: string,
    }

    const onSubmit: SubmitHandler<Inputs> = ({email, password}) => {
        signIn("credentials", { email: email, password: password })
    };

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-cgreen hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img
                    src="/pen.jpg"
                    alt="a calligraphy pen"
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-2/3 xl:w-1/3 h-screen px-20 md:px-16 xl:px-24
        flex items-center justify-center"
            >
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                        Sign in to your account
                    </h1>

                   {!!error ?  <p tabIndex={1} autoFocus className="p-2 my-2 bg-red-700 rounded outline-none focus:ring-4 ring-red-300 font-bold text-white">There was an error signing in. Please try again.</p> : null}

                    <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block">Email</label>
                            <Input
                                id="email"
                                type="email"
                                autoFocus={!error}
                                placeholder="example@domain.com"
                                required
                                {...register("email")}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password" className="block">Password</label>
                            <Input
                                id="password"
                                type="password"
                                required
                                {...register("password")}
                            />
                        </div>

                        <div className="text-right mt-2">
                            <a
                                href="#"
                                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <Button variant="cbrown" className="w-full" type="submit" disabled={isSubmitted}>{isSubmitted ? 'Loading...' : 'Sign in'}</Button>
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
                        Need an account?{" "}
                        <a
                            href="#"
                            className="text-cgreen dark:text-white hover:text-cgreen-light font-semibold"
                        >
                            Create an account
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
