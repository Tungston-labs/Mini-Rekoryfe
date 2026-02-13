import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCompany } from "../../services/companyService";

export const useUpdateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCompany,

    onSuccess: (updatedCompany, variables) => {
      const id = variables.id;
      queryClient.setQueryData(["company", id], updatedCompany);
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });
};
