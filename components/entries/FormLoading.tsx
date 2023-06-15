import Button from "../Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { IoMdClose } from "react-icons/io";

const FormLoading = () => {
    return (
        <div
            className={` flex justify-center items-center min-h-screen  bg-gradient-to-tr from-gray-300 to-cgray-dark dark:from-gray-700 dark:to-gray-700`}
        >
            <div
                className={` relative w-full lg:h-fit h-full max-w-4xl lg:mx-10 md:m-5 bg-cgray-light lg:border border-gray-200 md:rounded-lg lg:shadow lg:p-9 p-10 dark:bg-gray-800 dark:border-gray-700`}
            >
                <div className="absolute top-0 right-0 p-5">
                    <span>
                        {" "}
                        <IoMdClose className="w-10 h-10 active:text-cgreen text-cgray-outline dark:text-gray-500" />{" "}
                    </span>
                </div>
                <form className="lg:space-y-10 space-y-6 animate-pulse">
                    <h1 className="text-6xl font-extrabold font-display">
                        Loading...
                    </h1>

                    <div>
                        <label
                            htmlFor="large-input"
                            className="block mb-2 font-bold text-gray-900 dark:text-white"
                        >
                            ...
                        </label>
                        <Input disabled={true} className="w-full" />
                    </div>
                    <div>
                        <label
                            htmlFor="large-input"
                            className="block mb-2 font-bold text-gray-900 dark:text-white"
                        >
                            ...
                        </label>
                        <Input disabled={true} />
                    </div>
                    <div>
                        <label
                            htmlFor="large-input"
                            className="block mb-2 font-bold text-gray-900 dark:text-white"
                        >
                            ...
                        </label>
                        <div className="flex gap-2">
                            <Input disabled={true} variant="number" />
                            <Button
                            disabled={true}
                                variant={"cgreen"}
                                className="text-2xl text-transparent"
                                tabIndex={-1}
                            >
                                +½
                            </Button>
                            <Button
                            disabled={true}
                                variant={"cgreen"}
                                className="text-xl text-transparent"
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
                                ...
                            </label>
                            <div className="flex justify-center gap-2">
                                <Input disabled={true} variant={"number"} />
                                <Button
                                disabled={true}
                                    variant={"cgreen"}
                                    className="text-xl text-transparent"
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
                                ...
                            </label>
                            <div className="flex justify-center gap-2">
                                <Input disabled={true} variant={"number"} />
                                <Button
                                disabled={true}
                                    variant={"cgreen"}
                                    className="text-xl text-transparent"
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
                                ...
                            </label>
                            <div className="flex justify-center gap-2">
                                <Input disabled={true} variant={"number"} />
                                <Button
                                disabled={true}
                                    variant={"cgreen"}
                                    className="text-xl text-transparent"
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
                            ...
                        </label>
                        <TextArea disabled={true} />
                    </div>
                    <div className="flex gap-5">
                        <Button
                        disabled={true}
                            className="w-full text-transparent"
                            variant={"cbrown"}
                            type="submit"
                        >
                            Submit
                        </Button>
                        <Button
                        disabled={true} className="w-full" href="/dashboard">
                            <span className="text-transparent">Cancel</span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormLoading;
