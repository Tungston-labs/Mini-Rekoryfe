import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top:20px ;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 4px;
  border: 1px solid rgb(241, 241, 241);
  background: #FAFAFC;
  font-size: 14px;
  color:rgb(115, 122, 134);
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgb(241, 241, 241);
  background: #FAFAFC;
  min-width: 260px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  background: transparent;
   color:rgb(115, 122, 134);

  &::placeholder {
    color: #9ca3af;
  }
`;
export const HiddenDateInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgb(241, 241, 241);
  background: #FAFAFC;
  font-size: 14px;
  color: rgb(115, 122, 134);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #c61217;
  }
`;
export const RedSelectWrapper = styled.div`
  min-width: 180px;

  .react-select__control {
   border: 1px solid rgb(241, 241, 241);
    border-radius: 4px;
    background-color: #fafafc;
      color:rgb(115, 122, 134);
    &:hover {
      border-color: #a50f13;
    }
  }

  .react-select__control--is-focused {
    border-color: #c61217;
    box-shadow: 0 0 0 1px #c61217;
  }

  .react-select__single-value {
    color: #c61217;
        
  }

  .react-select__placeholder {
    /* color: #c61217; */
      color:rgb(115, 122, 134);
  }

  .react-select__menu {
    border: 1px solid #c61217;
    border-radius: 4px;
    
  }

  .react-select__option {
    color: #c61217;
    background-color: #fff;

    &:hover {
      background-color: #fddede;
    }

    &.react-select__option--is-selected {
      background-color: #c61217;
      color: #fff;
    }
  }

  .react-select__multi-value {
    background-color: #c61217;
    color: #fff;
  }

  .react-select__multi-value__label {
    color: #fff;
  }

  .react-select__multi-value__remove {
    color: #fff;
    &:hover {
      background-color: #a50f13;
      color: #fff;
    }
  }
`;