import api from "@/lib/axios"
import { WarehouseProduct } from "@/types/types"
import { useQuery } from "@tanstack/react-query"

export function useWarehouseProduct() {
    return useQuery({
        queryKey: ['warehouseProducts'],
        queryFn: async () => {
            const response = await api.get('/warehouse-product')
            return response.data as WarehouseProduct[]
        }
    })
}