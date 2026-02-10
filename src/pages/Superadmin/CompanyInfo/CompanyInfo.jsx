import React, { useState } from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import ToggleSwitch from "../../../components/SuperAdmin/ui/ToggleSwitch";
import {
  PageWrapper,
  FormGrid,
  Field,
  Label,
  Input,
  Avatar,
  AvatarWrapper,
} from "./CompanyInfo.styles";
import PaymentHistory from "../../../components/SuperAdmin/plan/PaymentHistory";

function CompanyInfo() {
  const [enabled, setEnabled] = useState(false);

const companyInfoFields = [
  { label: "Company Name", value: "InfoTech" },
  { label: "Address", value: "ernakulam" },
  { label: "Latitude", value: "12.21" },
  { label: "Email Id", value: "dilshimap@gmail.com" },
  { label: "Company Location", value: "kochi" },
  { label: "Country", value: "India" },
  { label: "Contact Number", value: "+919087654320" },
  { label: "Longitude", value: "10.21" },
  { label: "Company Registration Date", value: "2024-05-01" },
  { label: "Allowed Roles", value: "Admin, HR, Employee" },
  { label: "Plan Amount Per Employee", value: "500" },
  { label: "Initial Payment (Optional)", value: "1000" },
];

  return (
    <div>
      <Topbar />

      <PageHeader
        title="Super Admin"
        subtitle="Manage all departments within the organization."
        rightContent={
          <ToggleSwitch value={enabled} onChange={setEnabled} />
        }
      />

      <PageWrapper>
        <AvatarWrapper>
          <Avatar
            src="https://via.placeholder.com/80"
            alt="Company Logo"
          />
        </AvatarWrapper>

   <FormGrid>
  {companyInfoFields.map((item, index) => (
    <Field key={index}>
      <Label>{item.label}</Label>
      <Input value={item.value} readOnly />
    </Field>
  ))}
</FormGrid>

      </PageWrapper>

      <PaymentHistory />
    </div>
  );
}

export default CompanyInfo;
