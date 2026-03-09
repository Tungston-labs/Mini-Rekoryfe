import React from "react";
import {
  HeaderContainer,
  Avatar,
  GridContainer,
  Column,
  NameValue,
  InfoRow,
  Label,
  Value,
  IdValue,
} from "./PageHeader.Styles";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

const PageHeader = ({ employee }) => {
  const navigate = useNavigate();

  if (!employee) return null;

  return (
    <HeaderContainer>
      <FaChevronLeft
        size={18}
        style={{ color: "#BA0D11", cursor: "pointer" }}
        onClick={() => navigate("/admin/employees/attendance")}
      />

      <Avatar
        src={
          employee.profile_pic ||
          "https://i.pravatar.cc/100"
        }
        alt="profile"
      />

      <GridContainer>
        <Column>
          <InfoRow>
            <NameValue>{employee.name}</NameValue>
          </InfoRow>
          <InfoRow>
            <IdValue>EMP-{employee.id}</IdValue>
          </InfoRow>
        </Column>

        <Column>
          <InfoRow>
            <Label>Job Title</Label>
            <Value>: {employee.job_title}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Number</Label>
            <Value>: {employee.phone}</Value>
          </InfoRow>
        </Column>

        <Column>
          <InfoRow>
            <Label>Joining Date</Label>
            <Value>: {employee.joining_date}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Email</Label>
            <Value>: {employee.email}</Value>
          </InfoRow>
        </Column>
      </GridContainer>
    </HeaderContainer>
  );
};

export default PageHeader;
