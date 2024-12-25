import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import TempGraph from '../components/dashboard/Graphs/TemperatureGraph';

const tempReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEMP_DATA':
      return { ...state, tempGraph: { ...state.tempGraph, data: action.payload } };
    case 'UPDATE_TEMP_DATE_RANGE':
      return { ...state, tempGraph: { ...state.tempGraph, dateRange: action.payload } };
    default:
      return state;
  }
};

const TemperaturePage = () => {
  const initialState = {
    tempGraph: {
      data: [],
      dateRange: {
        start: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
        end: new Date().toISOString(),
      },
    },
  };

  const [state, dispatch] = useReducer(tempReducer, initialState);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/enregistrements/');
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
        ]);

        dispatch({ type: 'SET_TEMP_DATA', payload: formattedData });
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleDateChange = (dateRange) => {
    dispatch({ type: 'UPDATE_TEMP_DATE_RANGE', payload: dateRange });
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Temperature Monitoring</Title>
        <Subtitle>Monitor and manage temperature sensors</Subtitle>
      </PageHeader>

      <PageContent>
        <TempGraph
          data={state.tempGraph.data}
          dateRange={state.tempGraph.dateRange}
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

export default TemperaturePage;
