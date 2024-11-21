import React from 'react';
import styled from 'styled-components';
import OperatorsTable from '../components/data/tables/OperatorsTable';

const OperateursPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Operators Management</Title>
        <Subtitle>Manage system operators and their permissions</Subtitle>
      </PageHeader>
      
      <PageContent>
        <OperatorsTable />
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

export default OperateursPage; 