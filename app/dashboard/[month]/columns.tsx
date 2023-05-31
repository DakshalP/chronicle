
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { BiTrashAlt } from "react-icons/bi"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/Dialog"

export type Entry = {
   id: number,
   date: Date,
   hours: number,
   videos: number,
   publications: number,
   returnVisits: number,
   title?: string,
   comments?: string,
}

const displayNum = (row: any, column: string) => (
    <span className='text-lg font-semibold'>{row.getValue(column)}</span>
)

export const columns: ColumnDef<Entry>[] = [
    {
        accessorKey: 'date',
        header: 'Date',
        cell: ({ row }) => {
            const date: Date = row.getValue("date")
            const day = `${date.getMonth()+1}/${date.getDate()}`
            return <div className="text-right">{day}</div>
        }
    },
    {
        accessorKey: 'title',
        header: 'Title'
    },
    {
        accessorKey: 'hours',
        header: 'H.',
        cell: row => displayNum(row, 'hours')
    },
    {
        accessorKey: 'videos',
        header: 'V.',
        cell: row => displayNum(row, 'videos')
    },
    {
        accessorKey: 'publications',
        header: 'P.',
        cell: row => displayNum(row, 'publications')
    },
    {
        accessorKey: 'returnVisits',
        header: 'R.',
        cell: row => displayNum(row, 'returnVisits')
    },
    {
        accessorKey: 'comments',
        header: 'Notes',
        cell: ({row}) => {
            const notes: string = row.getValue('comments')
            return (
                <Dialog>
                <DialogTrigger className="dark:hover:text-gray-300 hover:text-gray-800">
                    <span className="2xl:hidden">{notes.slice(0,15) + "..."}</span>
                    <span className="2xl:inline-block hidden">{notes.slice(0,70) + "..."}</span>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>{row.getValue('title')}</DialogTitle>
                    <DialogDescription className="whitespace-pre-wrap">
                        {row.getValue('comments')}
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
                </Dialog>
            )
        }
    },
    {
        accessorKey: 'delete',
        header: '',
        cell: ({row}) => (
            <BiTrashAlt className="w-5 h-5 hover:text-cbrown cursor-pointer" />
        )
    }
]