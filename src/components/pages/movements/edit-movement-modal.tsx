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
import { Pencil, Loader2, ApertureIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import api from "@/lib/axios"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import AlertDialogDelete from "@/components/shared/alert-dialog-delete-product"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const formSchema = z.object({
  productId: z.string().min(1),
  originWarehouseId: z.string().min(1),
  destinationWarehouseId: z.string().min(1),
  quantity: z.coerce.number().min(1),
  notes: z.string().optional(),
  status: z.enum(["PENDING", "COMPLETED", "CANCELED"]),
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
  const router = useRouter()
  const queryClient = useQueryClient()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: '',
      originWarehouseId: '',
      destinationWarehouseId: '',
      quantity: 0,
      notes: '',
      status: 'PENDING',
    },
  })

  const { control } = form

  const { data: movementData, isLoading: isLoadingMovement } = useQuery({
    queryKey: ['movement', movementId],
    queryFn: async () => {
      const response = await api.get(`/movements/${movementId}`)
      return response.data.movement
    },
    enabled: open
  })

  const { data: warehouses = [], isLoading: isLoadingWarehouses } = useQuery({
    queryKey: ['warehouses'],
    queryFn: async () => {
      const response = await api.get('/warehouse')
      return response.data as Warehouse[]
    },
    enabled: open
  })

  const { data: products = [], isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await api.get('/product')
      return response.data as Product[]
    },
    enabled: open
  })

  useEffect(() => {
    if (movementData) {
      form.reset({
        productId: movementData.product?.id || '',
        originWarehouseId: movementData.originWareHouse?.id || '',
        destinationWarehouseId: movementData.destinationWarehouse?.id || '',
        quantity: movementData.quantity,
        notes: movementData.notes || '',
        status: movementData.status || 'PENDING',
      })
    }
  }, [movementData, form])

  const updateMutation = useMutation({
    mutationFn: async (data: FormData) => {
      await api.patch(`/movements/${movementId}`, { ...data, type: 'TRANSFER' })
    },
    onSuccess: () => {
      toast.success('Transferência atualizada com sucesso.')
      setOpen(false)
      queryClient.invalidateQueries({ queryKey: ['movements'] })
    },
    onError: () => {
      toast.error('Erro ao atualizar transferência.')
    }
  })

  const deleteMutation = useMutation({
    mutationFn: async () => {
      await api.delete(`/movements/${movementId}`)
    },
    onSuccess: () => {
      toast.success('Produto deletado com sucesso.')
      router.push('/movements')
      router.refresh()
    },
    onError: (error) => {
      toast.error('Erro ao deletar movimentação.')
      console.log(error)
    }
  })

  const onSubmit = (data: FormData) => {
    updateMutation.mutate(data)
  }

  const onDelete = () => {
    deleteMutation.mutate()
  }

  const loading = isLoadingMovement || isLoadingProducts || isLoadingWarehouses || updateMutation.isPending

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
                name="status"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PENDING">Pendente</SelectItem>
                          <SelectItem value="COMPLETED">Concluído</SelectItem>
                          <SelectItem value="CANCELED">Cancelado</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
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

                <AlertDialogDelete type="Movimentação"
                  onDelete={onDelete}
                />

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
