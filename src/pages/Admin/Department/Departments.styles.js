import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 6px;
  padding: 24px 30px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2.7px 27.03px 0px #4545501A;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconBox = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 10%;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fafafa;
  background: #C61217;
  font-weight: 600;
  text-transform: uppercase; 
`;


export const DepartmentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DepartmentTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

export const DepartmentHead = styled.span`
  font-size: 14px;
  color: #777;
  margin-top: 6px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const EmployeeCount = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

export const EmployeeText = styled.span`
  font-size: 14px;
  color: #777;
`;

export const Arrow = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;
