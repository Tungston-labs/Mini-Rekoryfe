import React, { useState } from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import AddDepartmentModal from "../../../components/Admin/Department/AddDepartment/AddDepartmentModal";
import DepartmentUI from "./Department";
import EditDepartmentModal from "../../../components/Admin/Department/EditDepartmentModal/EditDepartmentModal";
import { useDepartments, useCreateDepartment,useDepartmentEmployees } from "../../../hooks/Admin/department/useDepartments";
import { useUpdateDepartment } from "../../../hooks/Admin/department/useUpdateDepartment";

import PageSkeleton from "../../../components/Skeleton/PageSkeleton";

const DepartmentContainer = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading } = useDepartments(page, pageSize);
  const departments = data?.results || [];
  const totalPages = data?.total_pages || 1;

  const createMutation = useCreateDepartment();
  const updateMutation = useUpdateDepartment();

const { data: employeeData, isLoading: empLoading } =
  useDepartmentEmployees(selectedDept?.id, 1, 100); 

const employees = employeeData?.results || [];

  const handleAddDepartment = () => setIsAddModalOpen(true);

  const handleCardClick = dept => {
    setSelectedDept(dept);
    setIsPopupOpen(true);
  };

  const handleSaveDepartment = newDept => {
    createMutation.mutate({ name: newDept.name }, {
      onSuccess: () => setIsAddModalOpen(false),
      onError: err => alert(err.response?.data?.message || err.message || "Error creating department")
    });
  };

  const handleUpdateDepartment = (updatedDept) => {
  updateMutation.mutate(
    {
      id: selectedDept.id,
      data: { name: updatedDept.name, employee_ids: updatedDept.head_ids },
    },
    {
      onSuccess: (res) => {
        // Update local state immediately
        setSelectedDept((prev) => ({
          ...prev,
          name: res.name,
          head_ids: res.head_ids,
        }));
        setIsPopupOpen(false);
      },
    }
  );
};

const enrichedDepartments = departments.map(dept => ({
  ...dept,
head_names: (dept.head_ids || []).map(head => head.name),
}));

  return (
    <>
      <Topbar />
      <PageHeader
        title="Department"
        subtitle="View and manage all organizational departments in one place."
        rightContent={<button className="primary-btn" onClick={handleAddDepartment}>+ Add Department</button>}
      />

      {isLoading ? (
        <PageSkeleton />
      ) : (
        <DepartmentUI
          departments={enrichedDepartments}
          employees={employees} 
          onCardClick={handleCardClick}
          onAddClick={handleAddDepartment}
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}

      <AddDepartmentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveDepartment}
      />

      {selectedDept && isPopupOpen && (
        <EditDepartmentModal
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          department={selectedDept}
          onSave={handleUpdateDepartment}
              employees={employees} 
        />
      )}
    </>
  );
};

export default DepartmentContainer;