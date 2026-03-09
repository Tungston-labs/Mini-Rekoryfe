import React from "react";
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
import { CiEdit } from "react-icons/ci";
import Pagination from "../../../components/Pagination/Pagination";

const DepartmentUI = ({
  departments = [],
  employees = [], 
  onCardClick,
  currentPage,
  totalPages,
  onPageChange,
}) => {

 const getHeadNames = (headIds) => {
  if (!headIds?.length) return "Not Assigned";
  return headIds
    .map(id => employees.find(emp => emp.id === id)?.name || `User ${id}`)
    .join(", ");
};

  return (
    <Container>
      {departments.map((dept, index) => (
        <Card key={index} onClick={() => onCardClick(dept)}>
          <LeftSection>
            <IconBox>{dept.name?.charAt(0).toUpperCase() || "?"}</IconBox>
            <DepartmentInfo>
              <DepartmentTitle>{dept.name}</DepartmentTitle>
           <DepartmentHead>
  Department Head: {dept.head_names?.length ? dept.head_names.join(", ") : "Not Assigned"}
</DepartmentHead>
            </DepartmentInfo>
          </LeftSection>

          <RightSection>
            <EmployeeCount>{dept.employee_count || "0"}</EmployeeCount>
            <EmployeeText>Employees</EmployeeText>
            <Arrow>
              <CiEdit />
            </Arrow>
          </RightSection>
        </Card>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default DepartmentUI;