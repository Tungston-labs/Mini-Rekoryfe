import styled from "styled-components";
import Select from "react-select";

export const PageWrapper = styled.div`
  background: #ffffff;
  padding: 30px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 520px;
  
`;

export const Label = styled.label`
  font-size: 13px;
  color: #414141;
  font-weight: 500;
font-weight: 400;
line-height: 160%;
letter-spacing: 0%;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #c1121f;
  }
`;

// export const Select = styled.select`
//   height: 40px;
//   padding: 0 12px;
//   border: 1px solid #d1d5db;
//   border-radius: 6px;
//   font-size: 14px;
//   background: white;

//     &:focus {
//     outline: none;
//     border-color: #c1121f;
//   }
// `;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const SaveButton = styled.button`
  background: #c1121f;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background: white;
  border: 1px solid #374151;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 2px;
`;

export const StyledSelectWrapper = styled.div`
  .react-select__control {
    border-radius: 8px;
    border: 1px solid #d1d5db;
    min-height: 30px;
    box-shadow: none;
    &:hover {
      border-color: #c1121f;
    }
  }

  .react-select__control--is-focused {
    border-color: #c1121f;
  }

  .react-select__menu {
    border-radius: 8px;
    z-index: 9999;
  }

  .react-select__option {
    color: #111827;
    padding: 10px;
    &:hover {
      background-color: #e0e7ff;
    }
  }

  .react-select__placeholder {
    color:rgb(124, 124, 128);
    font-size: 14px;
    font-weight: 400;
  }

  .react-select__single-value {
    color: #111827;
        font-size: 14px;
  }
`;
export const StyledSelect = styled(Select)`
  .react-select__control {
    border: 1px solid #ccc;
    border-radius: 6px;
    min-height: 40px;
    padding: 2px;
    box-shadow: none;
    &:hover {
     border-color: #c1121f;
    }
  }

  .react-select__value-container {
    padding: 0 8px;
  }

  .react-select__multi-value {
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 2px 4px;
     

  }

  .react-select__multi-value__label {
    color: #333;
  }

  .react-select__placeholder {
  color:rgb(124, 124, 128);
    font-size: 14px;
    font-weight: 400;
  }
`;