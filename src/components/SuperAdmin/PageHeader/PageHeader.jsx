import React from "react";
import {
  HeaderContainer,
  Left,
  Title,
  SubTitle,
  Right,

} from "./PageHeader.Styles";

const PageHeader = ({ title, subtitle, rightContent }) => {
  return (
    <HeaderContainer>
      <Left>
        <Title>{title}</Title>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </Left>

      {/* RIGHT SIDE (dynamic) */}
      {rightContent && <Right>{rightContent}</Right>}
    </HeaderContainer>
  );
};

export default PageHeader;
