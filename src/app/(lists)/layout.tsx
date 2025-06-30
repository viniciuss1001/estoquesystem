import AsideSheet from '@/components/pages/AsideSheet'
import DeliveryCalendarAside from '@/components/pages/DeliveryCalendarAside'
import LowStockAlert from '@/components/pages/LowStockAlert'
import NavbarComponents from '@/components/pages/Navbar'
import SidebarComponent from '@/components/pages/Sidebar'
import SearchInput from '@/components/shared/SearchInput'

const ListsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen w-full">
			<SidebarComponent />
			<main className='w-full p-6'>
				<NavbarComponents />
				{children}
			</main>
			<div className='w-20 bg-card'>
				<AsideSheet>
					<SearchInput />
					<DeliveryCalendarAside />
					<LowStockAlert />
				</AsideSheet>
			</div>
		</div>
	)
}

export default ListsLayout