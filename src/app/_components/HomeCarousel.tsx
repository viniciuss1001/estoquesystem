
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"


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
						0
					</CarouselItem>
					<CarouselItem className="">
						1
					</CarouselItem>
					<CarouselItem className="">
						2
					</CarouselItem>
					<CarouselItem className="">
						3
					</CarouselItem>
					<CarouselItem className="">
						4
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default HomeCarousel