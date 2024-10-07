/*
  Warnings:

  - A unique constraint covering the columns `[resturantId,name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Role_resturantId_name_key" ON "Role"("resturantId", "name");
