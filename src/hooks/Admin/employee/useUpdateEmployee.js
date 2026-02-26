import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchEmployeeById, updateEmployee } from "../../../services/Admin/employeeServices";
import { toast } from "react-hot-toast";

export const useEmployee = (id) => {
  return useQuery({
    queryKey: ["employee", id],
    queryFn: () => fetchEmployeeById(id),
    enabled: !!id,
  });
};

export const useUpdateEmployee = () => {
  return useMutation({
    mutationFn: updateEmployee,
    onSuccess: () => {
      toast.success("Employee updated successfully ✅");
    },
    onError: () => {
      toast.error("Failed to update employee ❌");
    },
  });
};