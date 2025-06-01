-- CreateTable
CREATE TABLE "WarehouseProduct" (
    "warehouseId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "WarehouseProduct_pkey" PRIMARY KEY ("warehouseId","productId")
);

-- AddForeignKey
ALTER TABLE "WarehouseProduct" ADD CONSTRAINT "WarehouseProduct_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarehouseProduct" ADD CONSTRAINT "WarehouseProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
