/*
  Warnings:

  - The values [ENTRADA,SAIDA,TRANSFERENCIA] on the enum `MovementType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `destinationId` on the `StockMovement` table. All the data in the column will be lost.
  - You are about to drop the column `originId` on the `StockMovement` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MovementType_new" AS ENUM ('IN', 'OUT', 'TRANSFER');
ALTER TABLE "StockMovement" ALTER COLUMN "type" TYPE "MovementType_new" USING ("type"::text::"MovementType_new");
ALTER TYPE "MovementType" RENAME TO "MovementType_old";
ALTER TYPE "MovementType_new" RENAME TO "MovementType";
DROP TYPE "MovementType_old";
COMMIT;

-- AlterTable
ALTER TABLE "StockMovement" DROP COLUMN "destinationId",
DROP COLUMN "originId",
ADD COLUMN     "destination" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "origin" TEXT;
