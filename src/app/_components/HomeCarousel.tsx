
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"

import group from '@/app/_components/_images/group.jpg'
import updateproduct from '@/app/_components/_images/update-product.jpg'
import warehousedash from '@/app/_components/_images/warehouse-dash.jpg'
import warehousework from '@/app/_components/_images/warehouse-work.jpg'
import warehouse from '@/app/_components/_images/warehouse.jpg'


const HomeCarousel = () => {
	return (
		<div className='w-full p-8 mt-4 h-2/4 flex items-center justify-center'>
			<Carousel
				opts={{
					align: "start",
				}}
				orientation="horizontal"
				className="w-full min-h-lg max-w-2xl  items-center justify-center rounded-md ">
				<CarouselContent className='-ml-4 max-h-[450px] rounded-md'>
					<CarouselItem className="rounded-lg">
						<Image src={warehouse} alt="Warehouse" />
					</CarouselItem>
					<CarouselItem className="">
						<Image src={warehousedash} alt="Warehouse" />
					</CarouselItem>
					<CarouselItem className="">
						<Image src={group} alt="Warehouse" />
					</CarouselItem>
					<CarouselItem className="">
						<Image src={warehousework} alt="Warehouse" />
					</CarouselItem>
					<CarouselItem className="">
						<Image src={updateproduct} alt="Warehouse" />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default HomeCarousel