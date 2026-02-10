import React, { useState, useEffect } from 'react';
import PageHeader from '../../../components/SuperAdmin/PageHeader/PageHeader';
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
} from "../CompanyAdd/CompanyAddPage.styles";
import CompanyLogoUpload from '../../../components/SuperAdmin/CompanyLogoUpload/CompanyLogoUpload';
import Topbar from '../../../components/SuperAdmin/Topbar/Topbar';
import { useNavigate } from 'react-router-dom';
function CompanyEditPage({ companyData, onCancel, onUpdate }) {
      const navigate = useNavigate();
    const [formState, setFormState] = useState({
        companyName: "",
        email: "",
        contactNumber: "",
        address: "",
        location: "",
        country: "",
        latitude: "",
        longitude: "",
        registrationDate: "",
        allowedRole: "",
        planAmount: "",
        initialPayment: "",
    });

    useEffect(() => {
        if (companyData) {
            setFormState({
                companyName: companyData.companyName || "",
                email: companyData.email || "",
                contactNumber: companyData.contactNumber || "",
                address: companyData.address || "",
                location: companyData.location || "",
                country: companyData.country || "",
                latitude: companyData.latitude || "",
                longitude: companyData.longitude || "",
                registrationDate: companyData.registrationDate || "",
                allowedRole: companyData.allowedRole || "",
                planAmount: companyData.planAmount || "",
                initialPayment: companyData.initialPayment || "",
            });
        }
    }, [companyData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const leftFields = [
        { label: "Company Name", name: "companyName", placeholder: "Enter Company Name" },
        { label: "Email Id", name: "email", placeholder: "Enter Email Id", type: "email" },
        { label: "Contact Number", name: "contactNumber", placeholder: "Enter Contact Number" },
        { label: "Address", name: "address", placeholder: "Enter Your Address" },
        { label: "Company Location", name: "location", placeholder: "Location" },
    ];

    const rightFields = [
        { label: "Country", name: "country", type: "select", options: ["Select Country"] },
        { label: "Latitude", name: "latitude", placeholder: "Enter Company Latitude" },
        { label: "Longitude", name: "longitude", placeholder: "Enter Company Longitude" },
        { label: "Company Registration Date", name: "registrationDate", type: "date" },
        { label: "Allowed Roles", name: "allowedRole", type: "select", options: ["Select Role"] },
        { label: "Plan Amount Per Employee", name: "planAmount", placeholder: "Enter Plan Amount Per Employee" },
        { label: "Initial Payment (Optional)", name: "initialPayment", placeholder: "Enter Initial Payment" },
    ];

    const handleSubmit = () => {
        onUpdate(formState);
    };

    return (
        <div>
             <Topbar
        showBack={true}
        onBack={() => navigate('/superadmin/companies')} 
      />
            <PageHeader
                title="Edit Company"
                subtitle="Update company details as required."
            />
            <PageWrapper>
                <FormGrid>
                    <LeftColumn>
                        <CompanyLogoUpload existingLogo={companyData?.logo} />

                        {leftFields.map((field, index) => (
                            <Field key={index}>
                                <Label>{field.label}</Label>
                                <Input
                                    type={field.type || "text"}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={formState[field.name]}
                                    onChange={handleChange}
                                />
                            </Field>
                        ))}

                        <ButtonRow>
                            <SaveButton onClick={handleSubmit}>Update</SaveButton>
                            <CancelButton onClick={onCancel}>Cancel</CancelButton>
                        </ButtonRow>
                    </LeftColumn>

                    <RightColumn>
                        {rightFields.map((field, index) => (
                            <Field key={index}>
                                <Label>{field.label}</Label>
                                {field.type === "select" ? (
                                    <Select
                                        name={field.name}
                                        value={formState[field.name]}
                                        onChange={handleChange}
                                    >
                                        {field.options.map((option, i) => (
                                            <option key={i} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                ) : (
                                    <Input
                                        type={field.type || "text"}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={formState[field.name]}
                                        onChange={handleChange}
                                    />
                                )}
                            </Field>
                        ))}
                    </RightColumn>
                </FormGrid>
            </PageWrapper>
        </div>
    );
}

export default CompanyEditPage;
