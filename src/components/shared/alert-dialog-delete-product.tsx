"use client"

import { Trash2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"

interface AlertDialogDeleteProductProps {
	onDelete: () => void
	type?: string
}


const AlertDialogDelete = ({onDelete, type}: AlertDialogDeleteProductProps) => {

	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Button type="button" variant="destructive" className="cursor-pointer">
					Excluir {type}
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

export default AlertDialogDelete