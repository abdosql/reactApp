import React from 'react';
import styled from 'styled-components';
import SensorsTable from '../components/data/tables/SensorsTable';
import MapView from '../components/common/MapView';

const sensorData = {
  latitude: 34.657511152221616,
  longitude: -1.907805076441269,
  sensorName: 'Temperature Sensor 01',
  sensorTemperature: 22.5,
  sensorHumidity: 55,
};

const SensorsLocationPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Sensors Location</Title>
        <Subtitle>View and manage sensor locations</Subtitle>
      </PageHeader>

      <PageContent>
        <SensorsTable />
        <MapView
          latitude={sensorData.latitude}
          longitude={sensorData.longitude}
          sensorName={sensorData.sensorName}
          sensorTemperature={sensorData.sensorTemperature}
          sensorHumidity={sensorData.sensorHumidity}
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
  display: flex;
  gap: 1rem; /* Adds space between SensorsTable and MapView */
  align-items: flex-start; /* Aligns items at the top */
`;

export default SensorsLocationPage;
