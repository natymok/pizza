/*
  Warnings:

  - You are about to drop the column `ingredients` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the `Topping` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `resturantId` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "ingredients",
ADD COLUMN     "resturantId" INTEGER NOT NULL,
ADD COLUMN     "toping" TEXT[];

-- DropTable
DROP TABLE "Topping";

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "resturantId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "toping" TEXT[],
    "quantity" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_resturantId_fkey" FOREIGN KEY ("resturantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_resturantId_fkey" FOREIGN KEY ("resturantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
