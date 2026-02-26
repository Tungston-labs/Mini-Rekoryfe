import styled from "styled-components";


export const Wrapper = styled.div`
  padding: 30px;
  margin-top: 20px;

  @media (max-width: 1024px) {
  padding: 30px;
  }

  @media (max-width: 768px) {
  padding: 30px;
  }
`;


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const Left = styled.div``;
export const Right = styled.div``;


export const Field = styled.div`
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  width: 80%;
  height: 44px;
  background:rgb(255, 255, 255);
  font-size: 14px;
  transition: all 0.2s ease;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #C61217;
    background: #fff;
  }

  @media (max-width: 480px) {
    height: 42px;
    font-size: 13px;
  }
`;

export const Select = styled.select`
  width: 80%;
  background:rgb(255, 255, 255);
  cursor: pointer;
  transition: all 0.2s ease;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #C61217;
    background: #fff;
  }

  @media (max-width: 480px) {
    height: 42px;
    font-size: 13px;
  }
`;

export const UploadBox = styled.div`
  margin-bottom: 25px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    margin: 0 auto 10px auto;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
    font-size: 28px;
  }
`;

export const UploadText = styled.p`
  font-size: 14px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ButtonRow = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SaveButton = styled.button`
  background: #C61217;
  color: #fff;
  border: none;
  padding: 10px 26px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease;

  &:hover {
    background: #b9161c;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CancelButton = styled.button`
  background: #fff;
  border: 1px solid #333;
  padding: 10px 26px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 2px;
`;