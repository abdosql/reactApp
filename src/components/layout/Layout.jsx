import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {
  LayoutWrapper,
  MainContent,
  PageContent
} from '../../styles/components/LayoutStyles';

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

export default Layout; 