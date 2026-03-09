import { useQuery } from "@tanstack/react-query";
import { getCompanyAttendance } from "../../../services/Admin/attendanceService";

export const useCompanyAttendance = ({
  date,
  page,
  department,
  page_size,
  search,
}) => {
  return useQuery({
    queryKey: [
      "company-attendance",
      date,
      page,
      department,
      page_size,
      search,
    ],
    queryFn: async () => {
      const res = await getCompanyAttendance({
        date,
        page,
        department,
        page_size,
        search,
      });
      return {
        employees: res?.results?.data || [],
        totalPages: res?.total_pages || 1,
        totalItems: res?.total_items || 0,
      };
    },
    keepPreviousData: true,
    enabled: !!date,
  });
};