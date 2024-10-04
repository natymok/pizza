/*
  Warnings:

  - You are about to drop the column `role` on the `Resturantuser` table. All the data in the column will be lost.
  - Added the required column `resturantId` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Role_name_key";

-- AlterTable
ALTER TABLE "Resturantuser" DROP COLUMN "role";

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "resturantId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_resturantId_fkey" FOREIGN KEY ("resturantId") REFERENCES "Resturantuser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
