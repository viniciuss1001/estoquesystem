import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Bell, BellRing, Check, Info } from 'lucide-react'
import { Button } from '../ui/button'

const NotificationComponent = () => {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger className='border rounded-md flex items-center justify-center gap-2 ml-2 mr-2 p-2 cursor-pointer bg-sidebar-accent'>
					<BellRing className='size-4' />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<div className='w-full p-2 flex justify-start items-center gap-2'>
						<Bell className='size-3' />
						<span className='text-sm text-muted-foreground'>
							Notificações
						</span>
					</div>
					<DropdownMenuSeparator />
					<div className='p-2 flex mt-2 justify-start items-center gap-2'>
						<Info className='size-4' />
						<span className='text-sm text-muted-foreground'>
							Notificação de mudança
						</span>
						<Button variant='ghost' className='cursor-pointer  hover:bg-green-500'>
							<Check />
						</Button>
					</div>

				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}

export default NotificationComponent