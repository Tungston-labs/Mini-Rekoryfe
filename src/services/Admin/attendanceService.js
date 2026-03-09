import axios from "../../api/axios";

export const getCompanyAttendance = async ({
  date,
  page = 1,
  department,
  page_size = 10,
  search = "",
}) => {
  const params = {
    date,
    page,
    page_size,
    search,
  };

  if (department) {
    params.department = department;
  }

  const response = await axios.get(
    "/api/attendance/employees/",
    { params }
  );

  return response.data;
};

export const getEmployeeRoute = async (employeeId, date) => {
  const response = await axios.get(
    `/api/attendance/employees/${employeeId}/route/`,
    {
      params: { date },
    }
  );

  return response.data;
};