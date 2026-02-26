import { updateDepartment } from "../../../services/Admin/departmentService";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateDepartment({ id, data }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      toast.success("Department updated successfully ✅");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Failed to update department"
      );
    },
  });
};