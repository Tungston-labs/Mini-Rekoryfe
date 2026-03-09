import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchTotalCompanies,
  fetchExpiredCompanies,
  fetchDueCompanies,
} from "../../services/SuperAdminServices/superadminDashboardAPI";
import {
  payInvoiceAPI,
  toggleCompanyStatusAPI,   
} from "../../services/SuperAdminServices/paymentService";
import toast from "react-hot-toast";

export const useSuperAdminDashboard = ({ page = 1, pageSize = 10, days = 7,
  search = "", }) => {
  const queryClient = useQueryClient();

  const totalQuery = useQuery({
    queryKey: ["totalCompanies"],
    queryFn: fetchTotalCompanies,
  });

  const expiredQuery = useQuery({
    queryKey: ["expiredCompanies"],
    queryFn: fetchExpiredCompanies,
  });

  const dueQuery = useQuery({
    queryKey: ["dueCompanies", page, pageSize ,days, search],
    queryFn: () => fetchDueCompanies({ page, pageSize ,days,
        search,}),
  placeholderData: (prev) => prev,
  });

const payMutation = useMutation({
  mutationFn: payInvoiceAPI,
  onSuccess: (data) => {
    toast.success(data?.detail || "Invoice Paid Successfully ✅");

queryClient.invalidateQueries({
  queryKey: ["dueCompanies"],
  exact: false,
});

    queryClient.invalidateQueries({
      queryKey: ["expiredCompanies"],
    });

    queryClient.invalidateQueries({
      queryKey: ["totalCompanies"],
    });
  },
  onError: (err) => {
    toast.error(err.response?.data?.detail || "Payment failed ❌");
  },
});

const toggleMutation = useMutation({
  mutationFn: toggleCompanyStatusAPI,
  onSuccess: (data) => {
    toast.success(data?.detail || "Company status updated ✅");
 queryClient.invalidateQueries({ queryKey: ["company"] });
 queryClient.invalidateQueries({
  queryKey: ["dueCompanies"],
  exact: false,
});

    queryClient.invalidateQueries({
      queryKey: ["expiredCompanies"],
    });

    queryClient.invalidateQueries({
      queryKey: ["totalCompanies"],
    });
  },
  onError: (err) => {
    toast.error(
      err.response?.data?.detail || "Failed to update status ❌"
    );
  },
});

  return {
    totalCompanies: totalQuery.data?.total_companies || 0,
    expiredCompanies:
      expiredQuery.data?.expired_company_count || 0,

    dueCompanies: dueQuery.data?.results || [],
   totalPages: dueQuery.data?.total_pages || 0,
  currentPage: dueQuery.data?.current_page || 1,
    payInvoice: payMutation.mutate,
    isPaying: payMutation.isPending,

    toggleCompanyStatus: toggleMutation.mutate,
    isToggling: toggleMutation.isPending,

    isLoading:
      totalQuery.isLoading ||
      expiredQuery.isLoading ||
      dueQuery.isLoading,

    isError:
      totalQuery.isError ||
      expiredQuery.isError ||
      dueQuery.isError,
  };
};
