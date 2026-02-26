import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDepartments, createDepartment } from "../../../services/Admin/departmentService";
import { toast } from "react-hot-toast";

export const useDepartments = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: fetchDepartments,
    staleTime: 5 * 60 * 1000, 
  });
};

export const useCreateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createDepartment(data), 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
        toast.success("Department created successfully ✅");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Failed to create department"
      );

    },
  });
};