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
import MapView from '../components/common/MapView';
import { BASE_URL } from '../config';
const initialState = {
  tempHum: {
    data: [],
    dateRange: {
      start: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
      end: new Date().toISOString(),
    },
    selectedType: 'both',
  },
};

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEMP_HUM_DATA':
      return { ...state, tempHum: { ...state.tempHum, data: action.payload } };
    case 'UPDATE_TEMP_HUM_TYPE':
      return { ...state, tempHum: { ...state.tempHum, selectedType: action.payload } };
    case 'UPDATE_TEMP_HUM_DATE_RANGE':
      return { ...state, tempHum: { ...state.tempHum, dateRange: action.payload } };
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
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/enregistrements/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 6));
        const recentData = result.filter(item => new Date(item.date_enregistrement) >= sevenDaysAgo);

        const formattedData = recentData.flatMap((item) => [
          { date: item.date_enregistrement, type: 'temperature', value: item.temperature },
          { date: item.date_enregistrement, type: 'humidity', value: item.humidite },
        ]);

        dispatch({ type: 'SET_TEMP_HUM_DATA', payload: formattedData });
        setData(recentData);
        if (recentData.length > 0) {
          setLatestRecord(recentData[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const calculateAverage = (type) => {
    const filtered = data.filter((item) => item[type]);
    if (filtered.length === 0) return 0;

    const total = filtered.reduce((sum, item) => sum + item[type], 0);
    return (total / filtered.length).toFixed(1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceUpdate((prev) => (prev < 20 ? prev + 1 : 0));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleTypeChange = (newType) => {
    dispatch({ type: 'UPDATE_TEMP_HUM_TYPE', payload: newType });
  };

  const handleDateRangeChange = (dateRange) => {
    dispatch({ type: 'UPDATE_TEMP_HUM_DATE_RANGE', payload: dateRange });
  };




  return (
    <PageContainer>
      <PageHeader>
        <Title>Dashboard Overview</Title>
        <Subtitle>Welcome to your monitoring dashboard</Subtitle>
      </PageHeader>

      <PageContent>
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

        <Section>
          <SectionTitle>Temperature & Humidity Overview</SectionTitle>
          <TempHum
            data={state.tempHum.data}
            dateRange={state.tempHum.dateRange}
            selectedType={state.tempHum.selectedType}
            onTypeChange={handleTypeChange}
            onDateRangeChange={handleDateRangeChange}
          />
        </Section>

        <Section>
          <SectionTitle>Recent Alerts</SectionTitle>
          <AlertTable />
        </Section>




        <SectionMap>
          <MapView   style={{ width: "100%", height: "100%" }}
  center={[51.505, -0.09]} // Example center
  zoom={13}/>
        </SectionMap>

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

const SensorsInfo = styled.h2`

`;

const SectionMap = styled.h2`

`;



export default DashboardPage;