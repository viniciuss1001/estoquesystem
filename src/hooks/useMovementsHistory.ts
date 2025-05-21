// src/hooks/useMovementsHistory.ts
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useMovementsHistory = () => {
  return useQuery({
    queryKey: ["movements-history"],
    queryFn: async () => {
      const { data } = await axios.get("/api/dashboard/history/movements")
      return data as { month: string; count: number }[]
    },
  })
}
