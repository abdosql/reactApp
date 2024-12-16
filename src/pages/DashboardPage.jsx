import React, { useState, useEffect, useReducer } from 'react';
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
  // Old initialData remains untouched
  { date: '2024-11-15T08:00', type: 'temperature', value: 16 },
  { date: '2024-11-15T08:00', type: 'humidity', value: 70 },
  //... Other existing initial data entries
];

const initialState = {
  tempHum: {
    data: initialData,
    dateRange: {
      start: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
      end: new Date().toISOString(),
    },
    selectedType: 'both',
  },
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
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const [data, setData] = useState([]); // API Data state
  const [latestRecord, setLatestRecord] = useState(null); // Latest record from API
  const [timeSinceUpdate, setTimeSinceUpdate] = useState(0);

  // Fetch backend data
  useEffect(() => {
    fetch('http://localhost:8000/api/enregistrements/')
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        if (apiData.length > 0) {
          setLatestRecord(apiData[0]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Calculate averages
  const calculateAverage = (type) => {
    const filtered = data.filter((item) => item[type]);
    if (filtered.length === 0) return 0;

    const total = filtered.reduce((sum, item) => sum + item[type], 0);
    return (total / filtered.length).toFixed(1);
  };

  // Increment timeSinceUpdate logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceUpdate((prev) => (prev < 20 ? prev + 1 : 0));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleTypeChange = (newType) => {
    dispatch({ type: 'UPDATE_TEMP_HUM_TYPE', payload: newType });
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Dashboard Overview</Title>
        <Subtitle>Welcome to your monitoring dashboard</Subtitle>
      </PageHeader>

      <PageContent>
        {/* Stats Cards Section */}
        <CardsSection>
          <TemperatureCard
            value={latestRecord ? latestRecord.temperature : 'N/A'}
            time={timeSinceUpdate}
          />
          <HumidityCard
            value={latestRecord ? latestRecord.humidite : 'N/A'}
            time={timeSinceUpdate}
          />
          <AverageTemperatureCard value={calculateAverage('temperature')} />
          <AverageHumidityCard value={calculateAverage('humidite')} />
        </CardsSection>

        {/* Graph Section */}
        <Section>
          <SectionTitle>Temperature & Humidity Overview</SectionTitle>
          <TempHum
            data={state.tempHum.data}
            dateRange={state.tempHum.dateRange}
            selectedType={state.tempHum.selectedType}
            onTypeChange={handleTypeChange}
          />
        </Section>

        {/* Existing Tables */}
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

// Styled Components
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
