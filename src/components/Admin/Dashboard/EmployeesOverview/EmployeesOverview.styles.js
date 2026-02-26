import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`;

export const Subtitle = styled.p`
  margin-top: 8px;
  font-size: 13px;
  font-weight: 100;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  
`;

export const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 5px;
box-shadow: 0px 2.7px 25px 0px rgba(15, 15, 15, 0.05);
border: 0.01px solid rgba(61, 51, 51, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  gap: 15px;
  align-items: center;
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffecec;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c61217;
`;

export const CardTitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

export const Count = styled.h3`
  margin: 5px 0 0;
  font-size: 20px;
  font-weight: 600;
`;

export const Right = styled.div``;

export const AddButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #c61217;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(65, 63, 63, 0.3);

  &:hover {
    transform: scale(1.05);
  }
`;
