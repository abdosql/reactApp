import React from 'react';
import styled from 'styled-components';

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <Title>Dashboard Overview</Title>
        <Subtitle>Welcome to your monitoring dashboard</Subtitle>
      </DashboardHeader>
      
      {/* Placeholder for dashboard content */}
      <DashboardContent>
        {/* Your dashboard cards and graphs will go here */}
      </DashboardContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 1rem;
`;

const DashboardHeader = styled.div`
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

const DashboardContent = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export default DashboardPage; 