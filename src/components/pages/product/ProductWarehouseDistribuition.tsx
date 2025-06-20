import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { WarehouseStock } from "@/types/types"
import { useQuery } from "@tanstack/react-query"


const ProductWarehouseDistribuition = ({ productId }: { productId: string }) => {

	const { data, isLoading } = useQuery<WarehouseStock[]>({
		queryKey: ["warehouse-stocks", productId],
		queryFn: async () => {
			const response = await api.get(`/product/${productId}/warehouses`)
			return response.data
		}
	})

	if (isLoading) {
		return (
			<div className="space-y-2">
				<Skeleton className="h-6 w-1/2" />
				<Skeleton className="h-6 w-full" />
				<Skeleton className="h-6 w-full" />
			</div>
		)
	}

	return (
		<div className="mt-2 border rounded-md overflow-hidden">

			<Table>
				<TableHeader>
					<TableRow className="font-bold">
						<TableHead>
							Armazém
						</TableHead>
						<TableHead>
							Quantidade
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data?.map((ware) => (
						<TableRow key={ware.id}>
							<TableCell>
								{ware.warehouse.name}
							</TableCell>
							<TableCell>
								{ware.quantity}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default ProductWarehouseDistribuition