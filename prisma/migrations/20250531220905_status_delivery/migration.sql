-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELED', 'LATE');

-- AlterTable
ALTER TABLE "Delivery" ADD COLUMN     "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING';
