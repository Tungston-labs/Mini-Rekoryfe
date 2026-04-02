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
} from "../Auth/LoginPage/LoginPage.styles";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyOtp } from "../../hooks/auth/useVerifyOtp";

import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/map.png";

const OtpForm = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const [otp, setOtp] = useState("");
  const { mutate: verifyOtpMutation, isPending } = useVerifyOtp();

 const handleVerifyOtp = () => {
  if (!otp) {
    toast.error("Please enter OTP");
    return;
  }

  verifyOtpMutation(
    {
      email: email,
      otp: otp
    },
    {
      onSuccess: (data) => {
        toast.success("OTP Verified Successfully");

        const resetToken = data.reset_token;

        navigate("/reset-password", {
          state: {
            email: email,
            resetToken: resetToken
          }
        });
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Invalid OTP");
      }
    }
  );
};
  return (
    <PageWrapper>
      <Left>
        <LoginBox>
          <Title>OTP Verification</Title>

          <Subtitle>
            Please enter the OTP sent to your email.
          </Subtitle>

          <Field>
            <Label>OTP</Label>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Field>

          <LoginButton onClick={handleVerifyOtp} disabled={isPending}>
            {isPending ? "Verifying..." : "VERIFY OTP"}
          </LoginButton>

          <BackLink to="/login">Back to Login</BackLink>

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

export default OtpForm;