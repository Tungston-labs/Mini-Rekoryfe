import React from "react";
import { useNavigate } from "react-router-dom";
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

  const data = [
    { title: "Total Employees", value: "50", showAdd: true },
    { title: "Total Departments", value: "05", showAdd: true },
    { title: "Present Today", value: "46", showAdd: false },
    { title: "Employees On Leave", value: "04", showAdd: false },
  ];

  const now = new Date();

  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    year: "numeric",
  });

  // Click handler for Add buttons
  const handleAddClick = (title) => {
    if (title === "Total Employees") {
      navigate("/admin/employee/add");
    } else if (title === "Total Departments") {
      navigate("/admin/department");
    }
  };

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