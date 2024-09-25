/*
  Warnings:

  - The `status` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `admin_name` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resturant_name` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'ready';

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "admin_name" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "resturant_name" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'admin';

-- DropEnum
DROP TYPE "OrderStatus";
