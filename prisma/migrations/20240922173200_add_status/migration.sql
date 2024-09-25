-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('DELIVERED', 'PREPARING', 'READY');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'READY';
