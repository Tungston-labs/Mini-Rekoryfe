import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Circle = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  overflow: visible; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%; 
  }
`;


export const UploadIcon = styled.div`
  color: #6b7280;
`;

export const RemoveIcon = styled.div`
  position: absolute;
  top: -6px;     
  right: -6px;  
  background: #dc2626;
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;


export const Label = styled.span`
  font-size: 13px;
font-weight: 400;
`;

export const HiddenInput = styled.input`
  display: none;
`;
