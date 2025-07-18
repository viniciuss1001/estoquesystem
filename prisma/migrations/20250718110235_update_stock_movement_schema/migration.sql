/*
  Warnings:

  - Made the column `companyId` on table `StockMovement` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "StockMovement" DROP CONSTRAINT "StockMovement_companyId_fkey";

-- AlterTable
ALTER TABLE "StockMovement" ALTER COLUMN "companyId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
