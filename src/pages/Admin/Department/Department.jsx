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
const DepartmentUI = ({ departments = [], onCardClick, onAddClick }) => {
  return (
    <Container>
      {departments.map((dept, index) => (
        <Card key={index} onClick={() => onCardClick(dept)}>
          <LeftSection>
            <IconBox>{dept.name?.charAt(0).toUpperCase() || "?"}</IconBox>

            <DepartmentInfo>
              <DepartmentTitle>{dept.name}</DepartmentTitle>
              <DepartmentHead>
                Department Head : {dept.head || "Not Assigned"}
              </DepartmentHead>
            </DepartmentInfo>
          </LeftSection>

          <RightSection>
            <EmployeeCount>{dept.employees || "0"}</EmployeeCount>
            <EmployeeText>Employees</EmployeeText>
            <Arrow>
              <CiEdit />
            </Arrow>
          </RightSection>
        </Card>
      ))}
    </Container>
  );
};

export default DepartmentUI;