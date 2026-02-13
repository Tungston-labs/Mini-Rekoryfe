import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompany } from "../../services/companyService";

export const useDeleteCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCompany,

    onSuccess: () => {
      // Refetch company list after delete
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });
};
