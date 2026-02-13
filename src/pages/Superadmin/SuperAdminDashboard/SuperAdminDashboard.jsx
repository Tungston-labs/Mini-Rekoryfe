import React,{useState} from 'react'
import Topbar from '../../../components/SuperAdmin/Topbar/Topbar'
import PageHeader from '../../../components/SuperAdmin/PageHeader/PageHeader'
import avatar from "../../../assets/images/rightimage.png"
import {
  Wrapper,
  Table,
  Th,
  Td,
  Status,
  OfferWrapper,
  Toggle,
  Knob,
} from "./SuperAdminDashboard.styles";
import SummaryHeader from '../../../components/SuperAdmin/SummaryHeader/SummaryHeader';
import {FiPlus } from "react-icons/fi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
function SuperAdminDashboard() {
    const [rows, setRows] = useState([
    {
      id: 1,
      name: "tungston22",
      code: "ugs_arm_koc_585",
      contact: "9895213654",
      employees: 10,
          employeeamount:10,
      amount: 1000,
      dueDate: "03-02-2026",
      status: "PAID",
      offer: true,
    },
    {
      id: 2,
      name: "InfoTech",
      code: "ugs_arm_koc_585",
      contact: "9895213654",
      employees: 30,
          employeeamount:10,
      amount: 3000,
      dueDate: "03-02-2026",
      status: "UNPAID",
      offer: false,
    },
    {
      id: 3,
      name: "InfoTech",
      code: "ugs_arm_koc_585",
      contact: "9895213654",
      employees: 20,
      employeeamount:10,
      amount: 2000,
      dueDate: "03-02-2026",
      status: "PAID",
      offer: true,
    },   
  ]);
  const cards = [
  {
    title: "Total Companies",
    value: 50,
    icon: <TbBuildingSkyscraper />,
    action: {
      icon: <FiPlus />,
      onClick: () => console.log("Add Company"),
    },
  },
  {
    title: "Plan Expires Count",
    value: 7,
    icon: <IoMdTime />,
  },
];
    const toggleOffer = (id) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, offer: !row.offer } : row
      )
    );
  };
  return (
    <div>
      <Topbar
        title='Rekory Location Tracking Dashboard '
      />
      <PageHeader
        title="Super Admin, Welcome Back!"
        subtitle="Manage your account settings"
        rightContent={<img src={avatar} width={100} />}
      />
      <SummaryHeader
  cards={cards}
  onSearch={(val) => console.log("Search:", val)}
/>
    <Wrapper>
      <Table>
        <thead>
          <tr>
    
            <Th>Company Name</Th>
            <Th>Contact Details</Th>
            <Th>No.Of Employees</Th>
               <Th>Amount per Employee</Th>
            <Th>Total Payment Amount</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
            <Th>Offer State</Th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
             

              <Td>{row.name}</Td>
              <Td>{row.contact}</Td>
              <Td>{row.employees}</Td>
              <Td>{row.employeeamount}</Td>
              <Td>{row.amount}</Td>
              <Td>{row.dueDate}</Td>

              <Td>
                <Status type={row.status}>{row.status}</Status>
              </Td>

              <Td>
                <OfferWrapper>
                  <span>OFF</span>
                  <Toggle
                    active={row.offer}
                    onClick={() => toggleOffer(row.id)}
                  >
                    <Knob active={row.offer} />
                  </Toggle>
                  <span>ON</span>
                </OfferWrapper>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
    </div>
  )
}

export default SuperAdminDashboard
