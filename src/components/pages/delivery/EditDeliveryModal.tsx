"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { CalendarIcon, Pencil } from "lucide-react"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import api from "@/lib/axios"
import { toast } from "sonner"

const formSchema = z.object({
  productId: z.string().min(1, "Produto obrigatório"),
  supplierId: z.string().min(1, "Fornecedor obrigatório"),
  quantity: z.coerce.number().int().positive("Quantidade inválida"),
  expectedAt: z.date({ required_error: "Data obrigatória" }),
})

type FormValues = z.infer<typeof formSchema>

interface EditDeliveryModalProps {
  delivery: {
    id: string
    productId: string
    supplierId: string
    quantity: number
    expectedAt: Date
  }
}

export default function EditDeliveryModal({ delivery }: EditDeliveryModalProps) {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState<any[]>([])
  const [suppliers, setSuppliers] = useState<any[]>([])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: delivery.productId,
      supplierId: delivery.supplierId,
      quantity: delivery.quantity,
      expectedAt: new Date(delivery.expectedAt),
    },
  })

  useEffect(() => {
    if (open) {
      Promise.all([api.get("/product"), api.get("/supplier")])
        .then(([productsRes, suppliersRes]) => {
          setProducts(productsRes.data)
          setSuppliers(suppliersRes.data)
        })
        .catch(() => toast.error("Erro ao carregar produtos ou fornecedores."))
    }
  }, [open])

  const onSubmit = async (data: FormValues) => {
    try {
      await api.patch(`/delivery/${delivery.id}`, data)
      toast.success("Entrega atualizada com sucesso!")
      setOpen(false)
    } catch {
      toast.error("Erro ao atualizar entrega")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Pencil className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
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
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data prevista</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "dd/MM/yyyy") : "Selecione uma data"}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
