import api from "../../api/axios";

export const createCompany = async (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    if (key === "allowed_roles") {
      data.allowed_roles.forEach((role) => {
        formData.append("allowed_roles", role);
      });
    } else {
      formData.append(key, data[key]);
    }
  });

  const response = await api.post(
    "/api/superadmin/companies/",
    formData
  );

  return response.data;
};

export const getCompanies = async ({ search, page, pageSize }) => {
  const response = await api.get("/api/superadmin/companies/", {
    params: {
      ...(search && { search }),
      page,
      page_size: pageSize,
    },
  });

  return response.data;
};

export const getCompanyById = async (id) => {
  const response = await api.get(
    `/api/superadmin/companies/${id}/`
  );
  return response.data;
};

export const updateCompany = async ({ id, data }) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (key === "allowed_roles" && Array.isArray(value)) {
      value.forEach((role) => formData.append("allowed_roles", role));
    } else if (value !== undefined && value !== null) {
      // If the value is a File (logo) it will be appended as file automatically
      formData.append(key, value);
    }
  });

  // axios will set the correct multipart boundary header automatically,
  // so don't manually set Content-Type here.
  const response = await api.patch(`/api/superadmin/companies/${id}/`, formData);

  return response.data;
};

export const toggleCompanyStatus = async (id) => {
  const response = await api.patch(
    `/api/superadmin/companies/${id}/status/`
  );
  return response.data;
};

export const deleteCompany = async (id) => {
  const response = await api.delete(
    `/api/superadmin/companies/${id}/`
  );

  return response.data;
};
