/*
  Warnings:

  - You are about to drop the `ResturantUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ResturantUsers" DROP CONSTRAINT "ResturantUsers_resturantId_fkey";

-- DropTable
DROP TABLE "ResturantUsers";

-- CreateTable
CREATE TABLE "Resturantuser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "resturantId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Resturantuser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resturantuser_id_key" ON "Resturantuser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Resturantuser_email_key" ON "Resturantuser"("email");

-- AddForeignKey
ALTER TABLE "Resturantuser" ADD CONSTRAINT "Resturantuser_resturantId_fkey" FOREIGN KEY ("resturantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
