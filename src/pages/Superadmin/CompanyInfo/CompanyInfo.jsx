import React from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { useCompany } from "../../../hooks/superadmin/useCompany";
import PaymentHistoryContainer from "../../../components/SuperAdmin/plan/PaymentHistoryContainer";
import PageSkeleton from "../../../components/Skeleton/PageSkeleton";

function CompanyInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
const companyId = Number(id);
  const { data: company, isLoading, error } = useCompany(id);

  if (isLoading) return <p><PageSkeleton/></p>;
  if (error) return <p>Error loading company</p>;

  const companyInfoFields = [
    { label: "Company Name", value: company?.company_name },
    { label: "Address", value: company?.address },
    { label: "Latitude", value: company?.latitude },
    { label: "Longitude", value: company?.longitude },
    { label: "Email Id", value: company?.email },
    { label: "Country", value: company?.country },
    { label: "Contact Number", value: company?.contact_number },
    { label: "Company Registration Date", value: company?.registration_date },
    { label: "Allowed Roles", value: company?.allowed_roles?.join(", ") },
    { label: "Plan Amount Per Employee", value: company?.plan_amount_per_employee },
    { label: "Initial Payment", value: company?.initial_payment },
  ];

  return (
    <div>
      <Topbar
        showBack={true}
        onBack={() => navigate("/superadmin/companies")}
      />
      <PageHeader
        title="Company Info"
        subtitle="View company details"
        rightContent={
          <ToggleSwitch
            value={company?.is_active}
            onChange={() => { }}
          />
        }
      />
      <PageWrapper>
        <AvatarWrapper>
          <Avatar
            src={company?.logo}
            alt="Company Logo"
          />
        </AvatarWrapper>
        <FormGrid>
          {companyInfoFields.map((item, index) => (
            <Field key={index}>
              <Label>{item.label}</Label>
              <Input value={item.value || "-"} readOnly />
            </Field>
          ))}
        </FormGrid>
      </PageWrapper>
<PaymentHistoryContainer companyId={companyId} />
    </div>
  );
}

export default CompanyInfo;
