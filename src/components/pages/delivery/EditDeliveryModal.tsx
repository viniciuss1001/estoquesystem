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

interface EditDeliveryModalProps {
  deliveryId: string
}

export default function EditDeliveryModal({ deliveryId }: EditDeliveryModalProps) {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState<any[]>([])
  const [suppliers, setSuppliers] = useState<any[]>([])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: "",
      supplierId: "",
      quantity: 0,
      expectedAt: new Date(),
    },
  })

  useEffect(() => {
    if (open) {
      Promise.all([api.get("/product"), api.get("/supplier")])
        .then(([productsRes, suppliersRes]) => {
          setProducts(productsRes.data.products || productsRes.data)
          setSuppliers(suppliersRes.data.suppliers || suppliersRes.data)
        })
        .catch(() => toast.error("Erro ao carregar produtos ou fornecedores."));
    }
  }, [open])

  useEffect(() => {
    if (!open) return;

    api
      .get(`/delivery/${deliveryId}`)
      .then((response) => {
        const delivery = response.data;
        form.reset({
          productId: delivery.product.id,
          supplierId: delivery.supplier.id,
          quantity: delivery.quantity,
          expectedAt: new Date(delivery.expectedAt),
        });
      })
      .catch(() => {
        toast.error("Erro ao buscar entrega.");
        setOpen(false);
      });
  }, [open, deliveryId, form])


  const onSubmit = async (data: FormValues) => {
    try {
      await api.patch(`/delivery/${deliveryId}`, data)
      toast.success("Entrega atualizada com sucesso!")
      setOpen(false)

    } catch {
      toast.error("Erro ao atualizar entrega")
    }
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
            <FormField
              control={form.control}
              name="productId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Produto</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um produto" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {products.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.name}
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um fornecedor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {suppliers.map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                          {s.name}
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

            <Button type="submit" className="w-full">
              Atualizar entrega
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
