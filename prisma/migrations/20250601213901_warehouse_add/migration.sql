/*
  Warnings:

  - You are about to drop the column `destination` on the `StockMovement` table. All the data in the column will be lost.
  - You are about to drop the column `origin` on the `StockMovement` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MovementStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELED');

-- AlterTable
ALTER TABLE "StockMovement" DROP COLUMN "destination",
DROP COLUMN "origin",
ADD COLUMN     "destinationWarehouseId" TEXT,
ADD COLUMN     "originWarehouseId" TEXT,
ADD COLUMN     "status" "MovementStatus" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "WareHouse" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WareHouse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_originWarehouseId_fkey" FOREIGN KEY ("originWarehouseId") REFERENCES "WareHouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_destinationWarehouseId_fkey" FOREIGN KEY ("destinationWarehouseId") REFERENCES "WareHouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
