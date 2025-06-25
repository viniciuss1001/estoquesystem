/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `Delivery` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_invoiceId_fkey";

-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "invoiceId",
ADD COLUMN     "supplierInvoiceId" TEXT;

-- AlterTable
ALTER TABLE "Supplier" ALTER COLUMN "deliveryTime" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_supplierInvoiceId_fkey" FOREIGN KEY ("supplierInvoiceId") REFERENCES "SupplierInvoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
