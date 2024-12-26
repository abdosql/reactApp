import React from 'react';
import styled from 'styled-components';
import SensorsTable from '../components/data/tables/SensorsTable';
import MapView from '../components/common/MapView';


const SensorsLocationPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Sensors Location</Title>
        <Subtitle>View and manage sensor locations</Subtitle>
      </PageHeader>

      <PageContent>
        <SensorsTable />
        <MapView />
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
