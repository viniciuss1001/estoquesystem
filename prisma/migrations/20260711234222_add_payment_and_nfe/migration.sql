/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceNumber` on the `SupplierInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paidAt` on the `SupplierInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paymentProofUrl` on the `SupplierInvoice` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" TEXT NOT NULL,
    "series" TEXT,
    "accessKey" TEXT,
    "issueCnpj" TEXT,
    "issueCorporateName" TEXT,
    "freight" DECIMAL,
    "discount" DECIMAL,
    "taxes" DECIMAL,
    "issueDate" DATETIME NOT NULL,
    "entryDate" DATETIME,
    "totalAmount" DECIMAL NOT NULL,
    "xmlUrl" TEXT,
    "pdfUrl" TEXT,
    "observation" TEXT,
    "issuerType" TEXT NOT NULL,
    "supplierId" TEXT,
    "serviceProviderId" TEXT,
    "supplierName" TEXT,
    "serviceProviderName" TEXT,
    "companyId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Invoice_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Invoice_serviceProviderId_fkey" FOREIGN KEY ("serviceProviderId") REFERENCES "ServiceProvider" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Invoice_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InvoiceItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceId" TEXT NOT NULL,
    "productId" TEXT,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "productSku" TEXT,
    "productName" TEXT NOT NULL,
    "unitPrice" DECIMAL NOT NULL,
    "totalPrice" DECIMAL NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'UNIT',
    CONSTRAINT "InvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InvoiceItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paymentDate" DATETIME NOT NULL,
    "confirmedAt" DATETIME,
    "amount" DECIMAL NOT NULL,
    "method" TEXT NOT NULL,
    "references" TEXT,
    "status" TEXT NOT NULL DEFAULT 'COMPLETED',
    "paymentType" TEXT NOT NULL,
    "proofUrl" TEXT,
    "transactionNumber" TEXT,
    "notes" TEXT,
    "supplierInvoiceId" TEXT,
    "serviceId" TEXT,
    "companyId" TEXT NOT NULL,
    "createdByUserId" TEXT NOT NULL,
    "paidByUserId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Payment_supplierInvoiceId_fkey" FOREIGN KEY ("supplierInvoiceId") REFERENCES "SupplierInvoice" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Payment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Payment_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Payment_paidByUserId_fkey" FOREIGN KEY ("paidByUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Payment_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PaymentAttachment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paymentId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PaymentAttachment_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Delivery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "expectedAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "warehouseId" TEXT NOT NULL,
    "supplierInvoiceId" TEXT,
    "invoiceId" TEXT,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "Delivery_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Delivery_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Delivery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Delivery_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Delivery_supplierInvoiceId_fkey" FOREIGN KEY ("supplierInvoiceId") REFERENCES "SupplierInvoice" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Delivery_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Delivery" ("companyId", "createdAt", "expectedAt", "id", "productId", "quantity", "status", "supplierId", "supplierInvoiceId", "updatedAt", "warehouseId") SELECT "companyId", "createdAt", "expectedAt", "id", "productId", "quantity", "status", "supplierId", "supplierInvoiceId", "updatedAt", "warehouseId" FROM "Delivery";
DROP TABLE "Delivery";
ALTER TABLE "new_Delivery" RENAME TO "Delivery";
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceProviderId" TEXT NOT NULL,
    "serviceTypeId" TEXT NOT NULL,
    "serviceLocationId" TEXT NOT NULL,
    "serviceDate" DATETIME NOT NULL,
    "cost" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "description" TEXT,
    "attachmentUrl" TEXT,
    "supplierInvoiceId" TEXT,
    "createdByUserId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "Service_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_supplierInvoiceId_fkey" FOREIGN KEY ("supplierInvoiceId") REFERENCES "SupplierInvoice" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Service_serviceLocationId_fkey" FOREIGN KEY ("serviceLocationId") REFERENCES "ServiceLocation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_serviceProviderId_fkey" FOREIGN KEY ("serviceProviderId") REFERENCES "ServiceProvider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("attachmentUrl", "companyId", "cost", "createdAt", "createdByUserId", "description", "id", "serviceDate", "serviceLocationId", "serviceProviderId", "serviceTypeId", "status", "updatedAt") SELECT "attachmentUrl", "companyId", "cost", "createdAt", "createdByUserId", "description", "id", "serviceDate", "serviceLocationId", "serviceProviderId", "serviceTypeId", "status", "updatedAt" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE TABLE "new_SupplierInvoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "fileUrl" TEXT,
    "digitableLine" TEXT,
    "invoiceId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "supplierId" TEXT,
    "serviceProviderId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "SupplierInvoice_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SupplierInvoice_serviceProviderId_fkey" FOREIGN KEY ("serviceProviderId") REFERENCES "ServiceProvider" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SupplierInvoice_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SupplierInvoice_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SupplierInvoice" ("amount", "companyId", "createdAt", "description", "digitableLine", "dueDate", "fileUrl", "id", "serviceProviderId", "status", "supplierId", "title", "updatedAt") SELECT "amount", "companyId", "createdAt", "description", "digitableLine", "dueDate", "fileUrl", "id", "serviceProviderId", "status", "supplierId", "title", "updatedAt" FROM "SupplierInvoice";
DROP TABLE "SupplierInvoice";
ALTER TABLE "new_SupplierInvoice" RENAME TO "SupplierInvoice";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_accessKey_key" ON "Invoice"("accessKey");
