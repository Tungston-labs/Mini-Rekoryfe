import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: #fff;
  padding: 24px;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Message = styled.p`
  margin-bottom: 20px;
  color: #555;
  font-size: 14px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const CancelButton = styled.button`
  padding: 8px 14px;
  border: none;
  background: #2563eb;
  border-radius: 6px;
  cursor: pointer;
color: white;
  &:hover {
    background:rgb(107, 149, 241);
  }
`;

export const ConfirmButton = styled.button`
  padding: 8px 14px;
  border: none;

  background: #e5e5e5;

  color: black;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background:rgb(29, 216, 69);
    color:white;
  }
`;