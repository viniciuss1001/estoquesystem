import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

type DashboardCardProps = {
	title: string
	value: number | string
	icon: LucideIcon
	color?: "default" | "green" | "blue" | "orange" | "red"
}

const bgVariants: Record<string, string> = {
	default: "bg-muted",
	green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
	blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
	orange: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
	red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
}

const DashboardCard = ({ title, value, icon: Icon, color = "default" }: DashboardCardProps) => {
	return (
		<div className="relative rounded-2xl border bg-background p-4 shadow-sm dark:border-muted transition-all duration-200 hover:shadow-md hover:-translate-y-1">

			{/* icon */}
			<div className={cn(
				"absolute right-4 top-4 rounded-md p-1",
				bgVariants[color]
			)}>
				<Icon className="h-5 w-5" />
			</div>

			{/* content */}
			<div className="space-y-1">
				<p className="text-sm text-muted-foreground">{title}</p>
				<p className="text-3xl font-bold">{value}</p>
			</div>
		</div>
	)
}

export default DashboardCard