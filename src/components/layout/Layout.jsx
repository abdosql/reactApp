import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <Navbar />
        <PageContent>
          {children}
        </PageContent>
      </MainContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #ffffff;
`;

export default Layout; 