import { getWarehouseProductQuantity } from "@/lib/api/getWarehouseProductQuantity";
import { useQuery } from "@tanstack/react-query";

export function useWarehouseProductQuantity(productId?: string, warehouseId?: string) {
	return useQuery({
		queryKey: ["warehouseProductQuantity", productId, warehouseId],
		queryFn: () => {
			if (!productId || !warehouseId) return Promise.resolve(null);
			return getWarehouseProductQuantity(productId, warehouseId)
		},
		enabled: !!productId && !!warehouseId
	})
}