"use client"

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import {
	Building2,
	CalendarDays,
	Info,
	Mail,
	Phone,
	User,
	UserCog
} from "lucide-react"
import { useUser } from "@/lib/queries"
import { useParams } from "next/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { format } from "date-fns"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface UserInfoDialogProps {
	userId: string
}

const UserInfoDialog = ({ userId }: UserInfoDialogProps) => {
	const { id: useParamsId } = useParams()

	const id = useParamsId || userId

	const { data: user, isLoading } = useUser(id as string)

	const [open, setOpen] = useState(false)


	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-64">
				<p className="text-muted-foreground">Carregando usuário...</p>
			</div>
		)
	}

	if (!user) {
		return (
			<div className="flex items-center justify-center h-64">
				<p className="text-muted-foreground">Usuário não encontrado.</p>
			</div>
		)
	}

	return (

		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="ghost" className="cursor-pointer" size="icon">
					<Info className="size-5" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>
					Informações do Usuário
				</DialogTitle>
				<DialogDescription>
					Veja abaixo a descrição do usuário selecionado
				</DialogDescription>

				<Card className="shadow-xl rounded-2xl border-none">
					<CardHeader className="flex flex-col items-center gap-2">
						<Avatar className="h-20 w-20">
							<AvatarFallback className="text-xl">
								{user.name.split(" ").map(n => n[0]).join("").toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<CardTitle className="text-center text-2xl font-semibold">
							{user.name}
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center gap-2">
							<User size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Cargo:</span>
							<span className="font-medium capitalize">{user.office.toLowerCase()}</span>
						</div>

						<div className="flex items-center gap-2">
							<Building2 size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Departamento:</span>
							<span className="font-medium">{user.department}</span>
						</div>

						<div className="flex items-center gap-2">
							<Mail size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Email:</span>
							<span className="font-medium">{user.email}</span>
						</div>

						<div className="flex items-center gap-2">
							<Phone size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Telefone:</span>
							<span className="font-medium">{user.phone}</span>
						</div>

						<div className="flex items-center gap-2">
							<CalendarDays size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Criado em:</span>
							<span className="font-medium">
								{format(new Date(user.createdAt), "dd 'de' MMMM 'de' yyyy")}
							</span>
						</div>

						{user.description && (
							<div className="flex gap-2">
								<UserCog size={18} className="text-muted-foreground mt-1" />
								<div>
									<span className="text-sm text-muted-foreground block mb-1">Descrição:</span>
									<p className="text-sm">{user.description}</p>
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</DialogContent>
		</Dialog>

	)
}

export default UserInfoDialog
