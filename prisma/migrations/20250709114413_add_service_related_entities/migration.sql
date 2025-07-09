/*
  Warnings:

  - You are about to drop the column `attachmentUrl` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `cost` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `createdByUserId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `providerName` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceDate` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceType` on the `Service` table. All the data in the column will be lost.
  - Added the required column `locationId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduledAt` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_createdByUserId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_invoiceId_fkey";

-- DropIndex
DROP INDEX "Service_serviceDate_idx";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "attachmentUrl",
DROP COLUMN "cost",
DROP COLUMN "createdByUserId",
DROP COLUMN "email",
DROP COLUMN "invoiceId",
DROP COLUMN "location",
DROP COLUMN "phone",
DROP COLUMN "providerName",
DROP COLUMN "serviceDate",
DROP COLUMN "serviceType",
ADD COLUMN     "locationId" TEXT NOT NULL,
ADD COLUMN     "providerId" TEXT NOT NULL,
ADD COLUMN     "scheduledAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "supplierInvoiceId" TEXT,
ADD COLUMN     "typeId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ServiceProvider" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "cnpj" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceProvider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceLocation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "ServiceProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ServiceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "ServiceLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_supplierInvoiceId_fkey" FOREIGN KEY ("supplierInvoiceId") REFERENCES "SupplierInvoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
