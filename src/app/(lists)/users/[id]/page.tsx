"use client"

import { useUser } from "@/lib/queries"
import { useParams } from "next/navigation"

const userPage = () => {
	const { id } = useParams()

	const { data: user } = useUser(id as string)
	console.log(user)

	return (
		<div className="p-6">
			user page
			{user?.name || "-"}
		</div>
	)
}

export default userPage