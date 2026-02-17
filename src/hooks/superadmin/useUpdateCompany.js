import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCompany } from "../../services/companyService";

export const useUpdateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCompany,

    onSuccess: (response, variables) => {
      const id = variables.id;
      queryClient.setQueryData(["company", id], response);
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });
};
