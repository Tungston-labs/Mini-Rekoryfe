import styled from 'styled-components';

export const DashboardContainer = styled.div`
  /* display: flex; */
  gap: 20px;
  padding: 24px;
  font-family: 'Inter', sans-serif;


   @media (max-width: 1024px) {
    gap: 16px;
    padding: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RouteSidebar = styled.div`
  /* width: 380px; */
  height: 600px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 2.7px 25px 0px #4545501A;
  overflow-y: auto;
  scrollbar-width: thin;

   @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 350px;
    padding: 15px;
  }
`;


export const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 16px;
  }
`;

export const MarkerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  /* The Dotted Line Connector */
  &::after {
    content: '';
    position: absolute;
    top: 45px;
    width: 1px;
    height: calc(100% - 10px);
    border-left: 2px dotted #00A60B;
    display: ${props => props.$isLast ? 'none' : 'block'};
  }
`;

export const MarkerCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  background-color: #fff;

  border: 1px solid
    ${({ $type }) =>
    $type === "punch_out"
      ? "#BA0D11"
      : "#00A60B"};

  color: ${({ $type }) =>
    $type === "punch_out"
      ? "#BA0D11"
      : "#00A60B"};
`;

export const LocationCard = styled.div`
  flex: 1;
  padding: 15px;
  border: 1px solid ${props => props.$error ? '#dc3545' : '#e0e0e0'};
  border-radius: 8px;
  background: ${props => props.$error ? 'white' : 'white'};
  
`;

export const TimeStamp = styled.span`
  font-size: 0.85rem;
  color: ${props => props.$error ? '#dc3545' : '#28a745'};
  display: flex;
  align-items: center;
  gap: 5px;
`;

// export const MapContainer = styled.div`
//   flex: 1;
//   border-radius: 12px;
//   overflow: hidden;
//   background: url('https://your-map-provider-url.com/map.png'); /* Placeholder */
//   background-size: cover;
//   position: relative;
//   border: 1px solid #ddd;

//     @media (max-width: 768px) {
//     height: 400px;
//   }

//   @media (max-width: 480px) {
//     height: 300px;
//   }
// `;
export const PageHeaderWrapper = styled.div`
  padding: 0 24px;
  margin-bottom: 20px;
  
`;

export const PageTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #111;
`;

export const PageSubTitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;
export const RouteHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #111;
  padding: 10px;
  border-radius: 6px;
  background-color: #EDEDED80;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div``;

export const TitleRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LocationText = styled.small`
  margin-left: 24px;
  color: #666;
  font-size: 12px;
`;

export const MapIconWrapper = styled.div`
  display: flex;
  align-items: center;
  

  svg {
    color: ${({ $error }) =>
    $error ? "#BA0D11" : "#00A60B"};
  }
`;

export const MapContent = styled.div`
  padding: 20px;
`;

export const StepTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $error }) => ($error ? "#BA0D11" : "#1a1a1a")};
`;