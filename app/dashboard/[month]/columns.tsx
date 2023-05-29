
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RiDeleteBin5Fill } from "react-icons/ri"

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
        header: 'Hours'
    },
    {
        accessorKey: 'videos',
        header: 'Videos'
    },
    {
        accessorKey: 'publications',
        header: 'Publications'
    },
    {
        accessorKey: 'returnVisits',
        header: 'Return Visits'
    },
    {
        accessorKey: 'comments',
        header: 'Comments'
    },
    {
        accessorKey: 'delete',
        header: 'Delete',
        cell: ({row}) => (
            <RiDeleteBin5Fill className="w-6 h-6 hover:text-red-600 cursor-pointer" />
        )
    }
]