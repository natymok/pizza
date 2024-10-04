/*
  Warnings:

  - Added the required column `roleId` to the `Resturantuser` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Role_resturantId_key";

-- AlterTable
ALTER TABLE "Resturantuser" ADD COLUMN     "roleId" INTEGER NOT NULL;
