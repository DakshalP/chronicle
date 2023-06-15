import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import { Entry } from "@/components/entries/entry_types";
import { dateFromYYYYMMDD } from "@/lib/utils";


export async function GET(req: NextRequest, { params }: { params: { id: string}}) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const entryId = Number(params.id)

        //check if user made this entry
        const validation = await prisma.serviceEntry.findUnique({
            where: {
                id: entryId
            }
        })
        if(!validation || parseInt(session.user.id) !== validation.userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const data = await prisma.serviceEntry.findUnique({
            where: {
                id: entryId
            },
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


export async function DELETE(req: NextRequest, { params }: { params: { id: string}}) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const entryId = Number(params.id)

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


export async function PUT(req: NextRequest, { params }: { params: { id: string}}) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const entryId = Number(params.id)

        //check if user made this entry
        const validation = await prisma.serviceEntry.findUnique({
            where: {
                id: entryId
            }
        })
        if(!validation || parseInt(session.user.id) !== validation.userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const {
            title,
            dateStr,
            hours,
            publications,
            videos,
            returnVisits,
            comments
        }: Entry = await req.json()

        const data = await prisma.serviceEntry.update({
            data: {
                title,
                date: dateFromYYYYMMDD(dateStr),
                hours,
                publications,
                videos,
                returnVisits,
                comments
            },
            where: {
                id: entryId
            },
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