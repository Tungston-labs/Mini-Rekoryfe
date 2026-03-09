import React, { useMemo, useState } from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/Admin/PageHeader/PageHeader";
import { useParams } from "react-router-dom";
import LocationDetails from "./LocationDetails";
import { useEmployeeRoute } from "../../../hooks/Admin/attendance/useEmployeeRoute";
import {useEmployee} from "../../../hooks/Admin/employee/useUpdateEmployee"
const LocationDetailsContainer = () => {
    const { id } = useParams();

    const [date] = useState("2026-02-26");
    const { data, isLoading, isError, error } =
        useEmployeeRoute(id, date);
  const {
    data: employee,
    isLoading: employeeLoading,
  } = useEmployee(id);

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
            {isLoading && <p style={{ padding: 20 }}>Loading route...</p>}
            {isError && (
                <p style={{ padding: 20, color: "red" }}>
                    {error?.response?.data?.message || error.message}
                </p>
            )}

            {!isLoading && !isError && (
                <LocationDetails routeData={routeData} />
            )}
        </>
    );
};

export default LocationDetailsContainer;