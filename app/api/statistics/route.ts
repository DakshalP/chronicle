import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/prisma/client";

import { getDayRangeOfMonth, getDayRangeOfYear } from "@/lib/utils";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

        const month = Number(req.nextUrl.searchParams.get("month"))
        const year = Number(req.nextUrl.searchParams.get("year"))

        if (!month && !year) {
            return NextResponse.json({ message: "Month or year not recieved" }, { status: 400 })
        }
        if(!month) {
            //get stats for year
            const statistics = await prisma.serviceEntry.aggregate({
                _sum: {
                    hours: true,
                    publications: true,
                    videos: true,
                    returnVisits: true,
                },
                where: {
                    date: getDayRangeOfYear(year),
                    userId: parseInt(session.user.id),
                },
            });
    
            return NextResponse.json(statistics._sum, {
                status: 200
            })
        }

        //get stats for month
        const statistics = await prisma.serviceEntry.aggregate({
            _sum: {
                hours: true,
                publications: true,
                videos: true,
                returnVisits: true,
            },
            where: {
                date: getDayRangeOfMonth(month, year),
                userId: parseInt(session.user.id),
            },
        });

        return NextResponse.json(statistics._sum, {
            status: 200
        })
    }
    catch(e) { 
        return NextResponse.json({message: 'Server error', error: e}, { status: 500 })
    }
}