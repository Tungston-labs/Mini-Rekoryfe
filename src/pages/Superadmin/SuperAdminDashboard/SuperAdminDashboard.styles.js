import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 14px;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  color: #6b7280;
`;

export const Td = styled.td`
  padding: 14px;
  font-size: 13px;
  border-bottom: 1px solid #f1f1f1;
`;

export const CompanyCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Status = styled.span`
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 6px;
  color: ${({ type }) => (type === "PAID" ? "#1a7f37" : "#c62828")};
  border: 1px solid
    ${({ type }) => (type === "PAID" ? "#1a7f37" : "#c62828")};
`;

export const OfferWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #9ca3af;
`;

export const Toggle = styled.div`
  width: 34px;
  height: 18px;
  border-radius: 20px;
  background: ${({ active }) => (active ? "#16a34a" : "#cbd5e1")};
  position: relative;
  cursor: pointer;
`;

export const Knob = styled.div`
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ active }) => (active ? "18px" : "2px")};
  transition: 0.2s;
`;
