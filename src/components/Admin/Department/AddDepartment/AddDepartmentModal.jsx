import React from "react";
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
  SelectWrapper,
  Select,
  ButtonGroup,
  SaveButton,
  CancelButton
} from "./AddDepartmentModal.styles";

const AddDepartmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Add New Department</Title>
          <Subtitle>
            Create a new department to organize teams & roles
          </Subtitle>
        </Header>

        <Divider />

        <FormGroup>
          <Label>Department Name</Label>
          <Input type="text" placeholder="Development" />
        </FormGroup>

        <FormGroup>
          <Label>Department Code</Label>
          <Input type="text" placeholder="dgsdgdghbgh" />
        </FormGroup>

        {/* <FormGroup>
          <Label>Department Head</Label>
          <SelectWrapper>
            <Select>
              <option>Select Department Name</option>
              <option>Ajay Kumar</option>
              <option>Mumthaz</option>
              <option>Aiswarya</option>
            </Select>
          </SelectWrapper>
        </FormGroup> */}

        <ButtonGroup>
          <SaveButton>Save Department</SaveButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default AddDepartmentModal;
