/*
  Warnings:

  - Changed the type of `deliveryTime` on the `Supplier` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "deliveryTime",
ADD COLUMN     "deliveryTime" TIMESTAMP(3) NOT NULL;
