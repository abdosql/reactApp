import React, { useReducer } from 'react';
import styled from 'styled-components';
import HumGraph from '../components/dashboard/Graphs/HumidityGraph';
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

  // 2024-11-21
  { date: '2024-11-22T08:00', type: 'temperature', value: 15 },
  { date: '2024-11-22T08:00', type: 'humidity', value: 73 },
  { date: '2024-11-22T12:00', type: 'temperature', value: 19 },
  { date: '2024-11-22T12:00', type: 'humidity', value: 66 },
  { date: '2024-11-22T18:00', type: 'temperature', value: 16 },
  { date: '2024-11-22T18:00', type: 'humidity', value: 70 },
  // 2024-11-21
  { date: '2024-11-23T08:00', type: 'temperature', value: 15 },
  { date: '2024-11-23T08:00', type: 'humidity', value: 73 },
  { date: '2024-11-23T12:00', type: 'temperature', value: 19 },
  { date: '2024-11-23T12:00', type: 'humidity', value: 66 },
  { date: '2024-11-23T18:00', type: 'temperature', value: 16 },
  { date: '2024-11-23T18:00', type: 'humidity', value: 70 },
];
const initialState = {
  humGraph: {
    data: initialData.filter(d => d.type === 'humidity'),
    dateRange: {
      start: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
      end: new Date().toISOString()
    },
  }
};

const humReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_HUM_DATE_RANGE':
      return { ...state, humGraph: { ...state.humGraph, dateRange: action.payload } };
    default:
      return state;
  }
};

const HumidityPage = () => {
  const [state, dispatch] = useReducer(humReducer, initialState);

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