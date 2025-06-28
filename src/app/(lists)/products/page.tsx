"use client"
import CreateProductModal from "@/components/pages/product/create-product-modal"
import EditProductModal from "@/components/pages/product/product-edit-modal"
import ProductFilters from "@/components/pages/product/ProductFilters"
import ProductListActions from "@/components/pages/product/ProductListActions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { Product } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
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

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ['products', { categoryId, supplierId, warehouseId, usageStatus }],
    queryFn: async () => {
      const params = new URLSearchParams()

      if (categoryId) params.append("categoryId", categoryId)
      if (supplierId) params.append("supplierId", supplierId)
      if (warehouseId) params.append("warehouseId", warehouseId)
      if (usageStatus) params.append("usageStatus", usageStatus)

      const response = await api.get(`/product?${params.toString()}`)
      return response.data as Product[]
    },
  })


  const unitLabels: Record<string, string> = {
    UNIT: "Unidade",
    KILOGRAM: "kg",
    LITER: "L",
    SQUARE_METER: "m²",
  }


  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-6">Lista de Produtos</h2>
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
            <TableHead>Criado em</TableHead>
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
                <TableCell>{new Date(product.createdAt).toLocaleDateString()}</TableCell>
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