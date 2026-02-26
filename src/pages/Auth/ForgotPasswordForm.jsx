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
  Heading,
  Description,
  BackLink
} from "./LoginPage/LoginPage.styles";
import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/map.png";

const LoginPage = () => {

  return (
    <PageWrapper>
      <Left>
        <LoginBox>
          <Title>Forgot password!</Title>
          <Subtitle>
            Please Enter Your Email ID 
          </Subtitle>

          <Field>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" />
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
