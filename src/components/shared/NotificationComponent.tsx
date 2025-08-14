import api from '@/lib/axios'
import { useNotifications } from '@/lib/queries'
import { cn } from '@/lib/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { AlertTriangle, Bell, Check, Info, ShieldAlert, Trash2, XCircle } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Notification } from '@/types/types'


const iconsMap = {
	SYSTEM: <ShieldAlert className="text-blue-600 size-4" />,
	INFO: <Info className="text-green-600 size-4" />,
	WARNING: <AlertTriangle className="text-yellow-600 size-4" />,
	ERROR: <XCircle className="text-red-600 size-4" />,
}

const NotificationComponent = () => {

	const queryClient = useQueryClient()

	const { data: notifications = [] } = useNotifications()

	const unreadCount = notifications.filter((notification: Notification) => !notification.read).length

	const markNotificationsRead = useMutation({
		mutationFn: async (id: string) => {
			await api.patch(`/notification/${id}/read`)
		},
		onSuccess: () => {
			toast.success("Notificação marcada como lida")
			queryClient.invalidateQueries({ queryKey: ["notifications"] })
		},
		onError: () => {
			toast.error("Erro ao marcar notificação como lida")
		}
	})

	const markAllNotificationsAsRead = useMutation({
		mutationFn: async () => {
			await api.patch("/notification/read-all")
		},
		onSuccess: () => {
			toast.success("Notificações marcadas como lidas.")
			queryClient.invalidateQueries({ queryKey: ["notifications"] })
		},
		onError: () => {
			toast.error("Erro ao ler as noticações")
		}
	})

	const deleteNotification = useMutation({
		mutationFn: async (id: string) => {
			await api.delete(`/notification/${id}`)
		},
		onSuccess: () => {
			toast.success("Notificações deletada com sucesso!")
			queryClient.invalidateQueries({ queryKey: ["notifications"] })
		},
		onError: () => {
			toast.error("Erro ao excluir notificação.")
		}
	})

	return (

		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="relative p-2 cursor-pointer">
					<Bell className="size-5" />
					{unreadCount > 0 && (
						<span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
					)}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-80 max-h-96 overflow-auto">
				<DropdownMenuLabel className="flex items-center justify-between">
					<span>Notificações</span>
					{unreadCount > 0 && (
						<Button
							variant="outline"
							size="sm"
							onClick={() => markAllNotificationsAsRead.mutate()}
							className="text-xs h-6"
						>
							<Check className="size-4 mr-1" /> Marcar todas como lidas
						</Button>
					)}
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				{notifications.length === 0 && (
					<div className="text-sm text-muted-foreground p-4 text-center">
						Nenhuma notificação
					</div>
				)}

				{notifications.map((notification: Notification) => (
					<div className='flex gap-1 items-center justify-between' key={notification.id}>
						<DropdownMenuItem
							key={notification.id}
							className={cn(
								'flex items-start gap-2 py-2 px-3 cursor-pointer w-full',
								!notification.read && 'bg-muted'
							)}
							onClick={() => markNotificationsRead.mutate(notification.id)}
						>
							{iconsMap[notification.type as keyof typeof iconsMap]}
							<div className="flex flex-col gap-0.5">
								<p className="text-sm font-medium leading-tight">{notification.title}</p>
								<p className="text-xs text-muted-foreground line-clamp-2">
									{notification.message}
								</p>
								<span className="text-[10px] text-muted-foreground">
									{formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true, locale: ptBR })}
								</span>
							</div>
						</DropdownMenuItem>
						<Button
						className='cursor-pointer '
							variant="ghost"
							size="icon"
							onClick={(e) => {
								e.stopPropagation()
								deleteNotification.mutate(notification.id)
							}}
						>
							<Trash2 className="size-4 text-muted-foreground hover:text-destructive" />
						</Button>
					</div>
				))}
			</DropdownMenuContent>
		</DropdownMenu >

	)
}

export default NotificationComponent