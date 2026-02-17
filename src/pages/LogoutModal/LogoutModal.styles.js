
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 350px;
`;

export const ModalHeader = styled.h3`
  margin: 0 0 16px 0;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
`;

export const ModalBody = styled.p`
  margin: 0 0 24px 0;
  font-size: 16px;
  font-weight: 200;
    font-family: "Ubuntu", sans-serif;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  background: ${(props) =>
    props.variant === "danger" ? "#c1121f" : props.variant === "secondary" ? "#e2e8f0" : "#3182ce"};
  color: ${(props) => (props.variant === "secondary" ? "#1a202c" : "#fff")};

  &:hover {
    opacity: 0.9;
  }
`;
