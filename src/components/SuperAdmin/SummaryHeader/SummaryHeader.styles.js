import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
    padding: 20px ;
`;

export const Left = styled.div``;

export const Cards = styled.div`
  display: flex;
  gap: 30px;
`;

export const Card = styled.div`
  align-items: center;
  gap: 12px;
  background: #fff;
  padding: 14px 16px;
  min-width: 250px;
  position: relative;
  box-shadow: 0 0 0 2px #4545500D;
  background-color: #FAFAFC;
  border-radius: 8px;
`;

export const IconBox = styled.div`
  font-size: 22px;
  color:rgb(0, 0, 0);
  margin-bottom: 8px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color:rgb(0, 0, 0);
  gap:10px;
`;

export const Count = styled.strong`
  font-size: 20px;
  color: #111827;
  font-weight: 600;
`;

export const ActionBtn = styled.button`
  position: absolute;
  right: 12px;
  bottom: 18px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: #C61217;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 16px 30px 0px #00000033;

`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 15px;
  font-size: 12px;
  border-radius: 6px;
  background: #F7F6F9;
  cursor: pointer;
  color:rgb(150, 153, 156);
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 6px;
  background: #F7F6F9;
  color:rgb(150, 153, 156);
  input {
    border: none;
    outline: none;
    font-size: 12px;
    width: 180px;
     background: #F7F6F9;

  }
`;
