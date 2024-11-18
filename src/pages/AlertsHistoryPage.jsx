import React from 'react';
import styled from 'styled-components';
import AlertTable from '../components/data/tables/AlertTable';

const AlertsHistoryPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Alerts History</Title>
        <Subtitle>View and manage system alerts</Subtitle>
      </PageHeader>
      
      <PageContent>
        <AlertTable />
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

export default AlertsHistoryPage; 