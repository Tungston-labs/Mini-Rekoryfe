import React from "react";
import * as S from "./LocationDetails.styles";
import { FiMapPin, FiClock } from "react-icons/fi";
import { IoFingerPrintOutline } from "react-icons/io5";

const LocationDetails = ({ routeData }) => {
  return (
    <S.DashboardContainer>
      <S.RouteSidebar>
        <S.RouteHeader>Route Details</S.RouteHeader>

        {(routeData || []).map((step, index) => (
          <S.TimelineItem key={index}>
            <S.MarkerWrapper $isLast={index === routeData.length - 1}>
              <S.MarkerCircle $type={step.type}>
                {["punch_in", "punch_out"].includes(step.type) ? (
                  <IoFingerPrintOutline size={18} />
                ) : (
                  index + 1
                )}
              </S.MarkerCircle>
            </S.MarkerWrapper>

            <S.LocationCard $error={step.status === "error"}>
              <S.CardRow>
                <S.LeftSection>
                  <S.TitleRow>
                    <S.MapIconWrapper $error={step.status === "error"}>
                      <FiMapPin />
                    </S.MapIconWrapper>
                    <S.StepTitle $error={step.status === "error"}>
                      {step.title}
                    </S.StepTitle>
                  </S.TitleRow>

                  <S.LocationText>{step.loc}</S.LocationText>
                </S.LeftSection>

                <S.TimeStamp $error={step.status === "error"}>
                  <FiClock size={12} /> {step.time}
                </S.TimeStamp>
              </S.CardRow>
            </S.LocationCard>
          </S.TimelineItem>
        ))}
      </S.RouteSidebar>

      <S.MapContainer>
        <div style={{ padding: "20px" }}>Map View</div>
      </S.MapContainer>
    </S.DashboardContainer>
  );
};

export default LocationDetails;