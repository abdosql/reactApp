import React from 'react';
import styled from 'styled-components';
import SettingsTabs from '../components/Settings/SettingsTabs';
const SettingsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>System Settings</Title>
        <Subtitle>Configure system preferences and options</Subtitle>
      </PageHeader>
      
      <PageContent>
        <SettingsTabs/>
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

export default SettingsPage; 