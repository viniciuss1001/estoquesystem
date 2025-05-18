"use client"
import { useSession } from 'next-auth/react'
import { Menubar } from '@/components/ui/menubar'
import { MenubarContent, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar'
import { Button } from '../ui/button'
import { CarFront, LogOut, Mail, User, UserLock } from 'lucide-react'
import { ModeThemeToggle } from '../shared/theme-toggle'
import { SidebarTrigger } from '../ui/sidebar'
import NotificationComponent from '../shared/notify'
import CreateProductModal from '../shared/create-product-modal'
import CreateSupplierModal from '../shared/create-supplier-modal'
import { Card, CardContent, CardFooter } from '../ui/card'

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
				<MenubarContent className='z-10'>
					<Card className=''>
						<CardContent>
							<div className='flex disabled justify-start gap-2 mt-2 p-2 w-full'>
								<User className='size-5' />
								<span className='text-sm flex ml-2'>
									{session?.user.name}
								</span>
							</div>
							<div className='flex disabled justify-start gap-2 mt-2 p-2 w-full'>
								<Mail className='size-5' />
								<span className='text-sm flex ml-2'>
									{session?.user.email}
								</span>
							</div>
							<div className='flex disabled justify-start gap-2 mt-4 p-3 w-full bg-blue-900 rounded-md'>
								<UserLock className='size-5' />
								<span className='text-sm flex ml-2'>
									{session?.user.office}
								</span>
							</div>
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