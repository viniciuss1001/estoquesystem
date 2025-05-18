"use client"
import EditProductModal from "@/components/pages/product/product-edit-modal"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Product {
  id: string
  name: string
  sku: string
  quantity: string
  price: number
  category?: string
  createdAt: string
  updatedAt: string
  supplier: {
    id: string
    name: string
  }
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get("/product")
      .then((response) => {
        setProducts(response.data ?? [])
      })
      .catch(() => {
        toast.error("Erro ao carregar os fornecedores.")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Lista de Produtos</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Fornecedor</TableHead>
            <TableHead>Criado em</TableHead>
            <TableHead>Ações</TableHead>
            <TableHead>Detalhes</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>


          {loading ? (
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
                <TableCell className="flex justify-center ">{product.quantity}</TableCell>
                <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                <TableCell>{product.category ?? "-"}</TableCell>
                <TableCell>{product.supplier?.name ?? "-"}</TableCell>
                <TableCell>{new Date(product.createdAt).toLocaleDateString()}</TableCell>
                <TableCell >
                  <EditProductModal 
                  productId={product.id}
                  />
                </TableCell>
                <TableCell>
                  <Link href={`/products/${product.id}`}>
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