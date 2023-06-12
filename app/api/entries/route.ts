import { dateFromYYYYMMDD, getDaysInMonth } from '@/lib/utils';
import prisma from '@/prisma/client'
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

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

export async function GET(req: NextRequest) {
    try {
        const month = Number(req.nextUrl.searchParams.get("month"))
        const year = Number(req.nextUrl.searchParams.get("year"))

        if(!month || !year) return NextResponse.json({ message: "Month or year not recieved"}, { status: 400 })

        const data = await prisma.serviceEntry.findMany({
            where: {
                date: {
                    gte: new Date(year, month - 1, 1), //first day
                    lte: new Date(year, month - 1, getDaysInMonth(month - 1, year)) //last day
                }
            }
        })
        return NextResponse.json(data, {
            status: 200
        })
    }
    catch(e) {
        console.log(e)
        return NextResponse.json(({ message: "Server error", error: e }), { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if(!session) return;

        const {
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
                user: { connect: { id: parseInt(session.user.id) }}
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