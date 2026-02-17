import React, { useState } from "react";
import { useCreateCompany } from "../../../hooks/superadmin/useCreateCompany";
import CompanyAddPage from "./CompanyAddPage";
import toast from "react-hot-toast";

const CompanyAddContainer = () => {
  const { mutate, isPending } = useCreateCompany();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    company_name: "",
    email: "",
    contact_number: "",
    address: "",
    location: "",
    country: "",
    latitude: "",
    longitude: "",
    registration_date: "",
    allowed_roles: [],
    plan_amount_per_employee: "",
    initial_payment: "",
    logo: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogoChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      logo: file,
    }));
  };


  const handleRoleChange = (selectedOptions) => {
    const selected = selectedOptions ? selectedOptions.map(opt => opt.value) : [];

    setFormData(prev => ({
      ...prev,
      allowed_roles: selected,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.logo) {
      newErrors.logo = "Company logo is required";
    }
    if (!formData.company_name.trim())
      newErrors.company_name = "Company name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.contact_number.trim())
      newErrors.contact_number = "Contact number is required";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.location.trim())
      newErrors.location = "Location is required";

    if (!formData.country)
      newErrors.country = "Country is required";

    if (!formData.latitude)
      newErrors.latitude = "Latitude is required";

    if (!formData.longitude)
      newErrors.longitude = "Longitude is required";

    if (!formData.registration_date) {
      newErrors.registration_date = "Registration date is required";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(formData.registration_date);

      if (selectedDate < today) {
        newErrors.registration_date = "Past date not allowed. Please select a future date.";
      }
    }

    if (formData.allowed_roles.length === 0)
      newErrors.allowed_roles = "Select at least one role";

    if (!formData.plan_amount_per_employee)
      newErrors.plan_amount_per_employee =
        "Plan amount is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
  if (!validate()) return;

  mutate(formData, {
    onSuccess: (response) => {
      toast.success("Company created successfully!");
      handleCancel(); 
    },
    onError: (error) => {
      if (error.response?.data?.email) {
        setErrors((prev) => ({
          ...prev,
          email: "Email already exists",
        }));
      } else {
        toast.error(error.response?.data?.detail || "Failed to create company");
      }
    },
  });
};

  const initialFormData = {
    company_name: "",
    email: "",
    contact_number: "",
    address: "",
    location: "",
    country: "",
    latitude: "",
    longitude: "",
    registration_date: "",
    allowed_roles: [],
    plan_amount_per_employee: "",
    initial_payment: "",
  };



  const handleCancel = () => {
    setFormData(initialFormData);
    setErrors({});
  };


  return (
    <CompanyAddPage
      formData={formData}
      handleChange={handleChange}
      handleRoleChange={handleRoleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      isPending={isPending}
      errors={errors}
      handleLogoChange={handleLogoChange}
    />
  );
};

export default CompanyAddContainer;
