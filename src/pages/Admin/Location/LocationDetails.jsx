import React, { useMemo } from "react";
import * as S from "./LocationDetails.styles";
import { FiMapPin, FiClock } from "react-icons/fi";
import { IoFingerPrintOutline } from "react-icons/io5";

const LocationDetails = ({ routeData }) => {
  const sortedRouteData = useMemo(() => {
    return [...(routeData || [])].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
  }, [routeData]);

  const formatLocation = (placeName) => {
    if (!placeName) return { main: "", sub: "" };
    const parts = placeName.split(",").map((p) => p.trim());
    const main = parts[0]; 
    const sub = parts.slice(1, 3).join(", "); 
    return { main, sub };
  };

  return (
    <S.DashboardContainer>
      <S.RouteSidebar>
        <S.RouteHeader>Route Details</S.RouteHeader>

        {sortedRouteData.map((step, index) => {
          const location = formatLocation(step.title);
          return (
            <S.TimelineItem key={index}>
              <S.MarkerWrapper $isLast={index === sortedRouteData.length - 1}>
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
                        <div>{location.main}</div>
                        <div style={{ fontSize: "12px", color: "#666" }}>
                          {location.sub}
                        </div>
                      </S.StepTitle>
                    </S.TitleRow>
                  </S.LeftSection>

                  <S.TimeStamp $error={step.status === "error"}>
                    <FiClock size={12} /> {step.time}
                  </S.TimeStamp>
                </S.CardRow>
              </S.LocationCard>
            </S.TimelineItem>
          );
        })}
      </S.RouteSidebar>

      <S.MapContainer>
        <div style={{ padding: "20px" }}>Map View</div>
      </S.MapContainer>
    </S.DashboardContainer>
  );
};

export default LocationDetails;