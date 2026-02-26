import React from "react";
import {
  Overlay,
  ModalBox,
  Title,
  Message,
  Actions,
  CancelButton,
  ConfirmButton,
} from "./ConfirmModal.styles";

const ConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <Overlay>
      <ModalBox>
        <Title>Activate Company</Title>
        <Message>
          Are you sure you want to pay this invoice and activate the company?
        </Message>

        <Actions>
          <CancelButton onClick={onCancel}>No</CancelButton>
          <ConfirmButton onClick={onConfirm}>
            Yes, Activate
          </ConfirmButton>
        </Actions>
      </ModalBox>
    </Overlay>
  );
};

export default ConfirmModal;