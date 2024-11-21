import React, { useState, useEffect,useReducer } from 'react';
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
import TempHum from '../components/dashboard/Graphs/TempHumGraph';
const initialData = [
  // 2024-11-15
  { date: '2024-11-15T08:00', type: 'temperature', value: 16 },
  { date: '2024-11-15T08:00', type: 'humidity', value: 70 },
  { date: '2024-11-15T12:00', type: 'temperature', value: 20 },
  { date: '2024-11-15T12:00', type: 'humidity', value: 65 },
  { date: '2024-11-15T18:00', type: 'temperature', value: 17 },
  { date: '2024-11-15T18:00', type: 'humidity', value: 72 },

  // 2024-11-16
  { date: '2024-11-16T08:00', type: 'temperature', value: 15 },
  { date: '2024-11-16T08:00', type: 'humidity', value: 73 },
  { date: '2024-11-16T12:00', type: 'temperature', value: 19 },
  { date: '2024-11-16T12:00', type: 'humidity', value: 66 },
  { date: '2024-11-16T18:00', type: 'temperature', value: 16 },
  { date: '2024-11-16T18:00', type: 'humidity', value: 70 },

  // 2024-11-17
  { date: '2024-11-17T08:00', type: 'temperature', value: 18 },
  { date: '2024-11-17T08:00', type: 'humidity', value: 67 },
  { date: '2024-11-17T12:00', type: 'temperature', value: 22 },
  { date: '2024-11-17T12:00', type: 'humidity', value: 62 },
  { date: '2024-11-17T18:00', type: 'temperature', value: 19 },
  { date: '2024-11-17T18:00', type: 'humidity', value: 65 },

  // 2024-11-18
  { date: '2024-11-18T08:00', type: 'temperature', value: 17 },
  { date: '2024-11-18T08:00', type: 'humidity', value: 68 },
  { date: '2024-11-18T12:00', type: 'temperature', value: 21 },
  { date: '2024-11-18T12:00', type: 'humidity', value: 64 },
  { date: '2024-11-18T18:00', type: 'temperature', value: 18 },
  { date: '2024-11-18T18:00', type: 'humidity', value: 66 },

  // 2024-11-19
  { date: '2024-11-19T08:00', type: 'temperature', value: 18 },
  { date: '2024-11-19T08:00', type: 'humidity', value: 66 },
  { date: '2024-11-19T12:00', type: 'temperature', value: 22 },
  { date: '2024-11-19T12:00', type: 'humidity', value: 63 },
  { date: '2024-11-19T18:00', type: 'temperature', value: 19 },
  { date: '2024-11-19T18:00', type: 'humidity', value: 67 },

  // 2024-11-20
  { date: '2024-11-20T08:00', type: 'temperature', value: 16 },
  { date: '2024-11-20T08:00', type: 'humidity', value: 70 },
  { date: '2024-11-20T12:00', type: 'temperature', value: 20 },
  { date: '2024-11-20T12:00', type: 'humidity', value: 65 },
  { date: '2024-11-20T18:00', type: 'temperature', value: 17 },
  { date: '2024-11-20T18:00', type: 'humidity', value: 72 },

  // 2024-11-21
  { date: '2024-11-21T08:00', type: 'temperature', value: 15 },
  { date: '2024-11-21T08:00', type: 'humidity', value: 73 },
  { date: '2024-11-21T12:00', type: 'temperature', value: 19 },
  { date: '2024-11-21T12:00', type: 'humidity', value: 66 },
  { date: '2024-11-21T18:00', type: 'temperature', value: 16 },
  { date: '2024-11-21T18:00', type: 'humidity', value: 70 },
];

const initialState = {
  tempHum: {
    data: initialData,
    dateRange: {
      start: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
      end: new Date().toISOString()
    },
    selectedType: 'both',
  }
};

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TEMP_HUM_TYPE':
      return { ...state, tempHum: { ...state.tempHum, selectedType: action.payload } };
    default:
      return state;
  }
};
const DashboardPage = () => {
  const [timeSinceUpdate, setTimeSinceUpdate] = useState(0);
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  const handleTypeChange = (newType) => {
    dispatch({ type: 'UPDATE_TEMP_HUM_TYPE', payload: newType });
  };
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
          <SectionTitle>Temperature & Humidity Overview</SectionTitle>
          <TempHum
            data={state.tempHum.data}
            dateRange={state.tempHum.dateRange}
            selectedType={state.tempHum.selectedType}
            onTypeChange={handleTypeChange}
          />
        </Section>
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