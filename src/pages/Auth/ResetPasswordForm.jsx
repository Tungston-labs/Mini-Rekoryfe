// pages/Login/LoginPage.jsx
import React, { useState } from "react";
import {
  PageWrapper,
  Left,
  Right,
  LoginBox,
  Title,
  Subtitle,
  Field,
  Label,
  Input,
  LoginButton,
  BrandText,
  Logo,
  Illustration,
  RightContent,
  EyeIcon,
  InputWrapper,
  Heading,
  Description,
  ErrorText,
  BackLink
} from "../Auth/LoginPage/LoginPage.styles";

import { FiEye, FiEyeOff } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/map.png";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageWrapper>
      {/* LEFT SIDE */}
      <Left>
        <LoginBox>
          <Title>Reset Password!</Title>
          <Subtitle>
            Please reset password of your account
          </Subtitle>

          <Field>
            <Label>New Password</Label>
         <InputWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </EyeIcon>
            </InputWrapper>
          </Field>

          <Field>
            <Label>Confirm Password</Label>

            <InputWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </EyeIcon>
            </InputWrapper>

          </Field>

          <LoginButton>LOG IN</LoginButton>
                <BackLink to="/login"> Back to Login</BackLink>
        </LoginBox>
      </Left>


      <Right>
        <RightContent>
          <BrandText>
            <Logo src={logo} alt="Mini Rekory Logo" />
            <Heading>Ready To Transform Your HR Management?</Heading>
            <Description>
              Mini Rekory is a smart employee tracking and workforce
              management app that helps organizations monitor employee
              location, automate attendance, manage routes, and streamline
              employee operations.
            </Description>
          </BrandText>
        </RightContent>

        <Illustration src={illustration} alt="Illustration" />
      </Right>
    </PageWrapper>
  );
};

export default LoginPage;
