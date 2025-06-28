"use client"

import { useDebounce } from "@/hooks/useDebounce"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { SearchIcon } from "lucide-react"
import { Input } from "../ui/input"
import { Command, CommandInput, CommandItem, CommandList } from "../ui/command"

interface SearchResults {
	id: string
	type: "product" | "supplier" | "warehouse" | "category" | "user" | "invoice"
	label: string
	sublabel?: string
	href: string
}

const SearchInput = () => {

	const [query, setQuery] = useState("")
	const debouncedQuery = useDebounce(query, 300)
	const router = useRouter()

	const { data, isLoading } = useQuery<SearchResults[]>({
		queryKey: ["search", debouncedQuery],
		queryFn: async () => {
			if (!debouncedQuery) return []

			const response = await api.get(`/search?q=${debouncedQuery}`)

			return response.data
		},
		enabled: !!debouncedQuery
	})

	return (
		<div>
			<Popover open={!!query}>
				<PopoverTrigger asChild>
					<div className="relative w-full max-w-sm">
						<SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />

						<Input
							placeholder="Pesquisar..."
							className="pl-9"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
				</PopoverTrigger>

				<PopoverContent className="w-[300px] p-0">
					<Command>
						<CommandInput placeholder="Buscando..." disabled/>
						<CommandList>

							{isLoading && <p className="p-4 text-sm text-muted-foreground">Carregando...</p>}
							{!isLoading && data?.length === 0 && (
								<p className="p-4 text-sm text-muted-foreground">Nenhum resultado encontrado</p>
							)}

							{data?.map((item) => (
								<CommandItem key={item.id}
								value={item.label}
								onSelect={() => router.push(item.href)}
								>
									<div className="flex flex-col">
										<span>{item.label}</span>
										{item.sublabel && (
											<p className="text-xs text-muted-foreground">
												{item.sublabel}
											</p>
										)}
									</div>

								</CommandItem>
							))}

						</CommandList>
					</Command>

				</PopoverContent>
			</Popover>
		</div>
	)
}

export default SearchInput