import React from 'react'
import Topbar from '../../../components/SuperAdmin/Topbar/Topbar'
import DashboardHeader from '../../../components/Admin/Dashboard/DashboardHeader/DashboardHeader'
import EmployeesOverview from '../../../components/Admin/Dashboard/EmployeesOverview/EmployeesOverview'
import SmartRouting from '../../../components/Admin/Dashboard/SmartRouting/SmartRouting'

function Dashboard() {
  return (
    <div>
      <Topbar/>

<DashboardHeader/>
<EmployeesOverview/>
<SmartRouting/>
    </div>
  )
}

export default Dashboard
