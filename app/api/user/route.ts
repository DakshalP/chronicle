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

        if (user.code.toString() !== process.env.SIGNUP_CODE?.toString()) {
            return NextResponse.json({ message: "Unknown signup code"}, { status: 400 })
        }
        
        if(user.password.length < 6) {
            return NextResponse.json({ message: "Password length too short" }, { status: 400 })
        }

        const hashedPassword = await hash(user.password, 12)
        
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
            if(e.code === "P2002") return NextResponse.json(({ message: "This email is unavailable."}), { status: 400 })
        }
        return NextResponse.json(({message: "Server error", error: e}), { status: 500 })
    }
}