/*
  Warnings:

  - You are about to drop the `Entry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Log` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_logId_fkey";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_userId_fkey";

-- DropTable
DROP TABLE "Entry";

-- DropTable
DROP TABLE "Log";

-- CreateTable
CREATE TABLE "ServiceLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ServiceLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceEntry" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "hours" DECIMAL(65,30) NOT NULL,
    "videos" INTEGER NOT NULL DEFAULT 0,
    "publications" INTEGER NOT NULL DEFAULT 0,
    "returnVisits" INTEGER NOT NULL DEFAULT 0,
    "title" VARCHAR(50),
    "comments" VARCHAR(500),
    "logId" INTEGER,

    CONSTRAINT "ServiceEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceLog_userId_key" ON "ServiceLog"("userId");

-- AddForeignKey
ALTER TABLE "ServiceLog" ADD CONSTRAINT "ServiceLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceEntry" ADD CONSTRAINT "ServiceEntry_logId_fkey" FOREIGN KEY ("logId") REFERENCES "ServiceLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
