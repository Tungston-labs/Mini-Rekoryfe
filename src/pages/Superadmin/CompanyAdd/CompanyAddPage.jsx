import React from "react";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import {
  PageWrapper,
  FormGrid,
  LeftColumn,
  RightColumn,
  Field,
  Label,
  Input,
  ButtonRow,
  SaveButton,
  CancelButton,
  ErrorText,
  StyledSelectWrapper,
  StyledSelect,
} from "./CompanyAddPage.styles";
import CompanyLogoUpload from "../../../components/SuperAdmin/CompanyLogoUpload/CompanyLogoUpload";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import { countryOptions, roleOptions } from "./countryOptions";
import Select from "react-select";
import PageSkeleton from "../../../components/Skeleton/PageSkeleton";

function CompanyAddPage({
  formData,
  handleChange,
  handleRoleChange,
  handleSubmit,
  isPending,
  errors,
  handleCancel,
  handleLogoChange,
   isLoading
}) {
   if (isLoading) {
    return <PageSkeleton />;
  }
  return (
    <div>
      <Topbar />
      <PageHeader
        title="Add New Company"
        subtitle="Manage all departments within the organization."
      />

      <PageWrapper>
        <FormGrid>
          <LeftColumn>
       <CompanyLogoUpload
  value={formData.logo}
  onChange={handleLogoChange}
/>

            <Field>
              <Label>Company Name</Label>
              <Input
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Enter Company Name"
              />
              {errors.company_name && <ErrorText>{errors.company_name}</ErrorText>}
            </Field>

            <Field>
              <Label>Email Id</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Id"
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </Field>

            <Field>
              <Label>Contact Number</Label>
              <Input
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                placeholder="Enter Contact Number"
              />
              {errors.contact_number && <ErrorText>{errors.contact_number}</ErrorText>}
            </Field>

            <Field>
              <Label>Address</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Your Address"
              />
              {errors.address && <ErrorText>{errors.address}</ErrorText>}
            </Field>

            <Field>
              <Label>Company Location</Label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
              />
              {errors.location && <ErrorText>{errors.location}</ErrorText>}
            </Field>

            <ButtonRow>
              <SaveButton onClick={handleSubmit} disabled={isPending}>
                {isPending ? "Saving..." : "Save"}
              </SaveButton>
              <CancelButton type="button" onClick={handleCancel}>
    Cancel
  </CancelButton>
            </ButtonRow>
          </LeftColumn>

          <RightColumn>
            <Field>
              <Label>Country</Label>
              <StyledSelectWrapper>
                <Select
                  classNamePrefix="react-select"
                  options={countryOptions}
                  value={countryOptions.find(
                    (option) => option.value === formData.country
                  )}
                  onChange={(selectedOption) =>
                    handleChange({
                      target: {
                        name: "country",
                        value: selectedOption?.value || "",
                      },
                    })
                  }
                  placeholder="Search or select country"
                  isSearchable
                />
              </StyledSelectWrapper>
              {errors.country && <ErrorText>{errors.country}</ErrorText>}
            </Field>

            <Field>
              <Label>Latitude</Label>
              <Input
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                placeholder="Enter Company Latitude"
              />
              {errors.latitude && <ErrorText>{errors.latitude}</ErrorText>}
            </Field>

            <Field>
              <Label>Longitude</Label>
              <Input
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                placeholder="Enter Company Longitude"
              />
              {errors.longitude && <ErrorText>{errors.longitude}</ErrorText>}
            </Field>

           <Field>
  <Label>Company Registration Date</Label>
  <Input
    type="date"
    name="registration_date"
    min={new Date().toISOString().split("T")[0]} 
    value={formData.registration_date}
    onChange={handleChange}
  />
  {errors.registration_date && <ErrorText>{errors.registration_date}</ErrorText>}
</Field>

            <Field>
              <Label>Allowed Roles</Label>
              <StyledSelect
                classNamePrefix="react-select"
                isMulti
                name="allowed_roles"
                options={roleOptions}
                value={roleOptions.filter(option =>
                  formData.allowed_roles.includes(option.value)
                )}
                onChange={handleRoleChange}
                placeholder="Select Allowed Roles"
                isSearchable
              />

              {errors.allowed_roles && <ErrorText>{errors.allowed_roles}</ErrorText>}
            </Field>

            <Field>
              <Label>Plan Amount Per Employee</Label>
              <Input
                name="plan_amount_per_employee"
                value={formData.plan_amount_per_employee}
                onChange={handleChange}
                placeholder="Enter Plan Amount Per Employee"
              />
              {errors.plan_amount_per_employee && <ErrorText>{errors.plan_amount_per_employee}</ErrorText>}

            </Field>

            <Field>
              <Label>Initial Payment (Optional)</Label>
              <Input
                name="initial_payment"
                value={formData.initial_payment}
                onChange={handleChange}
                placeholder="Enter Initial Payment"
              />
            </Field>
          </RightColumn>
        </FormGrid>
      </PageWrapper>
    </div>
  );
}

export default CompanyAddPage;
