import { Entries } from "@/app/dashboard/page";
import { dateFromYYYYMMDD } from "@/lib/utils";
import { BiLinkExternal, BiTrash } from "react-icons/bi";
import Button from "../Button";
import { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/Dialog";

async function deleteEntry(id: number, setDeletedID: Function) {
    const data = await fetch(`/api/entries?id=${id}`, {
        method: "DELETE",
    });
    const res = await data.json();
    if (!data.ok) {
        console.log(res);
    } else {
        setDeletedID(id);
    }
}

const Table = ({
    loading,
    entries,
    setDeletedID,
}: {
    loading: boolean;
    entries: Entries;
    setDeletedID: Function;
}) => {
    const [openDelete, setOpenDelete] = useState(false)
    const renderBody = () => {
        return entries.map((entry) => {
            const entryDate = dateFromYYYYMMDD(entry.date);
            return (
                <tbody key={entry.id} className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap leading-5">
                            <p>
                                {entryDate.getMonth() + 1} /{" "}
                                {entryDate.getDate()}
                            </p>
                            <p className="text-sm text-gray-400">
                                {entry.title}
                            </p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap leading-5">
                            <p
                                className={
                                    entry.hours > 0
                                        ? ""
                                        : "text-gray-300 dark:text-gray-500"
                                }
                            >
                                {entry.hours}
                            </p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap leading-5 xl:table-cell hidden">
                            <p
                                className={
                                    entry.publications > 0
                                        ? ""
                                        : "text-gray-300 dark:text-gray-500"
                                }
                            >
                                {entry.publications}
                            </p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap leading-5 xl:table-cell hidden">
                            <p
                                className={
                                    entry.videos > 0
                                        ? ""
                                        : "text-gray-300 dark:text-gray-500"
                                }
                            >
                                {entry.videos}
                            </p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap leading-5 xl:table-cell hidden">
                            <p
                                className={
                                    entry.returnVisits > 0
                                        ? ""
                                        : "text-gray-300 dark:text-gray-500"
                                }
                            >
                                {entry.returnVisits}
                            </p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                            <Dialog>
                                <DialogTrigger className="dark:hover:text-gray-300 hover:text-gray-800">
                                    <div className="flex text-green-500 hover:text-green-600 gap-2 cursor-pointer">
                                        <BiLinkExternal className="w-5 h-5" />
                                        <p>More</p>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>
                                            Entry on {entryDate.toLocaleDateString()}
                                        </DialogTitle>
                                        <DialogDescription>
                                            <div className="p-3">
                                                <div className="font-bold mt-5 text-center text-lg">
                                                    {entry.title}
                                                </div>
                                                <div className="container px-5 py-5 mx-auto">
                                                    <div className="flex flex-wrap -m-4 text-center">
                                                        <div className="p-4 sm:w-1/4 w-1/2">
                                                            <h2 className="title-font font-bold sm:text-4xl text-3xl">
                                                                {entry.hours}
                                                            </h2>
                                                            <p className="leading-relaxed">
                                                                Hours
                                                            </p>
                                                        </div>
                                                        <div className="p-4 sm:w-1/4 w-1/2">
                                                            <h2 className="title-font font-medium sm:text-4xl text-3xl">
                                                                {
                                                                    entry.publications
                                                                }
                                                            </h2>
                                                            <p className="leading-relaxed">
                                                                Publ.
                                                            </p>
                                                        </div>
                                                        <div className="p-4 sm:w-1/4 w-1/2">
                                                            <h2 className="title-font font-medium sm:text-4xl text-3xl">
                                                                {entry.videos}
                                                            </h2>
                                                            <p className="leading-relaxed">
                                                                Videos
                                                            </p>
                                                        </div>
                                                        <div className="p-4 sm:w-1/4 w-1/2">
                                                            <h2 className="title-font font-medium sm:text-4xl text-3xl">
                                                                {
                                                                    entry.returnVisits
                                                                }
                                                            </h2>
                                                            <p className="leading-relaxed">
                                                                Returns
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {entry.comments && (
                                                    <div>
                                                        <div className="font-bold mt-5 mb-2">
                                                            Notes:
                                                        </div>
                                                        <div className="whitespace-pre-wrap">
                                                            {entry.comments}
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="my-5 flex gap-5 justify-end">
                                                    <Button size="small" onClick={() => deleteEntry(entry.id, setDeletedID)} variant="red"><BiTrash /> Delete</Button>
                                                </div>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                            <div className="flex space-x-4">
                                {/* <a
                            href="#"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                            <p>Edit</p>
                        </a> */}
                        <Dialog open={openDelete} onOpenChange={setOpenDelete}>
                                <DialogTrigger className="dark:hover:text-gray-300 hover:text-gray-800">
                                <div
                                    className="text-red-500 hover:text-red-600 flex"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 mr-1 ml-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                    <p>Delete</p>
                                </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>
                                            Are you sure you want to delete this entry?
                                        </DialogTitle>
                                        <DialogDescription>
                                            <p>
                                                Date: {entryDate.toLocaleDateString()}
                                            </p>
                                            <p>
                                                Title: {entry.title || "No title"}
                                            </p>
                                            <div className="p-3">
                                                <div className="my-5 flex gap-5 justify-center">
                                                    <Button size="small" onClick={() => deleteEntry(entry.id, setDeletedID)} variant="red"><BiTrash />Confirm Delete</Button>
                                                    <Button size="small" onClick={() => setOpenDelete(false)}>Cancel</Button>
                                                </div>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                                
                            </div>
                        </td>
                    </tr>
                </tbody>
            );
        });
    };

    return (
        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 sm:rounded-lg bg-white dark:bg-gray-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex">
                                <span className="mr-2">DATE & TITLE</span>
                            </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex">
                                <span className="mr-2">HOURS</span>
                            </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider xl:table-cell hidden">
                            <div className="flex">
                                <span className="mr-2">PUBL.</span>
                            </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider xl:table-cell hidden">
                            <div className="flex">
                                <span className="mr-2">VIDEOS</span>
                            </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider xl:table-cell hidden">
                            <div className="flex">
                                <span className="mr-2">RETURNS</span>
                            </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex">
                                <span className="mr-2">DETAILS</span>
                            </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex">
                                <span className="mr-2">DELETE</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                {!loading && entries.length > 0 && renderBody()}
                {loading && (
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700 animate-pulse">
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap leading-5">
                                <p>...</p>
                                <p className="text-sm text-gray-400">...</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap leading-5">
                                <p>...</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap leading-5 xl:table-cell hidden">
                                <p>...</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap leading-5 xl:table-cell hidden">
                                <p>...</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap leading-5 xl:table-cell hidden">
                                <p>...</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <div className="flex text-gray-500 gap-2 cursor-pointer">
                                    <BiLinkExternal className="w-5 h-5" />
                                    <p>...</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-500 flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mr-1 ml-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                        <p>...</p>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>
            {!loading && entries.length === 0 && (
                <div className="flex w-full items-center justify-center h-24">
                    No entries
                </div>
            )}
        </div>
    );
};

export default Table;
