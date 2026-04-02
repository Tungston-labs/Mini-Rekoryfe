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
  BackLink
} from "../Auth/LoginPage/LoginPage.styles";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useResetPassword } from "../../hooks/auth/useResetPassword";

import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/map.png";

const ResetPasswordPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  const resetToken = location.state?.resetToken;
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate: resetPasswordMutation, isPending } = useResetPassword();

 const handleResetPassword = () => {

  if (!newPassword || !confirmPassword) {
    toast.error("Please fill all fields");
    return;
  }

  if (newPassword !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  resetPasswordMutation(
    {
      email: email,
      reset_token: resetToken,
      new_password: newPassword
    },
    {
      onSuccess: () => {
        toast.success("Password reset successfully");

        navigate("/login");
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Reset failed");
      }
    }
  );
};

  return (
    <PageWrapper>

      <Left>
        <LoginBox>

          <Title>Reset Password!</Title>

          <Subtitle>
            Please reset password of your account
          </Subtitle>

          {/* New Password */}

          <Field>
            <Label>New Password</Label>

            <InputWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </EyeIcon>

            </InputWrapper>
          </Field>

          <LoginButton onClick={handleResetPassword} disabled={isPending}>
            {isPending ? "Resetting..." : "RESET PASSWORD"}
          </LoginButton>

          <BackLink to="/login">Back to Login</BackLink>

        </LoginBox>
      </Left>

      <Right>

        <RightContent>
          <BrandText>

            <Logo src={logo} alt="Mini Rekory Logo" />

            <Heading>
              Ready To Transform Your HR Management?
            </Heading>

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

export default ResetPasswordPage;