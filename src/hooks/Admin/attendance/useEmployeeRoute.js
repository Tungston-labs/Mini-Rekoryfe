// hooks/useEmployeeRoute.ts
import { useQuery } from "@tanstack/react-query";
import { getEmployeeRoute } from "../../../services/Admin/attendanceService";

export const useEmployeeRoute = ({
  employeeId,
  date,
  order = "asc",
}) => {
  return useQuery({
    queryKey: ["employeeRoute", employeeId, date, order],
    queryFn: () =>
      getEmployeeRoute({ employeeId, date, order }),

    enabled: !!employeeId && !!date,

    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};