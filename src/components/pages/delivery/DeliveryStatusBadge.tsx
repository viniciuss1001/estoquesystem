import { Badge } from "@/components/ui/badge"

interface DeliveryStatusBadgeProps {
  status: "PENDING" | "COMPLETED" | "CANCELED" | "LATE"
}

const statusMap = {
	PENDING: {
    label: "Pendente",
    className: "bg-yellow-100 text-yellow-800",
  },
  COMPLETED: {
    label: "Concluída",
    className: "bg-green-100 text-green-800",
  },
  CANCELED: {
    label: "Cancelada",
    className: "bg-gray-200 text-gray-600",
  },
  LATE: {
    label: "Em atraso",
    className: "bg-red-100 text-red-800",
  },
  
}


const DeliveryStatusBadge = ({ status }: DeliveryStatusBadgeProps) => {

	const statusInfo = statusMap[status] || {
		label: "Desconhecido",
		className: "bg-muted text-muted-foreground"
	}

  return (
	 <Badge className={statusInfo.className}>
		{statusInfo.label}
	 </Badge>
  )
}

export default DeliveryStatusBadge