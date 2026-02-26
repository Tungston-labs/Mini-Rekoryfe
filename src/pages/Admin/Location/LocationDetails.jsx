import React from 'react';
import * as S from './LocationDetails.styles';
import { FiMapPin, FiClock } from 'react-icons/fi'; 
import PageHeader from "../../../components/Admin/PageHeader/PageHeader"
import Topbar from '../../../components/SuperAdmin/Topbar/Topbar';
import { useParams } from "react-router-dom";
const routeData = [
  { id: 'start', title: 'Palarivattom', loc: 'Kochi, Kerala', time: '09:00 AM', status: 'active' },
  { id: '01', title: 'Panampilly Nagar', loc: 'Kochi, Kerala', time: '10:00 AM', status: 'pending' },
  { id: '02', title: 'Tripunithura', loc: 'Kochi, Kerala', time: '11:00 AM', status: 'pending' },
  { id: '03', title: 'Tripunithura', loc: 'Kochi, Kerala', time: '12:00 PM', status: 'pending' },
  { id: 'end', title: 'Tripunithura', loc: 'Kochi, Kerala', time: '01:00 PM', status: 'error' },
  
];

const SmartRouting = () => {
   const { id } = useParams(); 
  console.log("Employee ID:", id);
  return (
    <>
    <Topbar/>
    <PageHeader/>
   <S.PageHeaderWrapper>
        <S.PageTitle>Smart Routing</S.PageTitle>
        <S.PageSubTitle>
          You can automatically mark attendance and log in-time & out-time of your employees.
        </S.PageSubTitle>
      </S.PageHeaderWrapper>    

    <S.DashboardContainer>
      <S.RouteSidebar>       
<S.RouteHeader>
  Route Details : Feb 05, Thursday
</S.RouteHeader>
        
        {routeData.map((step, index) => (
          <S.TimelineItem key={index}>
            <S.MarkerWrapper $isLast={index === routeData.length - 1}>
              <S.MarkerCircle 
                $active={step.status === 'active'} 
                $error={step.status === 'error'}
              >
                {step.id === 'start' || step.id === 'end' ? 'M' : step.id}
              </S.MarkerCircle>
            </S.MarkerWrapper>

            <S.LocationCard $error={step.status === 'error'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiMapPin color={step.status === 'error' ? '#dc3545' : '#28a745'} />
                    <strong>{step.title}</strong>
                  </div>
                  <small style={{ color: '#666', marginLeft: '24px' }}>{step.loc}</small>
                </div>
                <S.TimeStamp $error={step.status === 'error'}>
                  <FiClock size={12} /> {step.time}
                </S.TimeStamp>
              </div>
            </S.LocationCard>
          </S.TimelineItem>
        ))}
      </S.RouteSidebar>

      <S.MapContainer>
      
         <div style={{ padding: '20px', color: '#666' }}>Map View (Overlaying Maryland Region)</div>
      </S.MapContainer>
    </S.DashboardContainer>
    </>
  );
};

export default SmartRouting;