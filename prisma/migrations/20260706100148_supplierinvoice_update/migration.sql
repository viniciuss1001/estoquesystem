-- AlterTable
ALTER TABLE "SupplierInvoice" ADD COLUMN "digitableLine" TEXT;
ALTER TABLE "SupplierInvoice" ADD COLUMN "invoiceNumber" TEXT;
ALTER TABLE "SupplierInvoice" ADD COLUMN "paidAt" DATETIME;
ALTER TABLE "SupplierInvoice" ADD COLUMN "paymentProofUrl" TEXT;
