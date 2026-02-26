import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../../../services/Admin/employeeServices";

export const useEmployees = (filters) => {
  return useQuery({
    queryKey: ["employees", filters],
    queryFn: () => fetchEmployees(filters),
    keepPreviousData: true, 
  });
};