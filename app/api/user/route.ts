import prisma from '@/prisma/client'
import { Prisma } from "@prisma/client"
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

type userProps = {
    email: string,
    password: string,
    code: string, //signup code
}

export async function POST(req: Request) {
    try {
        const user: userProps = await req.json()

        const hashedPassword = await hash(user.password, 12)
        if (user.code.toString() !== process.env.SIGNUP_CODE?.toString()) return new NextResponse(JSON.stringify({ message: "Unknown signup code"}), { status: 401 })

        const data = await prisma.user.create({
            data: { 
                email: user.email,
                password: hashedPassword,
            }
        })
        return NextResponse.json(data, {
            status: 200
        })
    }
    catch (e) {
        if(e instanceof Prisma.PrismaClientKnownRequestError) {
            if(e.code === "P2002") return new NextResponse(JSON.stringify({ message: "This email is unavailable."}), { status: 500 })
        }
        return new NextResponse(JSON.stringify({message: "Server error", error: e}), { status: 500 })
    }
}