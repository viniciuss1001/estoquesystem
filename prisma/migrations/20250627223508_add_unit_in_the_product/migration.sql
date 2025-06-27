-- CreateEnum
CREATE TYPE "UnitType" AS ENUM ('UNIT', 'KILOGRAM', 'LITER', 'SQUARE_METER');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "unit" "UnitType" NOT NULL DEFAULT 'UNIT';
