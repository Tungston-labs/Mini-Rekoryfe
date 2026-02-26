import api from "../../api/axios";

export const fetchInvoices = async (companyId, year) => {
  const res = await api.get(`/api/billing/company/${companyId}/invoices/`, {
    params: { year },
  });
  return res.data;
};

export const payInvoiceAPI = async (invoiceId) => {
  const res = await api.patch(`/api/billing/invoice/${invoiceId}/pay/`);
  return res.data;
};

export const sendInvoiceAPI = async (invoiceId) => {
  const res = await api.post(`/api/billing/invoice/${invoiceId}/send/`);
  return res.data;
};
export const downloadInvoiceAPI = async (invoiceId) => {
  const res = await api.get(`/api/billing/invoice/${invoiceId}/download/`, {
    responseType: "blob", 
  });
  return res.data;
};

export const toggleCompanyStatusAPI = async ({
  companyId,
  action,
}) => {
  const res = await api.patch(
    `/api/billing/company/${companyId}/toggle/`,
    { action }
  );

  return res.data;
};

