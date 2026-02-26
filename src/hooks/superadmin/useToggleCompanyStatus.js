import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleCompanyStatus } from "../../services/SuperAdminServices/paymentService";

export const useToggleCompanyStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleCompanyStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["companies"]);
    },
  });
};
