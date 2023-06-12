import { dateFromYYYYMMDD } from '@/lib/utils';
import prisma from '@/prisma/client'
import { NextResponse } from 'next/server';

type entryProps = {
    userId: string,
    title: string,
    dateStr: string,
    hours: number,
    publications: number,
    videos: number,
    returnVisits: number,
    comments: string,
}

export async function POST(req: Request) {
    try {
        const { 
            userId, 
            title, 
            dateStr, 
            hours, 
            publications, 
            videos, 
            returnVisits, 
            comments 
        }: entryProps = await req.json()

        const date = dateFromYYYYMMDD(dateStr)

        const entry = await prisma.serviceEntry.create({
            data: {
                title,
                date,
                hours,
                publications,
                videos,
                returnVisits,
                comments,
                user: { connect: { id: parseInt(userId) }}
            }
        })

        return NextResponse.json(entry, {
            status: 200
        })
    }
    catch (e) {
        console.log(e)
        return NextResponse.json(({ message: "Server error", error: e }), { status: 500 })
    }
}