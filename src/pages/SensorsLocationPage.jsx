import React from 'react';
import styled from 'styled-components';
import SensorsTable from '../components/data/tables/SensorsTable';

const SensorsLocationPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Sensors Location</Title>
        <Subtitle>View and manage sensor locations</Subtitle>
      </PageHeader>
      
      <PageContent>
        <SensorsTable />
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
  margin-top: 2rem;
`;

export default SensorsLocationPage;