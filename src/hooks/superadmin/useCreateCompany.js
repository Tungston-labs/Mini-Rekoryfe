import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompany } from "../../services/companyService";

export const useCreateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries(["companies"]);
    },
  });
};
