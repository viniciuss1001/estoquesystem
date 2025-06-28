"use client"

import { useDebounce } from "@/hooks/useDebounce"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { FileText, Package, SearchIcon, Tag, Truck, User, Warehouse, XCircle } from "lucide-react"
import { Input } from "../ui/input"
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import { Button } from "../ui/button"

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
						<Button variant="ghost" size='icon' className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
						onClick={() => setQuery("")}
						>
							<XCircle />
						</Button>
					</div>
				</PopoverTrigger>

				<PopoverContent className="w-[300px] p-0">
					<Command>
						<CommandInput placeholder="Buscando..." disabled />
						<CommandList>

							{isLoading && <p className="p-4 text-sm text-muted-foreground">Carregando...</p>}
							{!isLoading && data?.length === 0 && (
								<p className="p-4 text-sm text-muted-foreground">Nenhum resultado encontrado</p>
							)}

							{["product", "supplier", "warehouse", "category", "user", "invoice"].map((type) => {
								const items = data?.filter((item) => item.type === type) || []

								if (items.length === 0) return null

								const typeLabelMap: Record<string, string> = {
									product: "Produtos",
									supplier: "Fornecedores",
									warehouse: "Armazéns",
									category: "Categorias",
									user: "Usuários",
									invoice: "Boletos",
								}

								const iconMap: Record<string, React.ReactNode> = {
									product: <Package className="h-4 w-4 text-muted-foreground" />,
									supplier: <Truck className="h-4 w-4 text-muted-foreground" />,
									warehouse: <Warehouse className="h-4 w-4 text-muted-foreground" />,
									category: <Tag className="h-4 w-4 text-muted-foreground" />,
									user: <User className="h-4 w-4 text-muted-foreground" />,
									invoice: <FileText className="h-4 w-4 text-muted-foreground" />,
								}

								return (
									<CommandGroup key={type} heading={typeLabelMap[type]}>
										{items.map((item) => (
											<CommandItem
												key={item.id}
												value={item.label}
												onSelect={() => router.push(item.href)}
												className="cursor-pointer"
											>
												<div className="flex items-start gap-2">
													{iconMap[type]}
													<div className="flex flex-col">
														<span>{item.label}</span>
														{item.sublabel && (
															<span className="text-xs text-muted-foreground">{item.sublabel}</span>
														)}
													</div>
												</div>
											</CommandItem>
										))}

									</CommandGroup>
								)
							})}

						</CommandList>
					</Command>

				</PopoverContent>
			</Popover>
		</div>
	)
}

export default SearchInput