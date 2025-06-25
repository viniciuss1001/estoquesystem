export interface Delivery {
	id: string
	product: {
		id: string
		name: string
	}
	quantity: number
	supplier: {
		id: string
		name: string
	}
	expectedAt: string
	status: "PENDING" | "COMPLETED" | "CANCELED" | "LATE"
}

export interface Movement {
     id: string
  type: "IN" | "OUT" | "TRANSFER"
  status: "PENDING" | "COMPLETED" | "CANCELED"
  quantity: number
  notes: string | null
  createdAt: string
  product: {
    id: string
    name: string
  }
  originWareHouse: {
    id: string
    name: string
  } | null
  destinationWarehouse: {
    id: string
    name: string
  } | null
}

export interface Product {
  id: string
  name: string
  sku: string
  quantity: string
  price: number
  category?: {
    id: string
    name: string
    createdAt: string
    updatedAt: string
  }
  createdAt: string
  updatedAt: string
  supplier: {
    id: string
    name: string
  }
  usageStatus?: "IN_STOCK" | "IN_USE" | "CONSUMED"
  expirationDate?: string | null
  minimumStock: number 
}

export interface Supplier {
  id: string
  name: string
  email: string
  contactPhone: string
  deliveryTime: string
  description?: string
  products: {
    id: string
    name: string
    category?: {
      name: string
    } | null
  }[]
}

export interface SupplierInvoice {
	id: string
	title: string
	description?: string
	amount: number
	status: "PENDING" | "PAID" | "CANCELED"
	dueDate: string
	createdAt: string
	updatedAt?: string
	fileUrl?: string | null
	supplier: {
		id: string
		name: string
	}
}


export interface Warehouse {
    id: string
    name: string
    location?: string | null
    description: string
}

export interface WarehouseProduct {
	warehouseId: string
	productId: string
	quantity: number
	warehouse: {
		id: string
		name: string
	}
	product: {
		id: string
		name: string
	}
}

export interface WarehouseStock {
	id: string
	quantity: string
	warehouse: {
		id: string
		name: string
		location: string | null
	}
}

export interface Category{
    id: string
    name: string
}