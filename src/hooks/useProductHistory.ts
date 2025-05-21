// src/hooks/useMovementsHistory.ts
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useProductsHistory = () => {
  return useQuery({
    queryKey: ["product-history"],
    queryFn: async () => {
      const { data } = await axios.get("/api/dashboard/history/product")
      return data as { month: string; count: number }[]
    },
  })
}
