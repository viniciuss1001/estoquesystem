"use client"
import CreateProductModal from "@/components/pages/product/create-product-modal"
import EditProductModal from "@/components/pages/product/product-edit-modal"
import ProductFilters from "@/components/pages/product/ProductFilters"
import ProductListActions from "@/components/pages/product/ProductListActions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useFilteredProducts } from "@/lib/queries"
import { Boxes, PackageCheck, PackageX } from "lucide-react"
import { useSession } from 'next-auth/react'
import Link from "next/link"
import { useSearchParams } from "next/navigation"


const ProductsPage = () => {
  const searchParams = useSearchParams()

  const { data: session } = useSession()

  const categoryId = searchParams.get("categoryId") || undefined
  const supplierId = searchParams.get("supplierId") || undefined
  const warehouseId = searchParams.get("warehouseId") || undefined
  const usageStatus = searchParams.get("usageStatus") || undefined

  const { data: products = [], isLoading, isError } = useFilteredProducts({
    categoryId, supplierId, warehouseId, usageStatus
  })

  const usageStatusMap = {
    IN_STOCK: {
      label: "Em estoque",
      color: "default",
      icon: <Boxes className="w-4 h-4 text-green-800" />,
    },
    IN_USE: {
      label: "Em uso",
      color: "blue",
      icon: <PackageCheck className="w-4 h-4 text-blue-500" />,
    },
    CONSUMED: {
      label: "Consumido",
      color: "red",
      icon: <PackageX className="w-4 h-4 text-orange-900" />,
    },
  }


  const unitLabels: Record<string, string> = {
    UNIT: "Unidade",
    KILOGRAM: "kg",
    LITER: "L",
    SQUARE_METER: "m²",
  }


  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">

          <h2 className="text-2xl font-bold mb-2">Lista de Produtos</h2>

          {products.length > 0 && (
            <p className="text-sm text-muted-foreground mb-4 ">
              Total de {products.length} produto (s) sendo exibidos.
            </p>
          )}
        </div>

        <div className="flex gap-3 items-center justify-end">
          <ProductFilters />

          <ProductListActions products={products}
            userName={session?.user.name || "usuário"}
            userNameOffice={session?.user.office || "Cargo desconhecido"}
          />
          <CreateProductModal />

        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Unidade</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Fornecedor</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Ações</TableHead>
            <TableHead>Detalhes</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>


          {isLoading ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                Carregando...
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id} className="">
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell >{product.quantity}</TableCell>
                <TableCell>{unitLabels[product?.unit] ?? product.unit}</TableCell>
                <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                <TableCell>{product.category?.name ?? "-"}</TableCell>

                <TableCell>{product.supplier?.name ?? "Não informado"}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {usageStatusMap[product.usageStatus as keyof typeof usageStatusMap]?.icon}
                    <span>{usageStatusMap[product.usageStatus as keyof typeof usageStatusMap]?.label ?? product.usageStatus}</span>
                  </div>
                </TableCell>
                <TableCell >
                  <EditProductModal
                    productId={product.id}
                  />
                </TableCell>
                <TableCell>
                  <Link href={`/products/${product.id}`} className="text-blue-500 underline">
                    Detalhes
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

    </div>
  )
}

export default ProductsPage