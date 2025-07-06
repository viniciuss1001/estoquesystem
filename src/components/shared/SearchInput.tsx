import {
	Dialog,
	DialogContent,
} from "@/components/ui/dialog"
import {
	Command,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
	FileText,
	Package,
	SearchIcon,
	Tag,
	Truck,
	User,
	Warehouse,
	XCircle,
} from "lucide-react"
import { useDebounce } from "@/hooks/useDebounce"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface SearchResults {
	id: string
	type: "product" | "supplier" | "warehouse" | "category" | "user" | "invoice"
	label: string
	sublabel?: string
	href: string
}

const SearchInput = () => {
	const [query, setQuery] = useState("")
	const [open, setOpen] = useState(false)
	const debouncedQuery = useDebounce(query, 300)
	const router = useRouter()

	useEffect(() => {
		setOpen(!!debouncedQuery)
	}, [debouncedQuery])

	const { data, isLoading } = useQuery<SearchResults[]>({
		queryKey: ["search", debouncedQuery],
		queryFn: async () => {
			if (!debouncedQuery) return []
			const response = await api.get(`/search?q=${debouncedQuery}`)
			return response.data
		},
		enabled: !!debouncedQuery,
	})

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
		<>
			<div className="relative w-full max-w-sm">
				<Input
					placeholder="Pesquisar..."
					className="pl-3 pr-20"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>

				{/*action Buttons */}
				<div className="absolute right-1 top-0 flex gap-1">
					{query && (
						<Button
							variant="ghost"
							size="icon"
							className="h-8 w-8 text-muted-foreground cursor-pointer"
							onClick={() => {
								setQuery("")
								setOpen(false)
							}}
						>
							<XCircle size={18} />
						</Button>
					)}
					<Button
						variant="ghost"
						size="icon"
						className="h-8 w-8 text-muted-foreground cursor-pointer"
						onClick={() => {
							if (query.trim().length > 0) {
								setOpen(true)
							}
						}}
					>
						<SearchIcon size={18} />
					</Button>
				</div>
			</div>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="p-0 overflow-hidden max-w-lg w-full">
					<Command>
						<CommandInput placeholder="Buscando..." disabled />
						<CommandList>
							{isLoading && (
								<p className="p-4 text-sm text-muted-foreground">Carregando...</p>
							)}
							{!isLoading && data?.length === 0 && (
								<p className="p-4 text-sm text-muted-foreground">
									Nenhum resultado encontrado
								</p>
							)}
							{["product", "supplier", "warehouse", "category", "user", "invoice"].map((type) => {
								const items = data?.filter((item) => item.type === type) || []
								if (items.length === 0) return null

								return (
									<CommandGroup key={type} heading={typeLabelMap[type]}>
										{items.map((item) => (
											<CommandItem
												key={item.id}
												value={item.label}
												onMouseDown={() => {
													router.push(item.href)
													setOpen(false)
													setQuery("")
												}}
												className="cursor-pointer"
											>
												<div className="flex items-start gap-2">
													{iconMap[type]}
													<div className="flex flex-col">
														<span>{item.label}</span>
														{item.sublabel && (
															<span className="text-xs text-muted-foreground">
																{item.sublabel}
															</span>
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
				</DialogContent>
			</Dialog>
		</>
	)
}

export default SearchInput
