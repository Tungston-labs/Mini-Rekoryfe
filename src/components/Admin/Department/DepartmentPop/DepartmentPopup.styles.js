import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(255, 221, 228);
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CodeIcon = styled.div`
  background: #fff;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  color: #e11d48;
`;

export const TitleText = styled.h3`
  margin: 0;
  font-weight: 400;
margin-top: 10px;
`;

export const SubText = styled.p`
  margin: 4px 0 0 0;
  font-size: 13px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const EmployeeCount = styled.div`
  text-align: right;

  span {
    font-size: 12px;
    color: #666;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* margin-top: 20px; */
`;

export const Th = styled.th`
  text-align: left;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  font-size: 15px;
  font-weight: 500;
  border-bottom: 1px solid rgb(255, 221, 228);
`;

export const Td = styled.td`
  padding: 12px 8px;
  font-size: 13px;
  border-bottom: 1px solid #eee;
  font-weight: 200;
`;

export const EmployeeCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
`;

export const EditIcon = styled.div`
  cursor: pointer;
  color: #444;
`;
