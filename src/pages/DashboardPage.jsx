import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StatsCard from '../components/common/StatsCard';
import TemperatureCard from '../components/dashboard/States/TemperatureCard';
import HumidityCard from '../components/dashboard/States/HumidityCard';
import AverageHumidityCard from '../components/dashboard/States/AverageHumidityCard';
import AverageTemperatureCard from '../components/dashboard/States/AverageTemperatureCard';
import { CardsSection } from '../styles/components/StatsCardStyles';
import AlertTable from '../components/data/tables/AlertTable';
import OperatorsTable from '../components/data/tables/OperatorsTable';
import SensorsTable from '../components/data/tables/SensorsTable';

const DashboardPage = () => {
  const [timeSinceUpdate, setTimeSinceUpdate] = useState(0);
  
  const breadcrumbItems = [
    {
      label: 'Home',
      onClick: () => console.log('Navigate to Home')
    },
    {
      label: 'Dashboard',
    }
  ];

  useEffect(() => {
    const updateTime = () => {
      setTimeSinceUpdate((prevTime) => (prevTime < 20 ? prevTime + 1 : 0));
    };
    // Increment time every minute; reset every 20 mins
    const interval = setInterval(updateTime, 60000); // 60000ms = 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <PageContainer>
      <PageHeader>
        <Title>Dashboard Overview</Title>
        <Subtitle>Welcome to your monitoring dashboard</Subtitle>
      </PageHeader>
      
      <PageContent>
        <CardsSection>
          <TemperatureCard value="24.5" time={timeSinceUpdate} />
          <HumidityCard value="65" time={timeSinceUpdate} />
          <AverageTemperatureCard value="23.8" />
          <AverageHumidityCard value="62" />
        </CardsSection>

        <Section>
          <SectionTitle>Recent Alerts</SectionTitle>
          <AlertTable />
        </Section>

        <Section>
          <SectionTitle>Sensors Overview</SectionTitle>
          <SensorsTable />
        </Section>

        <Section>
          <SectionTitle>Active Operators</SectionTitle>
          <OperatorsTable />
        </Section>
      </PageContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #6c757d;
  font-size: 0.875rem;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.25rem;
  font-weight: 500;
`;

export default DashboardPage; 