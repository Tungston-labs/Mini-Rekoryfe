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

const EditDepartmentModal = ({
  isOpen,
  onClose,
  department,
  onSave
}) => {
  const [name, setName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  // ✅ Set existing department data when modal opens
  useEffect(() => {
    if (department) {
      setName(department.name || "");

      // If backend gives head_ids
      if (department.head_ids) {
        const formattedHeads = department.head_ids.map((head) => ({
          value: head.id,
          label: head.name,
        }));
        setSelectedOptions(formattedHeads);
      }
    }
  }, [department]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!name.trim()) {
      alert("Department name cannot be empty");
      return;
    }

    onSave({
      name,
      head_ids: selectedOptions.map((opt) => opt.value),
    });
  };

  const options = [
    { value: 1, label: "Ajay Kumar" },
    { value: 2, label: "Mumthaz" },
    { value: 3, label: "Aiswarya" },
  ];

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
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
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Department Head</Label>
          <Select
            options={options}
            isMulti
            value={selectedOptions}
            onChange={setSelectedOptions}
            placeholder="Select Department Head"
            styles={customStyles}
          />
        </FormGroup>

        <ButtonGroup>
          <SaveButton onClick={handleSave}>
            Save Changes
          </SaveButton>
          <CancelButton onClick={onClose}>
            Cancel
          </CancelButton>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default EditDepartmentModal;