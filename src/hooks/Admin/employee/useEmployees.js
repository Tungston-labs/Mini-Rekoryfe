import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../../../services/Admin/employeeServices";

export const useEmployees = (filters) => {
  return useQuery({
    queryKey: [
      "employees",
      filters.page,
      filters.page_size,
      filters.search,
      filters.department,
      filters.role,
      filters.is_active,
    ],
    queryFn: () => fetchEmployees(filters),
    keepPreviousData: true,
  });
};