import { useQuery } from "@tanstack/react-query";
import { getCompanyById } from "../../services/SuperAdminServices/companyService";

export const useCompany = (id) => {
  return useQuery({
    queryKey: ["company", id],
    queryFn: () => getCompanyById(id),
    enabled: !!id,
  });
};
