/*
  Warnings:

  - You are about to drop the column `role` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `Resturantuser` table. All the data in the column will be lost.
  - Added the required column `role` to the `Resturantuser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "role";

-- AlterTable
ALTER TABLE "Resturantuser" DROP COLUMN "roleId",
ADD COLUMN     "role" TEXT NOT NULL;
