import { useQuery } from "@tanstack/react-query";
import { getEmployeeRoute } from "../../../services/Admin/attendanceService";

export const useEmployeeRoute = (employeeId, date) => {
  return useQuery({
    queryKey: ["employeeRoute", employeeId, date],
    queryFn: () => getEmployeeRoute(employeeId, date),
    enabled: !!employeeId && !!date,
  });
};