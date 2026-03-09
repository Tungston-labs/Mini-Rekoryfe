import api from "../../api/axios";

export const getDashboardSummary = async () => {
  const response = await api.get("/api/companies/dashboard/summary");
  return response.data;
};