import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 500px;
  background: #f7f7f7;
  border-radius: 16px;
  padding: 30px 35px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15);
`;

export const Header = styled.div`
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #666;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 20px 0;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  background: #ffffff;

  &:focus {
    border-color: #d71920;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  background: #ffffff;
  cursor: pointer;

  &:focus {
    border-color: #d71920;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const SaveButton = styled.button`
  background: #d71920;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #b9151b;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  color: #d71920;
  border: 1px solid #d71920;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #d71920;
    color: white;
  }
`;
