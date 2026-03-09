import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import { useCreateEmployee } from "../../../hooks/Admin/employee/useCreateEmployee";
import { useDepartments } from "../../../hooks/Admin/department/useDepartments";

function EmployeeFormContainer() {
  const createEmployeeMutation = useCreateEmployee();
  const { data, isLoading: deptLoading } = useDepartments();
  const departments = data?.results || [];
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    avatar: null,
    avatarPreview: "",
    fullName: "",
    email: "",
    dob: "",
    address: "",
    gender: "",
    joiningDate: "",
    department: "",
    designation: "",
    employmentType: "",
    role: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender.toLowerCase(),
      address: formData.address,
      joining_date: formData.joiningDate,
      department: Number(formData.department),
      job_title: formData.designation,
      employment_type: formData.employmentType
        .toLowerCase()
        .replace(" ", "_"),
      role: formData.role.toLowerCase(),
      date_of_birth: formData.dob,
      profile_pic: formData.avatar,
    };

    createEmployeeMutation.mutate(payload, {
      onSuccess: () => {
        setFormData({
          avatar: "",
          fullName: "",
          email: "",
          dob: "",
          address: "",
          gender: "",
          joiningDate: "",
          department: "",
          designation: "",
          employmentType: "",
          role: "",
          phone: "",
        });
        setErrors({});
      },
      onError: (error) => {
        if (error?.response?.data) {
          setErrors(error.response.data);
        }
      },
    });
  };

  const handleCancel = () => {
    setFormData({
      avatar: "",
      avatarPreview: "",
      fullName: "",
      email: "",
      dob: "",
      address: "",
      gender: "",
      joiningDate: "",
      department: "",
      designation: "",
      employmentType: "",
      role: "",
      phone: "",
    });
    setErrors({});
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        avatar: file,
        avatarPreview: URL.createObjectURL(file),
      }));
    }
  };
  if (deptLoading || createEmployeeMutation.isPending) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
        {/* <p>Loading...</p> */}
      </div>
    );
  }
  return (
    <>
      <Topbar />
      <PageHeader
        title="Add New Employee"
        subtitle="Create a complete employee profile with accurate details and role assignments."
      />

      <EmployeeForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        errors={errors}
        handleImageUpload={handleImageUpload}
        isLoading={createEmployeeMutation.isPending}
        departments={departments}
      />
    </>
  );
}

export default EmployeeFormContainer;