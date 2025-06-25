import {z} from 'zod'

export const supplierInvoiceSchema = z.object({
	supplierId: z.string().min(1, 'Fornecedor obrigatório.'),
	title: z.string().min(1, 'Título obrigatório'),
	description: z.string().optional(),
	amount: z.coerce.number().positive('Valor deve ser positivo'),
	dueDate: z.string().min(1, 'Data de vencimento obrigatória'),
	file: z.any().optional()
})

export type SupplierInvoiceFormValues = z.infer<typeof supplierInvoiceSchema>

export const editInvoiceSchema = z.object({
	title: z.string().min(1, "Título é obrigatório"),
  description: z.string().optional(),
  amount: z.coerce.number().positive("Valor inválido"),
  dueDate: z.string().min(1, "Data de vencimento obrigatória"),
  status: z.enum(["PENDING", "PAID", "CANCELED"]),
  supplierId: z.string().uuid("Fornecedor inválido"),
})

export type EditInvoiceFormData = z.infer<typeof editInvoiceSchema>