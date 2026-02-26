import { toggleEmployeeStatus } from "../../../services/Admin/employeeServices";
import {  useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useToggleEmployeeStatus = () => {
  return useMutation({
    mutationFn: toggleEmployeeStatus,
    onSuccess: (data) => {
      toast.success(data.message || "Status updated ✅");
    },
    onError: () => {
      toast.error("Failed to update status ❌");
    },
  });
};