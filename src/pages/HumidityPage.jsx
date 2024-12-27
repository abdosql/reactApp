import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import HumGraph from '../components/dashboard/Graphs/HumidityGraph';
import { BASE_URL } from '../config'; 
const humReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HUM_DATA':
      return { ...state, humGraph: { ...state.humGraph, data: action.payload } };
    case 'UPDATE_HUM_DATE_RANGE':
      return { ...state, humGraph: { ...state.humGraph, dateRange: action.payload } };
    default:
      return state;
  }
};

const HumidityPage = () => {
  const initialState = {
    humGraph: {
      data: [],
      dateRange: {
        start: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
        end: new Date().toISOString(),
      },
    },
  };

  const [state, dispatch] = useReducer(humReducer, initialState);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/enregistrements/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        // Format data to match the structure of initialData
        const formattedData = result.flatMap((item) => [
          {
            date: item.date_enregistrement,
            type: 'temperature',
            value: item.temperature,
          },
          {
            date: item.date_enregistrement,
            type: 'humidity',
            value: item.humidite,
          },
        ]);

        dispatch({ type: 'SET_HUM_DATA', payload: formattedData.filter(d => d.type === 'humidity') });
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleDateChange = (dateRange) => {
    dispatch({ type: 'UPDATE_HUM_DATE_RANGE', payload: dateRange });
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Humidity Monitoring</Title>
        <Subtitle>Monitor and manage humidity sensors</Subtitle>
      </PageHeader>

      <PageContent>
        <HumGraph
          data={state.humGraph.data}
          dateRange={state.humGraph.dateRange}
          onDateChange={handleDateChange}
        />
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
  display: grid;
  gap: 1.5rem;
`;

export default HumidityPage;
