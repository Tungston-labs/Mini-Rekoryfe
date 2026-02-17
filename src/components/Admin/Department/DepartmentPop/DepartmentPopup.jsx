import React from "react";
import {
  Overlay,
  PopupContainer,
  Header,
  TitleSection,
  CodeIcon,
  TitleText,
  SubText,
  RightSection,
  EmployeeCount,
  Table,
  Th,
  Td,
  EmployeeCell,
  Avatar,
  EditIcon,
  CloseButton,
} from './DepartmentPopup.styles';

import { FiEdit2, FiX } from "react-icons/fi";

const DepartmentPopup = ({ onClose }) => {
  const employees = [
    { id: 1, name: "Aditi Sharma", role: "Software Developer" },
    { id: 2, name: "Ananya Menon", role: "Software Developer" },
    { id: 3, name: "Divya Rao", role: "Software Developer" },
    { id: 4, name: "Deepak V", role: "Software Developer" },
    { id: 5, name: "Karthik S", role: "Software Developer" },
    { id: 6, name: "Meera Iyer", role: "Software Developer" },
    { id: 7, name: "Mohammed Rafi", role: "Software Developer" },
    { id: 8, name: "Neha Singh", role: "Software Developer" },
  ];

  return (
    <Overlay>
      <PopupContainer>
        <Header>
          <TitleSection>
            <CodeIcon>{"</>"}</CodeIcon>
            <div>
              <TitleText>Development</TitleText>
              <SubText>Department Head : Aditi Sharma</SubText>
            </div>
          </TitleSection>

          <RightSection>
            <EmployeeCount>
              <strong>08</strong><br/>
              <span>Employees</span>
            </EmployeeCount>
            <CloseButton onClick={onClose}>
              <FiX />
            </CloseButton>
          </RightSection>
        </Header>

        <Table>
          <thead>
            <tr>
              <Th>Employee Name</Th>
              <Th>Company</Th>
              <Th>Job Position</Th>
              <Th>Email Id</Th>
              <Th>Edit</Th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <Td>
                  <EmployeeCell>
                    <Avatar />
                    {emp.name}
                  </EmployeeCell>
                </Td>
                <Td>TUNDEVTV</Td>
                <Td>{emp.role}</Td>
                <Td>aaaungstonlabs@gmail.com</Td>
                <Td>
                  <EditIcon>
                    <FiEdit2 size={16} />
                  </EditIcon>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </PopupContainer>
    </Overlay>
  );
};

export default DepartmentPopup;
