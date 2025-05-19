import MainLayoutDashboard from '@/components/pages/Main'
import SidebarComponent from '@/components/pages/Sidebar'
import React from 'react'

const DashboardPage = () => {
  return (
	 <div className="flex min-h-screen w-full">
      <SidebarComponent />
      <MainLayoutDashboard />
    </div>
  )
}

export default DashboardPage