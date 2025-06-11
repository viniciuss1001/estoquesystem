export async function getWarehouseProductQuantity(productId: string, warehouseId: string) {

	const response = await fetch(`/api/warehouse-product/quantity?productId=${productId}&warehouseId=${warehouseId}`)



	if (!response.ok) {
		throw new Error("Erro ao buscar a quantidade de produto no armazenamento")
	}

	return response.json()
}