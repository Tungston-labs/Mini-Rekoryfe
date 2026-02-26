import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchInvoices, payInvoiceAPI, sendInvoiceAPI, downloadInvoiceAPI } from "../../services/SuperAdminServices/paymentService";
import toast from "react-hot-toast";


export const useInvoicesQuery = (companyId, year) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["invoices", companyId, year],
    queryFn: () => fetchInvoices(companyId, year),
    select: (data) =>
      data.map((item) => ({
        id: item.id,
        month: item.month,
        amount: `${item.amount} INR`,
        status: item.status,
        paidDate: item.paid_at ? item.paid_at.split("T")[0] : "-",
      })),
    staleTime: 5 * 60 * 1000,
  });

const payMutation = useMutation({
  mutationFn: (invoiceId) => payInvoiceAPI(invoiceId),
  onSuccess: () => {
    toast.success("Invoice marked as paid ✅");
    queryClient.invalidateQueries(["invoices", companyId, year]);
  },
  onError: (err) => {
    toast.error(err.response?.data?.detail || "Error paying invoice ❌");
  },
  
});


const sendMutation = useMutation({
  mutationFn: (invoiceId) => sendInvoiceAPI(invoiceId),
  onSuccess: (_, invoiceId) => {
    toast.success(`Invoice ${invoiceId} sent successfully `);
  },
  onError: (err) => {
    toast.error(err.response?.data?.message || "Error sending invoice ❌");
  },
});


 const downloadInvoice = async (invoiceId) => {
  try {
    const blob = await downloadInvoiceAPI(invoiceId);
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `invoice_${invoiceId}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.success("Invoice downloaded successfully ");
  } catch (err) {
    toast.error("Failed to download invoice ❌");
  }
};


  return {
    invoices: data || [],
    loading: isLoading,
    payInvoice: payMutation.mutate,
    sendInvoice: sendMutation.mutate,
    downloadInvoice,
  };
};
