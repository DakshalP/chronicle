import { PrismaClient } from "@prisma/client";

// * Prevent Multiple Instances of Prisma Client *

declare global {
    namespace NodeJS {
        interface Global {}
    }
}

//add prisma to the NodeJS global type
interface CustomNodeJSGlobal extends NodeJS.Global {
    prisma: PrismaClient
}

//Prevent multiple instances of Prisma client in development
declare const global: CustomNodeJSGlobal

const prisma = global.prisma || new PrismaClient()

if(process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma