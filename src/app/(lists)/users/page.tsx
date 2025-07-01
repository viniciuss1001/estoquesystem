"use client"

import UserFilterDialog from "@/components/pages/user/UserFilterDialog"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useFilteredUsers, useUsers } from "@/lib/queries"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


const UsersPage = () => {
	const [officeFilter, setOfficeFilter] = useState<string | undefined>(undefined)

	const { data: users = [], isLoading } = useFilteredUsers(officeFilter as "ADMIN" | "GESTOR" | undefined)

	if (isLoading) {
		return <div className="flex justify-center items-center h-full">
			<Loader2 className="w-6 h-6 animate-spin" />
		</div>
	}

	return (
		<div className="p-6">
			<div className="w-full flex items-center justify-between pb-4">

				<div className="flex flex-col">

					<h2 className="text-2xl font-bold mb-2">
						Lista de Usuários
					</h2>

					<p className="text-sm text-muted-foreground">
						Total de {users.length} usuário (s) sendo exibidos.
					</p>
				</div>

				{/* filter and form of user creation */}
				<div className="flex gap-2">
					<UserFilterDialog
						onFilter={setOfficeFilter}
					/>

					<Button
						variant="ghost"
						onClick={() => setOfficeFilter(undefined)}
						disabled={!officeFilter}
						className="cursor-pointer"
					>
						Limpar Filtros
					</Button>
				</div>

			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Nome</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Cargo</TableHead>
						<TableHead>Criado em</TableHead>
						<TableHead>Detalhes</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{users.length === 0 ? (
						<TableRow>
							<TableCell colSpan={4} className="text-center">Nenhum usuário encontrado.</TableCell>
						</TableRow>
					) : (
						users.map((user) => (
							<TableRow key={user.id}>
								<TableCell>{user.name}</TableCell>
								<TableCell>{user.email}</TableCell>
								<TableCell>{user.office}</TableCell>
								<TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
								<TableCell>
									<Link href={`/users/${user.id}`} className="text-blue-500 underline">
										Detalhes
									</Link>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>

	)
}

export default UsersPage