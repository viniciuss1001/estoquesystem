-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "cnpj" TEXT,
ALTER COLUMN "description" DROP NOT NULL;
