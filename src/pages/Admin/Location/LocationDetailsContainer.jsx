import React, { useState } from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/Admin/PageHeader/PageHeader";
import { useParams,useSearchParams } from "react-router-dom";
import LocationDetails from "./LocationDetails";
import { useEmployeeRoute } from "../../../hooks/Admin/attendance/useEmployeeRoute";
import { useEmployee } from "../../../hooks/Admin/employee/useUpdateEmployee";
import styled from "styled-components";


const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 40px;
  gap: 10px;
`;

const DateLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #333;
`;

const DateInput = styled.input`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

const LocationDetailsContainer = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

const queryDate = searchParams.get("date");

const employeeId = Number(id);

const [date, setDate] = useState(
  queryDate || new Date().toISOString().split("T")[0]
);

  const { data, isLoading, isError, error } = useEmployeeRoute( {employeeId: id, date});
  const { data: employee, isLoading: employeeLoading } = useEmployee(id);

  const routeData = data?.route?.map((point, index) => ({
    id: index + 1,
    title: point.place_name,
    loc: `${point.latitude}, ${point.longitude}`,
    time: new Date(point.recorded_at).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    type: point.type,
    status:
      point.type === "punch_out"
        ? "error"
        : point.type === "punch_in"
        ? "active"
        : "pending",
  })) || [];

  return (
    <>
      <Topbar />
      <PageHeader employee={employee} />

      <DateContainer>
        <DateLabel htmlFor="date-picker">Select Date:</DateLabel>
        <DateInput
          id="date-picker"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
        />
      </DateContainer>

      {isLoading && <p style={{ padding: 20 }}>Loading route...</p>}
      {isError && (
        <p style={{ padding: 20, color: "red" }}>
          {error?.response?.data?.message || error.message}
        </p>
      )}

      {!isLoading && !isError && <LocationDetails routeData={routeData} />}
    </>
  );
};

export default LocationDetailsContainer;