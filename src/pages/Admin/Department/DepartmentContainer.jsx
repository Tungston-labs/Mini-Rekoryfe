import React, { useState } from "react";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import AddDepartmentModal from "../../../components/Admin/Department/AddDepartment/AddDepartmentModal";
import DepartmentUI from "./Department";
import EditDepartmentModal from "../../../components/Admin/Department/EditDepartmentModal/EditDepartmentModal";
import { useDepartments, useCreateDepartment } from "../../../hooks/Admin/department/useDepartments";
import { useUpdateDepartment } from "../../../hooks/Admin/department/useUpdateDepartment";
const DepartmentContainer = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const { data, isLoading } = useDepartments();
  const departments = Array.isArray(data) ? data : []; // ensure array

  const createMutation = useCreateDepartment();
const updateMutation = useUpdateDepartment();

  const handleAddDepartment = () => setIsAddModalOpen(true);

  const handleCardClick = (dept) => {
    setSelectedDept(dept);
    setIsPopupOpen(true);
  };

  const handleSaveDepartment = (newDept) => {
    // Pass the whole object, not just the name
    createMutation.mutate(
      { name: newDept.name }, 
      {
        onSuccess: () => {
          setIsAddModalOpen(false);
        },
        onError: (err) => {
          alert(err.response?.data?.message || err.message || "Error creating department");
        },
      }
    );
  };

  const handleUpdateDepartment = (updatedDept) => {
  updateMutation.mutate(
   {
      id: selectedDept.id,
      data: {
        name: updatedDept.name,
        head_ids: updatedDept.head_ids, 
      },
    },
    {
      onSuccess: () => {
        setIsPopupOpen(false);
        setSelectedDept(null);
      },
    }
  );
};
  return (
    <>
      <Topbar />
      <PageHeader
        title="Department"
        subtitle="View and manage all organizational departments in one place."
        rightContent={
          <button className="primary-btn" onClick={handleAddDepartment}>
            + Add Department
          </button>
        }
      />

      {isLoading ? (
        <p>Loading departments...</p>
      ) : (
        <DepartmentUI
          departments={departments}
          onCardClick={handleCardClick}
          onAddClick={handleAddDepartment}
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
        />
      )}
    </>
  );
};

export default DepartmentContainer;