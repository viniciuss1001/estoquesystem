"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export function LogoutButton() {
	return (
		<Button
			onClick={() => signOut({callbackUrl: "/"})}
			variant='ghost'
			className='flex text-red-500  pt-2 cursor-pointer w-full'>
			<LogOut />
			Sair
		</Button>
	)
}