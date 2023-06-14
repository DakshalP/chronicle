import { dateFromYYYYMMDD, getDayRangeOfMonth, getDaysInMonth } from '@/lib/utils';
import prisma from '@/prisma/client'
import { getServerSession } from 'next-auth/next';
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

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

        const month = Number(req.nextUrl.searchParams.get("month"))
        const year = Number(req.nextUrl.searchParams.get("year"))

        if (!month || !year) {
            return NextResponse.json({ message: "Month or year not recieved" }, { status: 400 })
        }

        const data = await prisma.serviceEntry.findMany({
            where: {
                date: getDayRangeOfMonth(month, year),
                userId: parseInt(session.user.id)
            },
            orderBy: [
                {
                    date: 'asc'
                }
            ]
        })
        return NextResponse.json(data, {
            status: 200
        })
    }
    catch (e) {
        console.log(e)
        return NextResponse.json(({ message: "Server error", error: e }), { status: 500 })
    }
}


export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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
                user: { connect: { id: parseInt(session.user.id) } }
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

export async function DELETE(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const entryId = Number(req.nextUrl.searchParams.get("id"))

        //check if user made this entry
        const validation = await prisma.serviceEntry.findUnique({
            where: {
                id: entryId
            }
        })
        if(!validation || parseInt(session.user.id) !== validation.userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        //delete entry
        const data = await prisma.serviceEntry.delete({
            where: {
                id: entryId,
            }
        })

        return NextResponse.json(data, {
            status: 200
        })
    } catch(e) {
        console.log(e)
        return NextResponse.json({ message: "Server error", error: e }, { status: 500 })
    }
}
