import React, { useState,useEffect } from "react";
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
  CancelButton,
} from "./AddDepartmentModal.styles";
import { toast } from "react-hot-toast";
const AddDepartmentModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

const handleSave = () => {
  if (!name.trim()) {
    toast.error("Department name cannot be empty ❌");
    return;
  }

  if (onSave) {
    onSave({ name });
  }
};

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Add New Department</Title>
          <Subtitle>Create a new department to organize teams & roles</Subtitle>
        </Header>

        <Divider />

        <FormGroup>
          <Label>Department Name</Label>
          <Input
            type="text"
            placeholder=" Eg.Development"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <ButtonGroup>
          <SaveButton onClick={handleSave}>Save Department</SaveButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default AddDepartmentModal;