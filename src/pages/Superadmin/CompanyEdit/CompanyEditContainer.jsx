import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CompanyEditPage from "./CompanyEditPage";
import { useUpdateCompany } from "../../../hooks/superadmin/useUpdateCompany";
import { useCompany } from "../../../hooks/superadmin/useCompany";

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
        companyName: companyData.company_name || "",
        email: companyData.email || "",
        contactNumber: companyData.contact_number || "",
        address: companyData.address || "",
        country: companyData.country || "",
        latitude: companyData.latitude || "",
        longitude: companyData.longitude || "",
        registrationDate: companyData.registration_date || "",
        allowedRole: companyData.allowed_roles || [],
        planAmount: companyData.plan_amount_per_employee || "",
        initialPayment: companyData.initial_payment || "",
      });
    }
  }, [companyData]);

  // --------------------------
  // Handlers
  // --------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (selectedOptions) => {
    const selected = selectedOptions
      ? selectedOptions.map((o) => o.value)
      : [];
    setFormData((prev) => ({ ...prev, allowedRole: selected }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";

    if (!formData.email)
      newErrors.email = "Email is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await updateCompany({
        id,
        data: {
          company_name: formData.companyName,
          email: formData.email,
          contact_number: formData.contactNumber,
          address: formData.address,
          country: formData.country,
          latitude: formData.latitude,
          longitude: formData.longitude,
          registration_date: formData.registrationDate,
          allowed_roles: formData.allowedRole,
          plan_amount_per_employee: formData.planAmount,
          initial_payment: formData.initialPayment,
        },
      });

      navigate("/superadmin/companies");

    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const handleCancel = () => {
    navigate("/superadmin/companies");
  };

  // --------------------------
  // Loading State
  // --------------------------

  if (isLoading) return <div>Loading...</div>;

  return (
    <CompanyEditPage
      formData={formData}
      handleChange={handleChange}
      handleRoleChange={handleRoleChange}
      handleSubmit={handleSubmit}
      onCancel={handleCancel}
      errors={errors}
      isSubmitting={isPending}
    />
  );
};

export default CompanyEditContainer;
