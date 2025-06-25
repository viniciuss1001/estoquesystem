/*
  Warnings:

  - A unique constraint covering the columns `[warehouseId,productId]` on the table `WarehouseProduct` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `warehouseId` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UsageStatus" AS ENUM ('IN_STOCK', 'IN_USE', 'CONSUMED');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('PENDING', 'PAID', 'OVERDUE', 'CANCELED');

-- AlterTable
ALTER TABLE "Delivery" ADD COLUMN     "invoiceId" TEXT,
ADD COLUMN     "warehouseId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "expirationDate" TIMESTAMP(3),
ADD COLUMN     "minimumStock" INTEGER DEFAULT 0,
ADD COLUMN     "usageStatus" "UsageStatus" NOT NULL DEFAULT 'IN_STOCK';

-- AlterTable
ALTER TABLE "StockMovement" ADD COLUMN     "quantityAfter" INTEGER,
ADD COLUMN     "quantityBefore" INTEGER;

-- CreateTable
CREATE TABLE "SupplierInvoice" (
    "id" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "InvoiceStatus" NOT NULL DEFAULT 'PENDING',
    "fileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupplierInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WarehouseProduct_warehouseId_productId_key" ON "WarehouseProduct"("warehouseId", "productId");

-- AddForeignKey
ALTER TABLE "SupplierInvoice" ADD CONSTRAINT "SupplierInvoice_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "SupplierInvoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
