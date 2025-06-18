"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Pencil } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
  productId: z.string().min(1, "Produto obrigatório"),
  supplierId: z.string().min(1, "Fornecedor obrigatório"),
  quantity: z.coerce.number().int().positive("Quantidade inválida"),
  expectedAt: z.date({ required_error: "Data obrigatória" }),
  status: z.enum(["PENDING", "COMPLETED", "CANCELED", "LATE"])
})

type FormValues = z.infer<typeof formSchema>

interface Product {
  id: string
  name: string
  sku: string
  quantity: string
  price: number
  category?: {
    id: string
    name: string
    createdAt: string
    updatedAt: string
  }
  createdAt: string
  updatedAt: string
  supplier: {
    id: string
    name: string
  }
}
interface EditDeliveryModalProps {
  deliveryId: string
}

export default function EditDeliveryModal({ deliveryId }: EditDeliveryModalProps) {
  const [open, setOpen] = useState(false)

  const queryClient = useQueryClient()


  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: "",
      supplierId: "",
      quantity: 0,
      expectedAt: new Date(),
    },
  })

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get("/product")
      return response.data
    }
  })

  const watchProductId = form.watch("productId")
  const selectedProduct = products.find((p: Product) => p.id === watchProductId)

  useEffect(() => {
    if (selectedProduct?.supplier?.id) {
      form.setValue("supplierId", selectedProduct.supplier.id)
    } else {
      form.setValue("supplierId", "")
    }
  }, [watchProductId])


  const { data: delivery } = useQuery({
    queryKey: ["delivery", deliveryId],
    queryFn: async () => {
      const response = await api.get(`/delivery/${deliveryId}`)
      const data = response.data

      form.reset({
        productId: data.product.id,
        supplierId: data.supplier.id,
        quantity: data.quantity,
        expectedAt: new Date(data.expectedAt),
        status: data.status,
      })

      return data
    },
    enabled: open,
  })

  const updateDelivery = useMutation({
    mutationFn: async (data: FormValues) => {
      await api.patch(`/delivery/${deliveryId}`, data)
    },
    onSuccess: () => {
      toast.success("Entrega atualizada com sucesso!")
      setOpen(false)
      queryClient.invalidateQueries({ queryKey: ['delivery'] })
    },
    onError: () => {
      toast.error("Erro ao atualizar entrega.")
    }
  })

  const onSubmit = async (data: FormValues) => {
    updateDelivery.mutate(data)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon"
          className="cursor-pointer"
        >
          <Pencil className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Editar Entrega

        </DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <div className="w-full p-2 rounded-sm flex items-center justify-between">
              <FormField
                control={form.control}
                name="productId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Produto</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o Produto" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {products.map((product: Product) => (
                          <SelectItem key={product.id} value={product.id}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supplierId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fornecedor</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={true}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Fornecedor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selectedProduct?.supplier && (
                          <SelectItem value={selectedProduct.supplier.id}>
                            {selectedProduct.supplier.name}
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="expectedAt"
              render={({ field }) => {
                const formattedDate = field.value ? field.value.toISOString().substring(0, 10) : "";

                return (
                  <FormItem className="mt-4">
                    <FormLabel>Prazo de entrega</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full flex gap-4"
                        type="date"
                        value={formattedDate}
                        onChange={(e) => {
                          const date = e.target.value ? new Date(e.target.value) : null;
                          field.onChange(date);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="PENDING">Pendente</SelectItem>
                      <SelectItem value="COMPLETED">Concluída</SelectItem>
                      <SelectItem value="LATE">Em atraso</SelectItem>
                      <SelectItem value="CANCELED">Cancelada</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full cursor-pointer">
              Atualizar entrega
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
