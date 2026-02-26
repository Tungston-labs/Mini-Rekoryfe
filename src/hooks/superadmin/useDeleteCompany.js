import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompany } from "../../services/SuperAdminServices/companyService";

export const useDeleteCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCompany,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });
};
