"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Pencil, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import api from "@/lib/axios"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  productId: z.string().min(1),
  originWarehouseId: z.string().min(1),
  destinationWarehouseId: z.string().min(1),
  quantity: z.coerce.number().min(1),
  notes: z.string().optional()
})

type FormData = z.infer<typeof formSchema>

interface Warehouse {
  id: string
  name: string
}

interface Product {
  id: string
  name: string
}

interface Props {
  movementId: string
}

const EditTransferModal = ({ movementId }: Props) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [warehouses, setWarehouses] = useState<Warehouse[]>([])
  const [products, setProducts] = useState<Product[]>([])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: "",
      originWarehouseId: "",
      destinationWarehouseId: "",
      quantity: 0,
      notes: ""
    }
  })

  useEffect(() => {
    if (!open) return

    setLoading(true)

    Promise.all([
      api.get(`/movements/${movementId}`),
      api.get("/warehouse"),
      api.get("/product")
    ])
      .then(([movementRes, warehousesRes, productsRes]) => {
        const m = movementRes.data.movement
        form.reset({
          productId: m.product?.id || "",
          originWarehouseId: m.originWareHouse?.id || "",
          destinationWarehouseId: m.destinationWarehouse?.id || "",
          quantity: m.quantity,
          notes: m.notes || ""
        })
        setWarehouses(warehousesRes.data)
        setProducts(productsRes.data)
      })
      .catch(() => {
        toast.error("Erro ao carregar dados da transferência.")
      })
      .finally(() => setLoading(false))
  }, [open, movementId, form])

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true)
      await api.patch(`/movements/${movementId}`, {
        ...data,
        type: "TRANSFER"
      })
      toast.success("Transferência atualizada com sucesso.")
      setOpen(false)
    } catch {
      toast.error("Erro ao atualizar transferência.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="cursor-pointer">
          <Pencil className="w-4 h-4 mr-1" /> Editar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Editar Transferência</DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              <FormField
                control={form.control}
                name="productId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Produto</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um produto" />
                        </SelectTrigger>
                        <SelectContent>
                          {products.map((p) => (
                            <SelectItem key={p.id} value={p.id}>
                              {p.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="originWarehouseId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Armazém de origem</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o armazém de origem" />
                        </SelectTrigger>
                        <SelectContent>
                          {warehouses.map((w) => (
                            <SelectItem key={w.id} value={w.id}>
                              {w.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="destinationWarehouseId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Armazém de destino</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o armazém de destino" />
                        </SelectTrigger>
                        <SelectContent>
                          {warehouses.map((w) => (
                            <SelectItem key={w.id} value={w.id}>
                              {w.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
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
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notas</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Salvar
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default EditTransferModal
