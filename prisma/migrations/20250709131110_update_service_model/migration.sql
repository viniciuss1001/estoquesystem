/*
  Warnings:

  - You are about to drop the column `locationId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `scheduledAt` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `supplierInvoiceId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Service` table. All the data in the column will be lost.
  - Added the required column `cost` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdByUserId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceDate` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceLocationId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceProviderId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceTypeId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Service` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_providerId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_supplierInvoiceId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_userId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "locationId",
DROP COLUMN "providerId",
DROP COLUMN "scheduledAt",
DROP COLUMN "supplierInvoiceId",
DROP COLUMN "typeId",
DROP COLUMN "userId",
ADD COLUMN     "attachmentUrl" TEXT,
ADD COLUMN     "cost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "createdByUserId" TEXT NOT NULL,
ADD COLUMN     "invoiceId" TEXT,
ADD COLUMN     "serviceDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "serviceLocationId" TEXT NOT NULL,
ADD COLUMN     "serviceProviderId" TEXT NOT NULL,
ADD COLUMN     "serviceTypeId" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceProviderId_fkey" FOREIGN KEY ("serviceProviderId") REFERENCES "ServiceProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceLocationId_fkey" FOREIGN KEY ("serviceLocationId") REFERENCES "ServiceLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "SupplierInvoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
