import React from 'react'
import PageHeader from '../../../components/SuperAdmin/PageHeader/PageHeader'
import {
    PageWrapper,
    FormGrid,
    LeftColumn,
    RightColumn,
    Field,
    Label,
    Input,
    Select,
    ButtonRow,
    SaveButton,
    CancelButton,
} from "./CompanyAddPage.styles";
import CompanyLogoUpload from '../../../components/SuperAdmin/CompanyLogoUpload/CompanyLogoUpload';
import Topbar from '../../../components/SuperAdmin/Topbar/Topbar';
function CompanyList() {
    const leftFields = [
  { label: "Company Name", placeholder: "Enter Company Name" },
  { label: "Email Id", placeholder: "Enter Email Id", type: "email" },
  { label: "Contact Number", placeholder: "Enter Contact Number" },
  { label: "Address", placeholder: "Enter Your Address" },
  { label: "Company Location", placeholder: "Location" },
];

const rightFields = [
  {
    label: "Country",
    type: "select",
    options: ["Select Country"],
  },
  {
    label: "Latitude",
    placeholder: "Enter Company Latitude",
  },
  {
    label: "Longitude",
    placeholder: "Enter Company Longitude",
  },
  {
    label: "Company Registration Date",
    type: "date",
  },
  {
    label: "Allowed Roles",
    type: "select",
    options: ["Select Role"],
  },
  {
    label: "Plan Amount Per Employee",
    placeholder: "Enter Plan Amount Per Employee",
  },
  {
    label: "Initial Payment (Optional)",
    placeholder: "Enter Initial Payment",
  },
];

    return (
        <div>
            <Topbar/>
            <PageHeader
                title="Add New Company"
                subtitle="Manage all departments within the organization."
            />
            <PageWrapper>
                <FormGrid>
                <LeftColumn>
  <CompanyLogoUpload />

  {leftFields.map((field, index) => (
    <Field key={index}>
      <Label>{field.label}</Label>
      <Input
        type={field.type || "text"}
        placeholder={field.placeholder}
      />
    </Field>
  ))}

  <ButtonRow>
    <SaveButton>Save</SaveButton>
    <CancelButton>Cancel</CancelButton>
  </ButtonRow>
</LeftColumn>
<RightColumn>
  {rightFields.map((field, index) => (
    <Field key={index}>
      <Label>{field.label}</Label>

      {field.type === "select" ? (
        <Select>
          {field.options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </Select>
      ) : (
        <Input
          type={field.type || "text"}
          placeholder={field.placeholder}
        />
      )}
    </Field>
  ))}
</RightColumn>

                </FormGrid>
            </PageWrapper>

        </div>
    )
}

export default CompanyList
