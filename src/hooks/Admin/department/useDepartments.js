import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDepartments, createDepartment,fetchDepartmentEmployees } from "../../../services/Admin/departmentService";
import { toast } from "react-hot-toast";

export const useDepartments = (page = 1, page_size = 10) => {
  return useQuery({
    queryKey: ["departments", page, page_size],
    queryFn: () => fetchDepartments({ page, page_size }),
    keepPreviousData: true,
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

export const useDepartmentEmployees = (
  departmentId,
  page = 1,
  page_size = 10
) => {
  return useQuery({
    queryKey: ["department-employees", departmentId, page, page_size],
    queryFn: () =>
      fetchDepartmentEmployees({ departmentId, page, page_size }),
    enabled: !!departmentId, // prevent call if no ID
    keepPreviousData: true,
  });
};