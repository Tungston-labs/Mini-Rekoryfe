import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #111827;
`;

const StateText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ active }) => (active ? "#16a34a" : "#9ca3af")};
`;

const Switch = styled.div`
  width: 44px;
  height: 24px;
  background: ${({ on }) => (on ? "#16a34a" : "#e5e7eb")};
  border-radius: 999px;
  padding: 2px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
`;

const Knob = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ on }) =>
    on ? "translateX(20px)" : "translateX(0)"};
  transition: transform 0.2s;

  svg {
    color: #16a34a;
    font-size: 14px;
  }
`;

const ToggleSwitchActive = ({ value, onChange, label = "Offer State" }) => {
  return (
    <Wrapper>
      {/* <Label>{label}</Label> */}

      <StateText active={!value}>InActive</StateText>

      <Switch on={value} onClick={() => onChange(!value)}>
        <Knob on={value}>
          {value && <FiCheck />}
        </Knob>
      </Switch>

      <StateText active={value}>Active</StateText>
    </Wrapper>
  );
};

export default ToggleSwitchActive;
