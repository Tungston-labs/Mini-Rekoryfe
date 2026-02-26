import styled from "styled-components";

export const Wrapper = styled.div`
  background: #FAFAFC;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 200px;
`;

export const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const TimeDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


export const TimeText = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const DateText = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
   font-weight: 100;
`;

export const Divider = styled.div`
  width: 1px;
  height: 80px;
  background: #ddd;
  margin: 0 30px;
`;

export const CenterSection = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const Subtitle = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #777;
  line-height: 1.6;
`;

export const RightSection = styled.div`
  margin-left: 40px;
`;

export const Illustration = styled.img`
  height: 120px;
`;
