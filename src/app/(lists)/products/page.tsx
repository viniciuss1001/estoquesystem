"use client"
import CreateProductModal from "@/components/pages/product/create-product-modal"
import EditProductModal from "@/components/pages/product/product-edit-modal"
import ProductListActions from "@/components/pages/product/ProductListActions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { Product } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import { ChevronRight } from "lucide-react"
import { useSession } from 'next-auth/react'
import Link from "next/link"


const ProductsPage = () => {

  const { data: session } = useSession()

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await api.get('/product')
      return response.data as Product[]
    },
  })

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-6">Lista de Produtos</h2>
        <div className="flex gap-3 items-center justify-end">
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
            <TableHead>Quantidade Total</TableHead>
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