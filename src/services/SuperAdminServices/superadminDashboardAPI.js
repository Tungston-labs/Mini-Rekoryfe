import api from "../../api/axios";


export const fetchTotalCompanies = async () => {
  const res = await api.get("/api/superadmin/companies/count/");
  return res.data;
};

export const fetchExpiredCompanies = async () => {
  const res = await api.get("/api/billing/expired-companies/count/");
  return res.data;
};

export const fetchDueCompanies = async ({
  page,
  pageSize,
  days,
  search,
}) => {
  const res = await api.get("/api/billing/due-companies/", {
    params: {
      page,
      page_size: pageSize,
      days,
      search,
    },
  });

  return res.data;
};

