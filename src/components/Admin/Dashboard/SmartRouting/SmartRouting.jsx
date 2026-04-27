import React, { useState,useEffect } from "react";
import useEmployees from "../../../../hooks/Admin/dashboard/useEmployees";
import {
  Wrapper,
  LeftPanel,
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
} from "./SmartRouting.styles";
import { MdLocationDisabled } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import PageSkeleton from "../../../Skeleton/PageSkeleton";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SmartRouting = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
const navigate = useNavigate();
  const statusMap = {
    All: "",
    Active: "active",
    "Not Active": "inactive",
  };
  const formatTime = (time) => {
    if (!time) return "";

    const date = new Date(time);

    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };


  const { employees, loading } = useEmployees(statusMap[activeFilter]);

    useEffect(() => {
  if (employees.length > 0 && selected === null) {
    setSelected(employees[0].id);
  }
}, [employees]);
  return (
    <Wrapper>
      <LeftPanel>
        <Header>
          <Title>
            Smart Routing,{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              year: "numeric",
            })}
          </Title>
          <Subtitle>You can track locations of your employees.</Subtitle>
        </Header>

        {/* Filters */}
        <Filters>
          {["All", "Active", "Not Active"].map((filter) => (
            <FilterButton
              key={filter}
              $active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </Filters>

        {/* Employee List */}
        <EmployeeList>
          {loading ? (
            <div> <PageSkeleton /> </div>
          ) : employees.length === 0 ? (
            <p>No employees found</p>
          ) : (
            employees.map((emp) => (
              <EmployeeCard
                key={emp.id}
                $active={selected === emp.id}
             onClick={() => {
  setSelected(emp.id);
  navigate(`/admin/employee/location/${emp.id}`);
}}
              >
                {emp.profile_pic ? (
                  <Avatar src={emp.profile_pic} />
                ) : (
                  <FaUserCircle size={40} color="#d3d4d4" />
                )}

                <Info>
                  <Name>{emp.name}</Name>
                  <Status $active={!!emp.punch_in_time}>
                    {emp.punch_in_time ? (
                      `${formatTime(emp.punch_in_time)}, Active`
                    ) : (
                      <>
                        <MdLocationDisabled style={{ marginRight: "5px" }} />
                        Not Active
                      </>
                    )}
                  </Status>
                </Info>

                <Arrow>
                  <FiChevronRight />
                </Arrow>
              </EmployeeCard>
            ))
          )}
        </EmployeeList>
      </LeftPanel>
      {/* <RightPanel>
        <MapContainer>
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://maps.google.com/maps?q=washington&t=&z=10&ie=UTF8&iwloc=&output=embed"
          />
        </MapContainer>
      </RightPanel> */}
    </Wrapper>
  );
};

export default SmartRouting;