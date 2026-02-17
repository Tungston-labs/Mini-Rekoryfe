import React, { useState } from "react";
import {
  Container,
  Card,
  LeftSection,
  IconBox,
  DepartmentInfo,
  DepartmentTitle,
  DepartmentHead,
  RightSection,
  EmployeeCount,
  EmployeeText,
  Arrow
} from "./Departments.styles";

import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import { FiCode } from "react-icons/fi";
import { RiRadarLine } from "react-icons/ri";
import { BsGrid } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import DepartmentPopup from "../../../components/Admin/Department/DepartmentPop/DepartmentPopup";
import AddDepartmentModal from "../../../components/Admin/Department/AddDepartment/AddDepartmentModal"


function Department() {
  const [open, setOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const departments = [
    {
      name: "Development",
      head: "Ajay Kumar",
      employees: "08",
      icon: <FiCode />
    },
    {
      name: "Marketing",
      head: "Mumthaz",
      employees: "02",
      icon: <RiRadarLine />
    },
    {
      name: "UIUX",
      head: "Aiswarya",
      employees: "01",
      icon: <BsGrid />
    },
    {
      name: "Testing",
      head: "Not Assigned",
      employees: "00",
      icon: <FiLock />
    }
  ];

const handleAddDepartment = () => {
    setIsAddModalOpen(true);
  };

  const handleCardClick = (dept) => {
    setSelectedDept(dept);
    setIsPopupOpen(true);
  };
  return (
    <>
      <Topbar />

      <PageHeader
        title="Department"
        subtitle="View and manage all organizational departments in one place."
        rightContent={
          <button className="primary-btn" onClick={handleAddDepartment}>
            + Add Department
          </button>
        }
      />

      <Container>
        {departments.map((dept, index) => (
          <Card key={index} onClick={() => handleCardClick(dept)}>
            <LeftSection>
              <IconBox>{dept.icon}</IconBox>

              <DepartmentInfo>
                <DepartmentTitle>{dept.name}</DepartmentTitle>
                <DepartmentHead>
                  Department Head : {dept.head}
                </DepartmentHead>
              </DepartmentInfo>
            </LeftSection>

            <RightSection>
              <EmployeeCount>{dept.employees}</EmployeeCount>
              <EmployeeText>Employees</EmployeeText>
              <Arrow>
                <IoChevronDownOutline />
              </Arrow>
            </RightSection>
          </Card>
        ))}
      </Container>
       <AddDepartmentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

    {selectedDept && isPopupOpen && (
  <DepartmentPopup
    isOpen={isPopupOpen}
    onClose={() => setIsPopupOpen(false)}
    department={selectedDept}
  />
)}
    </>
  );
}

export default Department;
