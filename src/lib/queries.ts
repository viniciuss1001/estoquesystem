import { Category, Delivery, Movement, Product, Supplier, SupplierInvoice, Warehouse, WarehouseProduct } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import api from "./axios"

type ProductFilters = {
    categoryId?: string
    supplierId?: string
    warehouseId?: string
    usageStatus?: string
}

interface FilteredWarehouseParams {
    location?: string
}

export function useCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await api.get("/categories")
            return response.data as Category[]
        }
    })
}

export function useFilteredProducts(filters: ProductFilters) {
    return useQuery({
        queryKey: ['products', filters],
        queryFn: async () => {
            const params = new URLSearchParams()
            if (filters.categoryId) params.append("categoryId", filters.categoryId)
            if (filters.supplierId) params.append("supplierId", filters.supplierId)
            if (filters.warehouseId) params.append("warehouseId", filters.warehouseId)
            if (filters.usageStatus) params.append("usageStatus", filters.usageStatus)

            const response = await api.get(`/product?${params.toString()}`)
            return response.data as Product[]
        },
    })

}

export function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await api.get("/product")
            return response.data as Product[]
        }
    })
}

export function useProduct(id: string) {
    return useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const response = await api.get(`/product/${id}`)
            return response.data as Product
        },
        enabled: !!id,
    })
}

export function useSuppliers() {
    return useQuery({
        queryKey: ["suppliers"],
        queryFn: async () => {
            const response = await api.get('/supplier')
            return response.data.suppliers as Supplier[]
        }
    })
}

export function useSupplier(id: string) {
    return useQuery({
        queryKey: ['supplier', id],
        queryFn: async () => {
            const response = await api.get(`/supplier/${id}`)
            return response.data as Supplier
        },
        enabled: !!id
    })
}

export function useFilteredWarehouses({ location }: FilteredWarehouseParams) {
    return useQuery({
        queryKey: ["warehouses", { location }],
        queryFn: async () => {
            const params = new URLSearchParams()
            if (location) params.append("location", location)

            const response = await api.get(`/warehouse?${params.toString()}`)
            return response.data as Warehouse[]
        },
    })
}

export function useWarehouses() {
    return useQuery({
        queryKey: ["warehouses"],
        queryFn: async () => {
            const response = await api.get("/warehouse")
            return response.data as Warehouse[]
        }
    })
}

export function useWarehouse(id: string) {
    return useQuery({
        queryKey: ['warehouse', id],
        queryFn: async () => {
            const response = await api.get(`/warehouse/${id}`)
            return response.data as Warehouse
        },
        enabled: !!id
    })
}

export function useWarehouseProduct() {
    return useQuery({
        queryKey: ['warehouseProducts'],
        queryFn: async () => {
            const response = await api.get('/warehouse-product')
            return response.data as WarehouseProduct[]
        }
    })
}

export function useDeliveries() {
    return useQuery({
        queryKey: ["deliveries"],
        queryFn: async () => {
            const response = await api.get('/delivery')
            return response.data as Delivery[]
        },
    })
}

export function useDelivery(id: string) {
    return useQuery({
        queryKey: ["delivery", id],
        queryFn: async () => {
            const response = await api.get(`/delivery/${id}`)
            return response.data.delivery as Delivery
        },
        enabled: !!id
    })
}

export function useMovements() {
    return useQuery({
        queryKey: ["movements"],
        queryFn: async () => {
            const response = await api.get('/movements')
            return response.data.movements as Movement[]
        }
    })
}

export function useMovement(id: string) {
    return useQuery({
        queryKey: ["movement", id],
        queryFn: async () => {
            const response = await api.get(`/movements/${id}`)
            return response.data.movement as Movement
        },
        enabled: !!id
    })
}

export function useSupplierInvoices() {
    return useQuery({
        queryKey: ["supplierInvoices"],
        queryFn: async () => {
            const response = await api.get("/supplier-invoice")
            return response.data as SupplierInvoice[]
        },
    })
}

export function useSupplierInvoice(id: string) {
    return useQuery({
        queryKey: ["supplierInvoice", id],
        queryFn: async () => {
            const response = await api.get(`/supplier-invoice/${id}`)
            return response.data as SupplierInvoice
        },
        enabled: !!id,
    })
}

