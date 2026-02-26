import React, { useEffect, useState } from "react";
import {
  Wrapper,
  LeftSection,
  TimeText,
  DateText,
  Divider,
  CenterSection,
  Title,
  Subtitle,
  RightSection,
  Illustration,
  IconWrapper,
  TimeIcon,
  TimeDateWrapper
} from "./DashboardHeader.styles";

import illustrationImg from "../../../../assets/images/rightimage.png";
import sunIcon from "../../../../assets/images/sun.png";

const DashboardHeader = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setDate(
        now.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      );

      const hour = now.getHours();
      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };
    updateDateTime(); 
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <LeftSection>
        <IconWrapper>
          <TimeIcon src={sunIcon} alt="Time Icon" />
        </IconWrapper>
        <TimeDateWrapper>
          <TimeText>{time}</TimeText>
          <DateText>{date}</DateText>
        </TimeDateWrapper>
      </LeftSection>
      <Divider />
      <CenterSection>
        <Title>{greeting} Meera S, Welcome Back!</Title>
        <Subtitle>
          It enables HR managers and administrators to quickly access employee profiles,
          <br />
          manage records, track statuses, and perform key actions
          from a single dashboard
        </Subtitle>
      </CenterSection>
      <RightSection>
        <Illustration src={illustrationImg} alt="Dashboard Illustration" />
      </RightSection>
    </Wrapper>
  );
};

export default DashboardHeader;
