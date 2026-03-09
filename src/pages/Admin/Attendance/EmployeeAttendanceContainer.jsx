import { useState, useEffect, useMemo } from "react";
import { useCompanyAttendance } from "../../../hooks/Admin/employee/useCompanyAttendance";

const formatTime = (isoString) => {
  if (!isoString) return "00:00 AM";

  const date = new Date(isoString);
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const isDifferentDate = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return false;

  return (
    new Date(checkIn).toDateString() !==
    new Date(checkOut).toDateString()
  );
};

const useEmployeeAttendance = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const pageSize = 10;

  const { data, isLoading ,isFetching } = useCompanyAttendance({
    date,
    page,
    department,
    page_size: pageSize,
    search,
  });

  useEffect(() => {
    setPage(1);
  }, [department, date, search]);

  const employees = useMemo(() => {
    if (!data?.employees) return [];

    return data.employees.map((emp) => ({
      employee_id: emp.employee_id,
      employee_name: emp.employee_name,
      avatar:
        emp.employee_image ||
        "https://via.placeholder.com/40",
      check_in: formatTime(emp.first_punch_in),
      check_out: formatTime(emp.last_punch_out),
      hours: emp.total_hours
        ? `${emp.total_hours} hr`
        : "0.00 hr",
      location: emp.location || "--------",
      isCrossDay: isDifferentDate(
        emp.first_punch_in,
        emp.last_punch_out
      ),
    }));
  }, [data]);

  return {
    employees,
    totalPages: data?.totalPages || 1,
    isLoading,
      isFetching,
    page,
    setPage,
    search,
    setSearch,
    department,
    setDepartment,
    date,
    setDate,
  };
};

export default useEmployeeAttendance;