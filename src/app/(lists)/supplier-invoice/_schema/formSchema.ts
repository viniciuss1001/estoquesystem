import { z } from 'zod'

export const supplierInvoiceSchema = z.object({
	 supplierId: z.string().min(1, 'Fornecedor obrigatório.'), // <-- remove regex
  providerType: z.enum(["SUPPLIER", "SERVICE_PROVIDER"]),
  title: z.string().min(1, 'Título obrigatório'),
  description: z.string().optional(),
  amount: z.coerce.number().positive('Valor deve ser positivo'),
  dueDate: z.string().min(1, 'Data de vencimento obrigatória'),
  file: z.any().optional()
})

export type SupplierInvoiceFormValues = z.infer<typeof supplierInvoiceSchema>

export const editInvoiceSchema = z.object({
	 supplierId: z.string().min(1, 'Fornecedor obrigatório.'), // <-- remove regex
  providerType: z.enum(["SUPPLIER", "SERVICE_PROVIDER"]),
  title: z.string().min(1, 'Título obrigatório'),
  description: z.string().optional(),
  amount: z.coerce.number().positive('Valor deve ser positivo'),
  dueDate: z.string().min(1, 'Data de vencimento obrigatória'),
  file: z.any().optional()
})

export type EditInvoiceFormData = z.infer<typeof editInvoiceSchema>