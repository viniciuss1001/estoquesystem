"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
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
import { useDelivery, useProducts, useSupplierInvoices, useWarehouses } from "@/lib/queries"
import { Product } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Pencil } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
  productId: z.string().min(1, "Produto obrigatório"),
  supplierId: z.string().min(1, "Fornecedor obrigatório"),
  warehouseId: z.string().min(1, "Armazém obrigatório"),
  supplierInvoiceId: z.string().optional(),
  quantity: z.coerce.number().int().positive("Quantidade inválida"),
  expectedAt: z.date({ required_error: "Data obrigatória" }),
  status: z.enum(["PENDING", "COMPLETED", "CANCELED", "LATE"]),
})

type FormValues = z.infer<typeof formSchema>

interface EditDeliveryModalProps {
  deliveryId: string
}

export default function EditDeliveryModal({ deliveryId }: EditDeliveryModalProps) {
  const [open, setOpen] = useState(false)
  const [formLoaded, setFormLoaded] = useState(false)

  const queryClient = useQueryClient()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: "",
      supplierId: "",
      warehouseId: "",
      supplierInvoiceId: "",
      quantity: 0,
      expectedAt: new Date(),
      status: "PENDING"
    },
  })

  const { data: delivery } = useDelivery(deliveryId)

  const { data: products = [] } = useProducts()

  const { data: warehouses = [] } =useWarehouses()

  const { data: supplierInvoices = [] } = useSupplierInvoices()

  const watchProductId = form.watch("productId")
  const selectedProduct = products.find((p: Product) => p.id === watchProductId)

  useEffect(() => {
    if (selectedProduct?.supplier?.id) {
      form.setValue("supplierId", selectedProduct.supplier.id)
    } else {
      form.setValue("supplierId", "")
    }
  }, [watchProductId])

  useEffect(() => {
    if (open && delivery && !formLoaded) {
      form.reset({
        productId: delivery.product.id,
        supplierId: delivery.supplier.id,
        warehouseId: delivery.warehouse?.id || "",
        supplierInvoiceId: delivery.supplierInvoice?.id || "",
        quantity: delivery.quantity,
        expectedAt: delivery.expectedAt ? new Date(delivery.expectedAt) : new Date(),
        status: delivery.status,
      })
      setFormLoaded(true)
    }
  }, [open, delivery, form, formLoaded])

  // Reset state of modal
  useEffect(() => {
    if (!open) {
      setFormLoaded(false)
    }
  }, [open])

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
              {/* product */}
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

              {/* supplier */}
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

            {/* warehouse */}
            <FormField
              control={form.control}
              name="warehouseId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Armazém</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o armazém" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {warehouses.map((w) => (
                        <SelectItem key={w.id} value={w.id}>
                          {w.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* invoice */}
            <FormField
              control={form.control}
              name="supplierInvoiceId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Boleto (opcional)</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um boleto" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {supplierInvoices.map((invoice) => (
                        <SelectItem key={invoice.id} value={invoice.id}>
                          {invoice.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* quantity */}
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

            {/* expectedAt */}
            <FormField
              control={form.control}
              name="expectedAt"
              render={({ field }) => {
                const isValidDate = field.value instanceof Date && !isNaN(field.value.getTime());
                const formattedDate = isValidDate
                  ? field.value.toISOString().substring(0, 10)
                  : "";

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


            {/* status */}
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

            <DialogFooter className="flex gap-4 items-center justify-end mt-4 p-2">
              <DialogClose className="cursor-pointer p-2 hover:bg-zinc-500/20 transition rounded-sm">
                Cancelar
              </DialogClose>
              <Button type="submit" className="w-2/3 cursor-pointer">
                Atualizar entrega
              </Button>

            </DialogFooter>

          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
