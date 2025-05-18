"use client"

import { Loader2, Trash2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"
import api from "@/lib/axios"
import { toast } from "sonner"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

interface AlertDialogDeleteProductProps {
	onDelete: () => void
}


const AlertDialogDeleteProduct = ({onDelete}: AlertDialogDeleteProductProps) => {

	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Button type="button" variant="destructive" className="cursor-pointer">
					Excluir produto
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Você tem certeza disso?</AlertDialogTitle>
					<AlertDialogDescription>
						Essa ação não pode ser revertida.
						Ao excluir o produto, ele será completamente apagado do banco de dados.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="cursor-pointer">Cancelar</AlertDialogCancel>
					<AlertDialogAction  className="gap-2 cursor-pointer" onClick={onDelete}>
							<div className="flex gap-2">
								<Trash2 className="size-5" />
								Deletar
							</div>						

					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default AlertDialogDeleteProduct