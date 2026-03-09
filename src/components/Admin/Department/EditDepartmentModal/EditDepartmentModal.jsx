import React, { useState, useEffect } from "react";
import {
  Overlay,
  ModalContainer,
  Header,
  Title,
  Subtitle,
  Divider,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  SaveButton,
  CancelButton
} from "./EditDepartmentModal.styles";

import Select from "react-select";
import { customStyles } from "./EditDepartmentModal.styles";
import { useEmployees } from "../../../../hooks/Admin/employee/useEmployees";

const EditDepartmentModal = ({ isOpen, onClose, department, onSave }) => {
  const [name, setName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Fetch all employees for dropdown
  const { data: employeesData } = useEmployees({ page: 1, page_size: 100 });
  const allEmployees = employeesData?.results || [];

  // Map employees for react-select options
  const employeeOptions = allEmployees.map(emp => ({
    value: emp.id,
    label: emp.name,
  }));

  // When modal opens or department changes, set current values
  useEffect(() => {
    if (department) {
      setName(department.name || "");

      if (department.head_ids) {
        const formattedHeads = department.head_ids.map(headId => {
          const employee = allEmployees.find(emp => emp.id === headId);
          return {
            value: headId,
            label: employee?.name || `User ${headId}`,
          };
        });
        setSelectedOptions(formattedHeads);
      }
    }
  }, [department, allEmployees]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!name.trim()) {
      alert("Department name cannot be empty");
      return;
    }

    // Send IDs to backend
    onSave({
      name,
      head_ids: selectedOptions.map(opt => opt.value),
    });
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <Header>
          <Title>Edit Department</Title>
          <Subtitle>Update department details</Subtitle>
        </Header>

        <Divider />

        <FormGroup>
          <Label>Department Name</Label>
          <Input
            type="text"
            placeholder="Development"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Department Head</Label>
          <Select
            options={employeeOptions}
            isMulti
            value={selectedOptions}
            onChange={setSelectedOptions}
            placeholder="Select Department Head"
            styles={customStyles}
          />
        </FormGroup>

        <ButtonGroup>
          <SaveButton onClick={handleSave}>Save Changes</SaveButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default EditDepartmentModal;