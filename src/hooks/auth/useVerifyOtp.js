import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "../../services/authService";

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};