import api from "../../api/axios";

export const getDashboardSummary = async () => {
  const response = await api.get("/api/companies/dashboard/summary");
  return response.data;
};

export const getEmployees = async (status = "inactive") => {
  try {
    const res = await api.get(`/api/attendance/employees/list/`, {
      params: { status },
    });
    return res.data;6
  } catch (error) {
    console.error("❌ Error fetching employees:", error);
    throw error;
  }
};