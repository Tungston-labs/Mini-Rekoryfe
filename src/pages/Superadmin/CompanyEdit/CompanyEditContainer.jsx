import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CompanyEditPage from "./CompanyEdit";
import { useUpdateCompany } from "../../../hooks/superadmin/useUpdateCompany";
import { useCompany } from "../../../hooks/superadmin/useCompany";
import PageSkeleton from "../../../components/Skeleton/PageSkeleton";

const CompanyEditContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: companyData, isLoading } = useCompany(id);
  const { mutateAsync: updateCompany, isPending } = useUpdateCompany();

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (companyData) {
      setFormData({
        company_name: companyData.company_name || "",
        email: companyData.email || "",
        contact_number: companyData.contact_number || "",
        address: companyData.address || "",
        country: companyData.country || "",
        latitude: companyData.latitude || "",
        longitude: companyData.longitude || "",
        registration_date: companyData.registration_date || "",
        allowed_roles: companyData.allowed_roles || [],
        plan_amount_per_employee:
          companyData.plan_amount_per_employee || "",
        initial_payment: companyData.initial_payment ?? "",
        logo: companyData.logo || "",
      });
    }
  }, [companyData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (selectedOptions) => {
    const selected = selectedOptions
      ? selectedOptions.map((o) => o.value)
      : [];
    setFormData((prev) => ({ ...prev, allowed_roles: selected }));
  };
  const validate = () => {
    const newErrors = {};

    if (!formData.company_name?.trim()) {
      newErrors.company_name = "Company Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async () => {
  if (!validate()) return;

  try {
    const { allowed_roles, email, logo, ...rest } = formData;

    const updateData = { ...rest };

    // ✅ Only include logo if it's a File
    if (logo instanceof File) {
      updateData.logo = logo;
    }
console.log({updateData})
// return
    await updateCompany({
      id,
      data: updateData,
    });

    navigate("/superadmin/companies");
  } catch (error) {
    console.error("Update failed", error);
  }
};




  const handleCancel = () => {
    navigate("/superadmin/companies");
  };
  if (isLoading)
    return (
      <div>
        <PageSkeleton />
      </div>
    );
  return (
    <CompanyEditPage
      formData={formData}
      handleChange={handleChange}
      handleRoleChange={handleRoleChange}
      handleSubmit={handleSubmit}
      onCancel={handleCancel}
      errors={errors}
      isPending={isPending}
      handleLogoChange={(file) =>
        setFormData((prev) => ({ ...prev, logo: file }))
      }
    />
  );
};

export default CompanyEditContainer;
