import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "./LogoutModal.styles"; 

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>Confirm Logout</ModalHeader>
        <ModalBody>Are you sure you want to log out?</ModalBody>
        <ModalFooter>
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="danger">
            Logout
          </Button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default LogoutModal;
