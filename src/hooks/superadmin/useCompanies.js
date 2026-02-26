import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../services/SuperAdminServices/companyService";

export const useCompanies = (search, page, pageSize) => {
  return useQuery({
    queryKey: ["companies", { search, page, pageSize }],
    queryFn: getCompanies,
    keepPreviousData: true, 
  });
};
