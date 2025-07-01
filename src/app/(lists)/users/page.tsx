"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useUsers } from "@/lib/queries"
import Link from "next/link"


const UsersPage = () => {
	const { data: users = [] } = useUsers()



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