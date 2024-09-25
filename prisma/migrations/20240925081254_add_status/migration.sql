/*
  Warnings:

  - You are about to drop the column `resturantId` on the `Role` table. All the data in the column will be lost.
  - Added the required column `role` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_resturantId_fkey";

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "resturantId";

-- CreateTable
CREATE TABLE "ResturantUsers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "resturantId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "ResturantUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ResturantUsers_id_key" ON "ResturantUsers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ResturantUsers_email_key" ON "ResturantUsers"("email");

-- AddForeignKey
ALTER TABLE "ResturantUsers" ADD CONSTRAINT "ResturantUsers_resturantId_fkey" FOREIGN KEY ("resturantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
