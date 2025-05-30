"use client"
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import api from '@/lib/axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'
import CategoryEditDialog from './CategoryEditDialog'

const CategoryList = () => {
	const queryClient = useQueryClient()

	const { data: categories, isLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const response = await api.get("/categories")
			return response.data
		}
	})

	const deleteMutation = useMutation({
		mutationFn: async (id: string) => {
			const res = await api.delete(`/categories/${id}`)

			if (!res) {
				throw new Error("Erro ao deletar categoria")
			}
		},
		onSuccess: () => {
			toast.success("Categoria deletada com sucesso")
		},
		onError: () => {
			toast.error("Erro ao deletar categoria")
		}
	})

	return (
		<div className='p-6 w-full h-full'>
			<div className='flex  p-2'>
				<h2 className="text-2xl font-bold mb-4">Histórico de Movimentações</h2>
				<div className='flex ml-auto'>
					{'component'}
				</div>
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Categoria</TableHead>
						<TableHead className="text-right">Ações</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{categories.length === 0 ? (
						<TableRow>
							<TableCell colSpan={2} className="text-center">
								Nenhuma categoria registrada.
							</TableCell>
						</TableRow>
					) : (
						categories.map((category: any) => (
							<TableRow key={category.id}>
								<TableCell>{category.name}</TableCell>
								<TableCell className="text-right space-x-2">

									<CategoryEditDialog category={category} />


									<Button
										variant="destructive"
										size="sm"
										className='flex gap-2 text-start'
										onClick={() => deleteMutation.mutate(category.id)}
									>
										<Trash2 />
										Excluir
									</Button>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default CategoryList