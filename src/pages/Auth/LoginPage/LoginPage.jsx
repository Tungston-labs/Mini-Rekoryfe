import React from "react";
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
  ForgotPassword
} from "./LoginPage.styles";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logo from "../../../assets/images/logo.png";
import illustration from "../../../assets/images/map.png";
const LoginPage = ({
  showPassword,
  onTogglePassword,
  onLogin,
  email,
  password,
  onChangeEmail,
  onChangePassword,
  errors,
  apiError,
  loading,
  onForgotPassword,
}) => {
  return (
    <PageWrapper>
      <Left>
        <LoginBox>
          <Title>Welcome Back!</Title>
          <Subtitle>
            Please sign in to your Mini Rekory account
          </Subtitle>

          <Field>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChangeEmail}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </Field>

          <Field>
            <Label>Password</Label>

            <InputWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={onChangePassword}
              />
              <EyeIcon onClick={onTogglePassword}>
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </EyeIcon>
            </InputWrapper>

            {errors.password && <ErrorText>{errors.password}</ErrorText>}
            <ForgotPassword onClick={onForgotPassword}>
              Forgot Password?
            </ForgotPassword>
          </Field>

          {apiError && <ErrorText>{apiError}</ErrorText>}

          <LoginButton onClick={onLogin} disabled={loading}>
            {loading ? "Logging..." : "LOG IN"}
          </LoginButton>
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
