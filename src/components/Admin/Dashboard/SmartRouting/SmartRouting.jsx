import React, { useState } from "react";
import {
  Wrapper,
  LeftPanel,
  RightPanel,
  Header,
  Title,
  Subtitle,
  Filters,
  FilterButton,
  EmployeeList,
  EmployeeCard,
  Avatar,
  Info,
  Name,
  Status,
  Arrow,
  MapContainer,
} from "./SmartRouting.styles";

import { FiChevronRight } from "react-icons/fi";

const employeesData = [
  { id: 1, name: "Aditi Sharma", status: "Travelling", time: "09:00AM" },
  { id: 2, name: "Joel Mathew", status: "Travelling", time: "09:00AM" },
  { id: 3, name: "Riya Thomas", status: "Onsite", time: "09:00AM" },
  { id: 4, name: "Rakesh R", status: "Idle", time: "" },
];

const SmartRouting = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(1);

  return (
    <Wrapper>
      <LeftPanel>
        <Header>
          <Title>Smart Routing, Fri, Feb 2026</Title>
          <Subtitle>You can track locations of your employees.</Subtitle>
        </Header>

        <Filters>
          {["All", "Active", "Not Active"].map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </Filters>

        <EmployeeList>
          {employeesData.map((emp) => (
            <EmployeeCard
              key={emp.id}
              active={selected === emp.id}
              onClick={() => setSelected(emp.id)}
            >
              <Avatar src="https://i.pravatar.cc/40" />

              <Info>
                <Name>{emp.name}</Name>
                <Status>
                  {emp.time && `${emp.time}, `} {emp.status}
                </Status>
              </Info>

              <Arrow>
                <FiChevronRight />
              </Arrow>
            </EmployeeCard>
          ))}
        </EmployeeList>
      </LeftPanel>
      <RightPanel>
        <MapContainer>
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://maps.google.com/maps?q=washington&t=&z=10&ie=UTF8&iwloc=&output=embed"
          />
        </MapContainer>
      </RightPanel>
    </Wrapper>
  );
};

export default SmartRouting;
