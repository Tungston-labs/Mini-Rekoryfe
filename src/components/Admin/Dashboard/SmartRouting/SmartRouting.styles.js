import styled from "styled-components";

/* ================= WRAPPER ================= */
export const Wrapper = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ================= LEFT PANEL ================= */
export const LeftPanel = styled.div`
  flex: 1;
  padding: 20px;
  background: #fff;
  border-right: 1px solid #eee;

  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #eee;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

/* ================= RIGHT PANEL (OPTIONAL MAP) ================= */
export const RightPanel = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    height: 300px;
    padding: 10px;
  }
`;

/* ================= HEADER ================= */
export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: #777;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

/* ================= FILTERS ================= */
export const Filters = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const FilterButton = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  background: ${(props) => (props.$active ? "#C61217" : "#eee")};
  color: ${(props) => (props.$active ? "#fff" : "#333")};

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 5px 10px;
  }
`;

/* ================= EMPLOYEE LIST ================= */
export const EmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  flex: 1;
  overflow-y: auto;
  padding-right: 5px;
  scroll-behavior: smooth;

  /* scrollbar */
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
`;

/* ================= EMPLOYEE CARD ================= */
export const EmployeeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: ${(props) => (props.$active ? "#f1f5f9" : "#fafafa")};
  border-left: ${(props) =>
    props.$active ? "4px solid #C61217" : "4px solid transparent"};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #f9fafb;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 8px;
  }
`;

/* ================= AVATAR ================= */
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

/* ================= INFO ================= */
export const Info = styled.div`
  flex: 1;
`;

/* ================= NAME ================= */
export const Name = styled.h4`
  margin: 0;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

/* ================= STATUS ================= */
export const Status = styled.p`
  margin: 3px 0 0;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${({ $active }) => ($active ? "rgb(50, 167, 93)" : "#C61217")};

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

/* ================= ARROW ================= */
export const Arrow = styled.div`
  color: #C61217;
  display: flex;
  align-items: center;
`;
// export const MapContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
// `;
