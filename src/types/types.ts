export interface ThisUser {
  id: string
  name: string
  email: string
  office: "Admin" | "Gestor"
  department: string
  phone: string
  description: string
  createdAt: Date
}

export interface Delivery {
  id: string
  product: {
    id: string
    name: string
  }
  supplier: {
    id: string
    name: string
  }
  warehouse: {
    id: string
    name: string
  }
  supplierInvoice?: {
    id: string
    title: string
    amount: number
  }
  quantity: number
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
  unit?: "UNIT" | "KILOGRAM" | "LITER" | "SQUARE_METER"
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
  createdAt: string
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

export interface Category {
  id: string
  name: string
}

export interface Notification {
  id?: string,
  title: string
  message: string
  type?: "SYSTEM" | "WARNING" | "INFO" | "ERROR"
  userId: string
  read?: Boolean
}

export interface Service {
  id: string
  provider: {
    id: string,
    name: string
  }
  email: string
  phone: string
  type: {
    id: string,
    name: string
  }
  serviceDate: string
  cost: number
  status: "PENDING" | "COMPLETED" | "CANCELED"
  location: {
    id: string
    name: string
  }
  description?: string | null
  attachmentUrl?: string | null
  invoice?: {
    id: string
    title: string
    dueDate: string
    status: "PENDING" | "PAID" | "CANCELED"
  } | null
  createdByUser?: {
    id: string
    name: string
    email: string
  } | null
  createdAt: string
  updatedAt: string
}


export interface ServiceProvider {
  id: string
  name: string
  email?: string
  phone?: string
  cnpj?: string
  description?: string
  createdAt: string
  updatedAt: string
}

export interface ServiceType {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface ServiceLocation {
  id: string
  name: string
  address?: string | null
  createdAt: string
  updatedAt: string
}