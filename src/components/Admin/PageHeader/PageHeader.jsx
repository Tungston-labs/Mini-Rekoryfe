import React from "react";
import {
  HeaderContainer,
  Avatar,
  GridContainer,
  Column,
  TopText,
  BottomText,
} from "./PageHeader.Styles";
import { FaChevronLeft } from "react-icons/fa6";
const PageHeader = () => {
  return (
    <HeaderContainer>
      <FaChevronLeft size={18} style={{color: "#BA0D11"}} />
      <Avatar src="https://i.pravatar.cc/100" alt="profile" />

      <GridContainer>

        <Column>
          <TopText>Aditi Sharma</TopText>
          <BottomText>ID: EMP-1023</BottomText>
        </Column>

        <Column>
          <TopText>Software Engineer</TopText>
          <BottomText>+91 9123654789</BottomText>
        </Column>

        <Column>
          <TopText>Development</TopText>
          <BottomText>arjuns@gmail.com</BottomText>
        </Column>

      </GridContainer>

    </HeaderContainer>
  );
};

export default PageHeader;
