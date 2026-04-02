import api from "../../api/axios";

const BASE_URL = "/api/departments/";

export const fetchDepartments = async ({ page = 1, page_size = 10 } = {}) => {
  const res = await api.get("/api/departments/", {
    params: { page, page_size },
  });
  return res.data;
};

export const createDepartment = async (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, data[key]);
    }
  });

  const response = await api.post(BASE_URL, formData);
  return response.data;
};

export const updateDepartment = async ({ id, data }) => {
  const res = await api.patch(`/api/departments/${id}/`, data);
  return res.data;
};

export const fetchDepartmentEmployees = async ({ departmentId, page = 1, page_size = 10 }) => {
  const response = await api.get(
    `/api/departments/${departmentId}/employees`,
    {
      params: { page, page_size },
    }
  );

  return response.data;
};