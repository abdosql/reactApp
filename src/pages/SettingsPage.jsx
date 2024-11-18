import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';

const SettingsPage = () => {
  const breadcrumbItems = [
    {
      label: 'Home',
      onClick: () => console.log('Navigate to Home')
    },
    {
      label: 'Settings',
    }
  ];

  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      <PageContainer>
        <PageHeader>
          <Title>System Settings</Title>
          <Subtitle>Configure system preferences and options</Subtitle>
        </PageHeader>
        
        <PageContent>
          {/* Settings content will go here */}
        </PageContent>
      </PageContainer>
    </Layout>
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