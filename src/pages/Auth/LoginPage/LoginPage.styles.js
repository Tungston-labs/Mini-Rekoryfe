import styled from "styled-components";
import { Link } from "react-router-dom";
export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Left = styled.div`
  flex: 1;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  flex: 1;
  background: #c61217;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const BrandText = styled.div`
  max-width: 650px;
  text-align: center;
  padding: 20px;
  font-family: "Ubuntu", sans-serif;

   @media (max-width: 1440px) {
     max-width: 400px;
  }
`;
export const Heading = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
    margin-bottom: 24px;
  @media (max-width: 1300px) {
    font-size: 25px;
    margin-bottom: 24px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  opacity: 0.95;
  margin: 0;

  @media (max-width: 1300px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
export const LoginBox = styled.div`
  width: 100%;
  max-width: 380px;
  /* text-align: center; */
`;

export const Title = styled.h1`
  margin-bottom: 8px;
font-weight: 400;
font-size: 36px;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 32px;
font-weight: 400;
font-size: 14px;
letter-spacing: 1px;

`;

export const Field = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;

export const Label = styled.label`
font-weight: 400;
font-style: Regular;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;

`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  border-radius: 6px;
  border: 1px solid #EAEAEA;
  background-color: #FAFAFA;
  outline: none;

  &:focus {
    border-color: #ba0d11;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 16px;
  background: #C61217;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
font-style: Bold;
font-size: 14px;

  &:hover {
    background: #9e0b0e;
  }
`;

export const RightContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Logo = styled.img`
  width: 80px;

`;

export const Illustration = styled.img`
  width: 70%;
  max-width: 250px;
  min-width: 180px;
  margin-bottom: 32px;

  @media (max-height: 1300px) {
    width: 60%;
    max-width: 200px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;
export const EyeIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
  display: flex;
  align-items: center;

  &:hover {
    color: #c61217;
  }
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 5px;
`;
export const BackLink = styled(Link)`
  display: block;       
  margin-top: 15px;
  font-size: 14px;
  color: #c61217;
  font-weight: 500;
  text-decoration: none;
  text-align: center;  

  &:hover {
    text-decoration: underline;
  }
`;
export const ForgotPassword = styled.div`
  text-align: right;
  margin-top: 6px;
  font-size: 13px;
  color: #C61217;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;