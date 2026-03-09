import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const LeftPanel = styled.div`
  width: 320px;
  padding: 20px;
  background: #fff;
  border-right: 1px solid #eee;
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: #777;
  margin-top: 5px;
`;

export const Filters = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  background: ${(props) => (props.$active ? "#C61217" : "#eee")};
  color: ${(props) => (props.$active ? "#fff" : "#333")};
`;

export const EmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

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
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h4`
  margin: 0;
  font-size: 14px;
`;

export const Status = styled.p`
  margin: 3px 0 0;
  font-size: 12px;
  color: #777;
`;

export const Arrow = styled.div`
  color: #C61217;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;
