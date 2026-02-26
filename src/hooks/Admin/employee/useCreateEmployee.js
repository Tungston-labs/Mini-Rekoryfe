import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployee } from "../../../services/Admin/employeeServices";
import { toast } from "react-hot-toast";

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEmployee,

    onSuccess: (data) => {
      toast.success(data?.message || "Employee created successfully ✅");

      // If you later have employee list
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Failed to create employee"
      );
    },
  });
};