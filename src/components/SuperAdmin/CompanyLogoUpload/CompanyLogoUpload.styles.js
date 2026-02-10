import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UploadIcon = styled.div`
  color: #6b7280;
`;

export const RemoveIcon = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: #dc2626;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: 13px;
font-weight: 400;
`;

export const HiddenInput = styled.input`
  display: none;
`;
