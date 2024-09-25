/*
  Warnings:

  - Changed the type of `resturantId` on the `Role` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "resturantId",
ADD COLUMN     "resturantId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_resturantId_fkey" FOREIGN KEY ("resturantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
