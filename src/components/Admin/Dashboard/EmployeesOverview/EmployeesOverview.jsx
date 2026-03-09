import React from "react";
import { useNavigate } from "react-router-dom";
import useDashboardSummary from "../../../../hooks/Admin/dashboard/useDashboardSummary";
import {
  Wrapper,
  Header,
  Title,
  Subtitle,
  Cards,
  Card,
  Left,
  IconBox,
  CardTitle,
  Count,
  Right,
  AddButton,
} from "./EmployeesOverview.styles";

import { FiUsers, FiPlus } from "react-icons/fi";

const EmployeesOverview = () => {
  const navigate = useNavigate();
  const { summary, loading, error } = useDashboardSummary();

  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    year: "numeric",
  });

  const handleAddClick = (title) => {
    if (title === "Total Employees") {
      navigate("/admin/employee/add");
    } else if (title === "Total Departments") {
      navigate("/admin/department");
    }
  };

  const data = [
    {
      title: "Total Employees",
      value: summary?.total_employees || 0,
      showAdd: true,
    },
    {
      title: "Total Departments",
      value: summary?.total_departments || 0,
      showAdd: true,
    },
    {
      title: "Present Today",
      value: summary?.present_today || 0,
      showAdd: false,
    },
    {
      title: "Absent Today",
      value: summary?.absent_today || 0,
      showAdd: false,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Wrapper>
      <Header>
        <Title>Employees Overview, {formattedDate}</Title>
        <Subtitle>You can track locations of your employees.</Subtitle>
      </Header>

      <Cards>
        {data.map((item, index) => (
          <Card key={index}>
            <Left>
              <IconBox>
                <FiUsers size={20} />
              </IconBox>
              <div>
                <CardTitle>{item.title}</CardTitle>
                <Count>{item.value}</Count>
              </div>
            </Left>

            {item.showAdd && (
              <Right>
                <AddButton onClick={() => handleAddClick(item.title)}>
                  <FiPlus />
                </AddButton>
              </Right>
            )}
          </Card>
        ))}
      </Cards>
    </Wrapper>
  );
};

export default EmployeesOverview;