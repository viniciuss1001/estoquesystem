"use client"
import { useSession } from 'next-auth/react'
import { Menubar } from '@/components/ui/menubar'
import { MenubarContent, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar'
import { Button } from '../ui/button'
import { LogOut, Mail, Plus, User, UserLock, UserPlus } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { ModeThemeToggle } from '../shared/theme-toggle'
import { SidebarTrigger } from '../ui/sidebar'
import NotificationComponent from '../shared/notify'
import CreateProductModal from '../shared/create-product-modal'
import CreateSupplierModal from '../shared/create-supplier-modal'

const NavbarComponents = () => {

	const { data: session } = useSession()

	return (
		<Menubar className='w-full h-2/24 p-5 flex justify-between'>
			<MenubarMenu >
				<Button variant='ghost' asChild className='p-2 w-12'>
					<SidebarTrigger className='size-6 pr-4 cursor-pointer w-7 h-7' />
				</Button>
				<div className='w-full flex'>
					<p className='flex text-center  font-medium'>
						<span className='hidden lg:flex'>
							Bem-vindo, {" "}
						</span>
						 {session?.user.name}
					</p>
				</div>
				<div className='flex ml-auto gap-2'>
					{/* create product */}
					<CreateProductModal />
					{/* create Supplier */}
					<CreateSupplierModal />

					<ModeThemeToggle />

					<NotificationComponent />

				</div>
				<MenubarTrigger className='cursor-pointer pl-4'>
					<User />
				</MenubarTrigger>
				<MenubarContent className=''>
					<Card>
						<CardContent>
							<Button variant='ghost' className='flex disabled justify-start pt-2 w-full'>
								<User className='size-5' />
								<span className='text-xs'>
									{session?.user.name}
								</span>
							</Button>
							<Button variant='ghost' className='flex disabled justify-start  pt-2 w-full'>
								<Mail className='size-5' />
								<span className='text-xs'>
									{session?.user.email}
								</span>
							</Button>
							<Button variant='ghost' className='flex disabled justify-start  pt-2 w-full'>
								<UserLock className='size-5' />
								<span className='text-xs'>
									{session?.user.office}
								</span>
							</Button>
						</CardContent>
						<CardFooter>
							<Button variant='ghost' className='flex text-red-500  pt-2 cursor-pointer w-full'>
								<LogOut />
								Sair
							</Button>
						</CardFooter>
					</Card>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}

export default NavbarComponents