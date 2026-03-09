import api from "../../api/axios";

export const fetchEmployees = async ({
  page = 1,
  page_size = 10,
  search = "",
  department = "",
  role = "",
  is_active,
}) => {
  const res = await api.get("/api/employee/", {
    params: {
      page,
      page_size,
      search,
      department,
      role,
      is_active,
    },
  });

  return res.data;
};

export const createEmployee = async (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const res = await api.post("/api/employee/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};


export const fetchEmployeeById = async (id) => {
  const res = await api.get(`/api/employee/${id}/`);
  return res.data;
};

export const updateEmployee = async ({ id, data }) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });

  const res = await api.patch(`/api/employee/${id}/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

export const toggleEmployeeStatus = async ({ id, is_active }) => {
  const res = await api.patch(`/api/employee/${id}/status/`, {
    is_active,
  });

  return res.data;
};