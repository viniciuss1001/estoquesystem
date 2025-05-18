"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface User {
	id: string
	name: string
	email: string
	office: string
	createdAt: string
}

const UsersPage = () => {
	const [users, setUser] = useState<User[]>([])

	useEffect(() => {
		api.get("/user")
			.then((response) => {
				setUser(response.data.users)
				
			})
			.catch(() => {
				toast.error("Erro ao carregar usuários.")
			})
	}, [])

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-6">
				Lista de Usuários
			</h2>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Nome</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Cargo</TableHead>
						<TableHead>Criado em</TableHead>
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
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>

	)
}

export default UsersPage