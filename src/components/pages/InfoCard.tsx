import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils"

interface InfoCardProps {
	title: string
	total: string
	icon: LucideIcon
	iconClassname?: string
}

const InfoCard = ({title, total, icon: Icon, iconClassname}: InfoCardProps) => {
  return (
	 <Card className="w-fit ">
		<CardContent className="p-4">
			<CardTitle className="font-semibold text-start flex gap-3">
				<Icon className={cn("size-8 flex mr-3", iconClassname)}/>
				{title}
			</CardTitle>
			<CardDescription className="text-2xl text-center font-bold mt-2">
				{total}
			</CardDescription>
		</CardContent>
	 </Card>
  )
}

export default InfoCard