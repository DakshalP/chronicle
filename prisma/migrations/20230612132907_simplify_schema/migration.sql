/*
  Warnings:

  - You are about to drop the column `logId` on the `ServiceEntry` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ServiceLog` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `ServiceEntry` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `ServiceEntry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServiceEntry" DROP CONSTRAINT "ServiceEntry_logId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceLog" DROP CONSTRAINT "ServiceLog_userId_fkey";

-- AlterTable
ALTER TABLE "ServiceEntry" DROP COLUMN "logId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";

-- DropTable
DROP TABLE "ServiceLog";

-- CreateIndex
CREATE UNIQUE INDEX "ServiceEntry_userId_key" ON "ServiceEntry"("userId");

-- AddForeignKey
ALTER TABLE "ServiceEntry" ADD CONSTRAINT "ServiceEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
