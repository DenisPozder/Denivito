import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import UserHeader from '../../../../Components/UserHeader/UserHeader'
import DashboardGrid from './Components/DashboardGrid/DashboardGrid'
import DashboardTable from './Components/DashboardTable/DashboardTable'

const Dashboard = () => {
  return (
    <Sidebar>
      <UserHeader title={"dashboard"} />
      <DashboardGrid />
      <DashboardTable />
    </Sidebar>
  )
}

export default Dashboard