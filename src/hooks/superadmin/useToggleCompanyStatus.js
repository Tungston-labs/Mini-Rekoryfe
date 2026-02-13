import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleCompanyStatus } from "../api/companyService";

export const useToggleCompanyStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleCompanyStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["companies"]);
    },
  });
};
