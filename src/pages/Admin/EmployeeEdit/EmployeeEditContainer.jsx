import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import EmployeeEdit from "./EmployeeEdit";
import ToggleSwitchActive from "../../../components/SuperAdmin/ui/ToggleSwitchActive";
import { useEmployee, useUpdateEmployee } from "../../../hooks/Admin/employee/useUpdateEmployee";
import { useDepartments } from "../../../hooks/Admin/department/useDepartments";
import { useNavigate } from "react-router-dom";
import { useToggleEmployeeStatus } from "../../../hooks/Admin/employee/useToggleEmployeeStatus";

function EmployeeEditContainer() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: employee, } = useEmployee(id);
    const [page, setPage] = useState(1);
    const [departments, setDepartments] = useState([]);
    const { data, isLoading } = useDepartments(page, 10);
    // const departments = data?.results || [];
    const updateMutation = useUpdateEmployee();
    const toggleStatusMutation = useToggleEmployeeStatus();
    const [formData, setFormData] = useState({
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
        is_active: true,
    });

    useEffect(() => {
        if (data?.results) {
            setDepartments((prev) => [...prev, ...data.results]);
        }
    }, [data]);

    useEffect(() => {
        if (employee) {
            setFormData({
                fullName: employee.name || "",
                email: employee.email || "",
                dob: employee.date_of_birth || "",
                address: employee.address || "",
                gender: employee.gender || "",
                joiningDate: employee.joining_date || "",
                department: employee.department_id || "",
                designation: employee.job_title || "",
                employmentType: employee.employment_type || "",
                role: employee.role || "",
                phone: employee.phone || "",
                is_active: employee.status ?? true,
                profile_pic: employee.profile_pic || "",
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const payload = {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            gender: formData.gender,
            address: formData.address,
            joining_date: formData.joiningDate,
            department: Number(formData.department),
            job_title: formData.designation,
            employment_type: formData.employmentType,
            role: formData.role,
            date_of_birth: formData.dob,
            status: formData.is_active,
        };

        updateMutation.mutate({ id, data: payload });
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <Topbar
                showBack={true}
                onBack={() => navigate("/admin/employees")}
            />
            <PageHeader
                title="Edit Profile"
                subtitle="Update employee details"
                rightContent={
                    <ToggleSwitchActive
                        value={formData.is_active}
                        onChange={(newValue) => {
                            setFormData((prev) => ({
                                ...prev,
                                is_active: newValue,
                            }));
                            toggleStatusMutation.mutate({
                                id,
                                is_active: newValue,
                            });
                        }}
                    />
                }
            />

            <EmployeeEdit
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                departments={departments}
                setPage={setPage}
                hasNext={data?.next}
            />
        </>
    );
}

export default EmployeeEditContainer;